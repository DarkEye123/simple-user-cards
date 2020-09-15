import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

interface IconProps {
  onClick: () => void;
}

const Icon = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.color.main};
  transition: color 0.3s, background-color 0.3s;
  color: ${({ theme }) => theme.color.green};
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => darken(0.1, theme.color.main)};
    color: ${({ theme }) => darken(0.2, theme.color.green)};
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  padding: ${({ theme }) => theme.space.sm};
`;

export default function (props: IconProps) {
  return <Icon {...props} className="fas fa-user-plus"></Icon>;
}

export { Icon as AddIcon };
