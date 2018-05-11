import styled from 'styled-components';

const Styled = styled.div `
  color: #21242B;
  background-color: #FAFAFA;
  padding: 50px 20px 80px;
  }
  .details__readme {
    position: relative;
    width: 100%;
    max-width: 980px;
    margin: auto;
    border: 1px solid #DDD;
    background-color: white;
    border-radius: 5px;
  }
  .details__header {
    padding: 9px 20px 10px;
    background-color: #F6F8FA;
    font-weight: bold;
    color: #292C34;
    font-size: 1em;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #DDD;
  }
  .details__header i {
    margin-right: 10px;
  }
  .details__markdown {
    padding: 20px 45px 45px;
  }
  .details__markdown h1, .details__markdown h2 {
    font-size: 2em;
    font-weight: 500;
    padding-bottom: .35em;
    border-bottom: 1px solid #EEE;
  }
  .details__markdown h2 {
    margin-top: 40px;
    font-size: 1.5em;
  }
  .details__markdown p {
    line-height: 2;
  }
  .details__markdown pre {
    background-color: #F6F8FA;
    padding: 16px;
  }
  .details__markdown code {
    background-color: #F6F8FA !important;
    font-size: 14px;
    line-height: 20px;
    padding: 2px 5px;
  }
  .details__markdown a {
    color: #0366d6 !important;
    text-decoration: none;
  }
  .details__markdown a:hover {
    text-decoration: underline;
  }
  .details__markdown li {
    margin-bottom: 10px;
  }
  .details__markdown table {
    margin: 40px 0;
    text-align: left;
    border-collapse: collapse;
    width: 100%;
  }
  .details__markdown thead {
    text-align: center;
  }
  .details__markdown tr {
    background: white;
  }
  .details__markdown tr:nth-child(2n) {
    background-color: #F6F8FA;
  }
  .details__markdown th {
    font-weight: 500;
  }
  .details__markdown th, .details__markdown td {
    border: 1px solid #DFE2E5;
    padding: 9px 13px;
    line-height: 1.75;
  }
  .details__markdown td code {
    background-color: rgba(27,31,35,0.05) !important;
  }
`;

export default Styled;