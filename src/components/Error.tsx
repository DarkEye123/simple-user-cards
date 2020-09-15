import React from 'react';
import styled from 'styled-components';

const StyledError = styled.main`
  padding: ${({ theme }) => theme.space.lg};
  background-color: ${props => props.theme.color.error.dark};
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid ${props => props.theme.color.error.light};
  border-right: 5px solid ${props => props.theme.color.error.light};
  position: absolute;
  bottom: 20%;
  transform: translateX(50%);
  right: 50%;
  z-index: 1200;
  p {
    margin: 0;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  }
  strong {
    margin-right: ${({ theme }) => theme.space.md};
  }
  :hover {
    cursor: pointer;
  }
`;

interface ErrorProps {
  visible: boolean;
  onClose: () => void;
}

const Error: React.FC<ErrorProps> = ({
  children,
  visible = false,
  onClose,
}) => {
  if (visible)
    return (
      <StyledError onClick={onClose} data-testid="app-error">
        <p>
          <strong>Problem:</strong>
          {children}
        </p>
      </StyledError>
    );
  return null;
};

export default Error;
