import styled, { css } from 'styled-components';

const UserCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  padding: 0;
  ${({ theme }) => css`
    @media only screen and (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (min-width: ${theme.breakpoints.lg}) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (min-width: ${theme.breakpoints.xl}) {
      grid-template-columns: repeat(4, 1fr);
    }
    gap: ${props => props.theme.space.lg};
    padding: ${props => props.theme.space.lg};
  `}
`;

export { UserCardGrid };
