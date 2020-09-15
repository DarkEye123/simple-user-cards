import React from 'react';
import { useAsyncCallback } from 'react-async-hook';
import * as Styled from './styles';
import { User as UserType } from '../../types';
import Delete from '../icons/Delete';
import Edit from '../icons/Edit';

interface UserProps {
  onEdit: (user: UserType) => void;
  onDelete: (user: UserType) => void;
  user: UserType;
}

const User: React.FC<UserProps> = ({ user, onDelete, onEdit }) => {
  const asyncOnDelete = useAsyncCallback(async () => onDelete(user));
  const asyncOnEdit = useAsyncCallback(async () => onEdit(user));
  return (
    <Styled.UserCard data-testid="user-card">
      <Styled.Avatar>
        <img alt={`${user.fullName} avatar`} src={user.avatar}></img>
      </Styled.Avatar>
      <Styled.Info>
        <span>{user.fullName}</span>
        <span className="email">{user.email}</span>
      </Styled.Info>
      <Styled.Controls>
        <Edit onClick={asyncOnEdit.execute}></Edit>
        <Delete
          onClick={asyncOnDelete.execute}
          disabled={asyncOnDelete.loading}
        ></Delete>
      </Styled.Controls>
    </Styled.UserCard>
  );
};

export default User;
