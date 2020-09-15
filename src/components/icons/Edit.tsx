import React from 'react';
import styled from 'styled-components';

interface IconProps {
  onClick: () => void;
}

const Icon = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  transition: color 0.3s;
  color: ${({ theme }) => theme.color.lightShades};
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.green};
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  padding: ${({ theme }) => theme.space.sm};
`;

export default function (props: IconProps) {
  return <Icon {...props} className="fas fa-user-edit"></Icon>;
}

export { Icon as EditIcon };
