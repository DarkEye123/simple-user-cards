import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import theme from '../../theme';

interface IconProps {
  onClick: () => void;
  disabled: boolean;
}

const Icon = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  transition: color 0.3s;
  color: ${({ theme }) => theme.color.lightShades};
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.red};
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  padding: ${({ theme }) => theme.space.sm};
`;

export default function (props: IconProps) {
  return (
    <Icon {...props} className={!props.disabled ? 'fas fa-trash' : ''}>
      {props.disabled && (
        <ReactLoading
          type="spinningBubbles"
          color={theme.color.red}
          height={16}
          width={16}
        />
      )}
    </Icon>
  );
}

export { Icon as DeleteIcon };
