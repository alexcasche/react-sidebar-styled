import styled from 'styled-components';

const Styled = styled.header `
  height: 50px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  background-color: #20232A;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  top: 0;
  width: 100vw;
  .header__logo {
    height: 25px;
    position: relative;
    top: 12px;
    margin-right: 10px;
  }
  p {
    flex-grow: 2;
    margin: 0;
    font-size: 20px;
    line-height: 48px;
    font-size: 20px;
    color: #61DAFB;
    font-weight: 500;
  }
  a {
    margin-left: 20px;
    color: #DDD;
    font-size: 26px;
    line-height: 50px;
  }
  a:hover {
    color: #61DAFB;
  }
`;

export default Styled;