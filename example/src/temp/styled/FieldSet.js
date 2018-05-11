import styled from 'styled-components';

const Styled = styled.div `
  width: 100%;
  max-width: 750px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 30px;
  border: none;
  .field {
    flex-basis: calc(50% - 10px);
  }
`;

export default Styled;