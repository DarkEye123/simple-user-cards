import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { DeleteIcon } from '../icons/Delete';
import { EditIcon } from '../icons/Edit';

const UserCard = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.color.main};
    border-radius: ${theme.borderRadius.md};
    background-image: linear-gradient(
      326deg,
      ${theme.color.darkAccent} 0%,
      ${theme.color.main} 74%
    );
    box-shadow: -8px 10px 36px -1px rgba(0, 0, 0, 0.75);
    :hover {
      box-shadow: -8px 10px 19px -1px rgba(0, 0, 0, 0.75);
      ${Avatar} > img {
        box-shadow: -8px 10px 8px -1px rgba(0, 0, 0, 0.75);
      }
    }
    transition: box-shadow 0.3s;
    display: flex;

    ${DeleteIcon}, ${EditIcon} {
      position: absolute;
      padding: ${theme.space.md};
      right: 0;
    }
    ${DeleteIcon} {
      bottom: 0;
    }
  `}
`;

const Avatar = styled.div`
  ${({ theme }) => css`
    height: 100%;
    img {
      width: 100px;
      transition: box-shadow 0.3s;
      border-radius: ${theme.borderRadius.circle};
      border-width: 10px;
      border-color: ${darken(0.1, theme.color.darkShades)};
      border-style: solid;
    }
    padding: ${theme.space.md};
    color: ${theme.color.lightShades};
  `}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    text-align: center;
  }
  ${({ theme }) => css`
    padding: ${theme.space.md};
    padding-left: 0;
    color: ${theme.color.lightShades};
    .email {
      font-size: ${theme.fontSizes.xs};
      color: ${darken(0.1, theme.color.lightShades)};
    }
  `}
`;

const Controls = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
  `}
`;

export { UserCard, Avatar, Controls, Info };
