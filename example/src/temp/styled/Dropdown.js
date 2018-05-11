import styled from 'styled-components';

const Styled = styled.div `
  position: relative;
  .dropdown__trigger, .dropdown__content {
    position: relative;
    width: 100%;
    padding: 8px 25px 8px 12px;
    color: #333;
    background-color: #FFF;
    border: 1px solid rgba(221, 221, 221, .75);
    border-radius: 4px;
    text-align: left;
    font-weight: 400;
    transition: all .15s ease-in-out;
    box-sizing: border-box;
    &:hover {
      background-color: #E6E6E6;
      border-color: rgba(221, 221, 221, 1);
    } 
    .dropdown__icon {
      position: absolute;
      top: 50%;
      right: 10px;
      display: inline-block;
      border-top: 4px dashed;
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
    }
  }
  .dropdown__text {
    text-transform: capitalize;
  }
  .dropdown__text.placeholder {
    color: #999;
  }
  .dropdown__content {
    position: absolute;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    padding: 0;
    overflow: hidden;
    margin-top: 2px;
    z-index: 999;
  }
  .dropdown__option {
    background-color: #FFF;
    padding: 0;
    padding: 8px 20px;
    text-transform: capitalize;
    text-align: left;
    font-size: .9em;
    border-bottom: 1px solid #E6E6E6;
    &:hover {
      background-color: #E6E6E6;
    }
    &:last-child {
      border-bottom: none;
    }
    &.active {
      display: none;
    }
  }
  .dropdown__overlay {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export default Styled;