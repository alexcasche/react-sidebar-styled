import styled from 'styled-components';

const Styled = styled.div `
  position: relative;
  padding: 20px 20px 80px;
  background-color: #282C34;
  text-align: center;
  h1 {
    text-align: center;
    color: #33F96F;
    font-weight: 500;
    margin: 50px auto 15px;
    font-size: 40px;
    @media (min-width: 768px) { font-size: 50px; }
    @media (min-width: 900px) { font-size: 60px; }
  }
  h1 span {
    color: #DDD;
    font-weight: normal;
  }
  p {
    max-width: 750px;
    margin: 10px auto 40px;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.75;
  }
  button {
    background-color: #DDD;
    color: #21242B;
    border: none;
    font-weight: 500;
    font-size: 1em;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
      background-color: white;
    }
    &.active, &.active:hover {
      background-color: #16D04A;
      color: white;
      pointer-events: none;
    }
  }
  .demo__fieldset {
    max-width: 750px;
    margin: 0 auto 20px;
    display: flex;
    justify-content: center;
  }
  .dropdown {
    .dropdown__option:hover {
      background-color: #16D04A;
      color: white;
    }
  }
`;

export default Styled;