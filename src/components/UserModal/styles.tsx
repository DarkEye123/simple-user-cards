import styled from 'styled-components';

const Content = styled.main`
  width: 100%;
  form,
  form > label {
    display: flex;
    flex-direction: column;
  }
  form > label {
    padding-bottom: ${props => props.theme.space.sm};
  }
  .controls {
    margin-top: ${props => props.theme.space.sm};
    button {
      display: flex;
    }
  }
`;

export { Content };
