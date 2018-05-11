import styled from 'styled-components';

const Styled = styled.div `
  margin: auto;
  button {
    padding: .35em 0;
    width: 100px; 
    font-size: 18px;
    &:first-child {
      border-radius: 5px 0 0 5px;
    }
    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
`

export default Styled;