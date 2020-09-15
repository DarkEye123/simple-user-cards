import React, { useState } from 'react';
import { useAsyncCallback } from 'react-async-hook';
import ReactModal from 'react-modal';
import ReactLoading from 'react-loading';
import { User } from '../../types';
import * as Styled from './styles';
import theme from '../../theme';

interface ModalProps {
  onConfirm: (isEdit: boolean, user: User) => void;
  onClose: () => void;
  isOpen: boolean;
  user: User | null;
}

const customStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Modal: React.FC<ModalProps> = ({ onConfirm, isOpen, user, onClose }) => {
  const [data, setData] = useState<User>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    fullName: '',
  });

  const handleSubmit = useAsyncCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const inputUser = user || {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        avatar: '',
      };
      const newUser: User = {
        id: inputUser.id,
        firstName: data.firstName || inputUser.firstName,
        lastName: data.lastName || inputUser.lastName,
        email: data.email || inputUser.email,
        avatar: data.avatar || inputUser.avatar,
      } as User;
      newUser.fullName = `${newUser.firstName} ${newUser.lastName}`;
      await onConfirm(!!user, newUser as User);
    },
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setData(state => ({ ...state, [target.name]: target.value }));
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <Styled.Content role="main" aria-labelledby="user-form-title">
        <h1 id="user-form-title">{user ? 'Edit' : 'Create'} User Form</h1>
        <form onSubmit={handleSubmit.execute}>
          <label>
            First name
            <input
              name="firstName"
              defaultValue={user?.firstName}
              onChange={handleChange}
            />
          </label>
          <label>
            Last name
            <input
              name="lastName"
              defaultValue={user?.lastName}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              defaultValue={user?.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Avatar URL
            <input
              name="avatar"
              defaultValue={user?.avatar}
              onChange={handleChange}
            />
          </label>
          <div className="controls">
            <button type="submit" disabled={handleSubmit.loading}>
              {user ? 'Edit' : 'Create'} new user
              {handleSubmit.loading && (
                <ReactLoading
                  type="spinningBubbles"
                  height={16}
                  width={16}
                  color={theme.color.main}
                />
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={handleSubmit.loading}
            >
              Close form
            </button>
          </div>
        </form>
      </Styled.Content>
    </ReactModal>
  );
};

export default Modal;
