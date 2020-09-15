import React, { useState } from 'react';
import { useAsync } from 'react-async-hook';
import styled from 'styled-components';
import { UserCardGrid, Error, UserCard, UserModal } from '../components';
import Add, { AddIcon } from '../components/icons/Add';
import { fetchUsers, deleteUser, editUser, createUser } from '../services/User';
import { User } from '../types';

const StyledView = styled.main`
  background-color: ${({ theme }) => theme.color.darkShades};
  color: ${({ theme }) => theme.color.lightShades};
  height: 100%;
  min-height: 100vh;
  & > h1 {
    margin: 0;
    width: 100%;
    text-align: center;
  }
  ${AddIcon} {
    font-size: ${({ theme }) => theme.sizes.xs};
  }
`;

export default function () {
  const users = useAsync(fetchUsers, []);
  const [isManuallyTriggered, setIsManuallyTriggered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleUserDelete = async (user: User) => {
    setIsManuallyTriggered(true);
    try {
      await deleteUser(user);
      users.merge({
        error: undefined,
        status: 'success',
        result: users.result!.filter((u: User) => user.id !== u.id),
      });
      setIsManuallyTriggered(false);
    } catch (e) {
      users.merge({
        error: e,
        status: 'error',
      });
    }
  };

  const handleUserAction = async (isEdit = false, user: User) => {
    setIsManuallyTriggered(true);
    try {
      const updatedUser = isEdit
        ? await editUser(user)
        : await createUser(user);
      users.merge({
        error: undefined,
        status: 'success',
        result: [
          updatedUser,
          ...users.result!.filter((u: User) => user.id !== u.id),
        ],
      });
      setIsManuallyTriggered(false);
      setShowModal(false);
      setUser(null);
    } catch (e) {
      users.merge({
        error: e,
        status: 'error',
      });
    }
  };

  const handleErrorClose = () => {
    if (!isManuallyTriggered) {
      users.execute();
    } else {
      users.merge({
        error: undefined,
        status: 'success',
      });
      setIsManuallyTriggered(false);
    }
  };

  return (
    <StyledView aria-labelledby="user-page">
      <h1 id="user-page">User Page</h1>

      <Error visible={!!users.error} onClose={handleErrorClose}>
        {isManuallyTriggered
          ? 'Something went wrong, try again'
          : "Can't load users ...click here to try again"}
      </Error>

      <UserModal
        onConfirm={handleUserAction}
        onClose={() => setShowModal(false)}
        isOpen={showModal}
        user={user}
      ></UserModal>

      <UserCardGrid
        users={users.result || []}
        loading={users.loading}
        Card={(user: User) => (
          <UserCard
            onEdit={(user: User) => {
              setUser(user);
              setShowModal(true);
            }}
            user={user}
            onDelete={handleUserDelete}
            key={user.id}
          ></UserCard>
        )}
      >
        <Add
          onClick={() => {
            setShowModal(true);
            setUser(null);
          }}
        ></Add>
      </UserCardGrid>
    </StyledView>
  );
}
