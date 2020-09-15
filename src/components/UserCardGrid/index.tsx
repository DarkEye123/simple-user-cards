import React from 'react';
import { User } from '../../types';
import * as Styled from './styles';
import useDummyPlaceholders from '../../hooks/useDummyPlaceholders';

interface UserCardListProps {
  users: User[];
  loading: boolean;
  Card: React.FC<User>;
}

const UserCardGrid: React.FC<UserCardListProps> = ({
  users,
  loading,
  Card,
  children,
}) => {
  const placeholders = useDummyPlaceholders({ ready: !loading });
  return (
    <Styled.UserCardGrid data-testid="user-grid">
      {(users.length === 0 && loading && placeholders) ||
        users.map((user: User) => Card(user))}
      {children}
    </Styled.UserCardGrid>
  );
};
export default UserCardGrid;
