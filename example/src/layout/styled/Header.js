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
    height: 20px;
    position: relative;
    top: 14px;
    margin-right: 10px;
  }
  p {
    flex-grow: 2;
    margin: 0;
    font-size: 20px;
    line-height: 50px;
    font-size: 17px;
    color: #CCC;
    font-weight: 600;
  }
  a {
    margin-left: 20px;
    color: #CCC;
    font-size: 26px;
    line-height: 50px;
  }
  a:hover {
    color: #33F96F;
  }
`;

export default Styled;