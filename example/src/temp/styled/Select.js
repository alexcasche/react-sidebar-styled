import styled from 'styled-components';

const Styled = styled.div `
  button {
    position: relative;
    width: 100%;
    padding: 8px 25px 8px 12px;
    color: #333;
    background-color: #e6e6e6;
    border: 1px solid rgba(221, 221, 221, .75);
    border-radius: 4px;
    text-align: left;
    font-weight: 400;
    transition: all .15s ease-in-out;
    &:hover {
      background-color: #fff;
      border-color: rgba(221, 221, 221, 1);
    } 
    .select__icon {
      position: absolute;
      top: 50%;
      right: 10px;
      display: inline-block;
      border-top: 4px dashed;
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
    }
  }
  .placeholder .select__text {
    color: #999;
  }
`;

export default Styled;