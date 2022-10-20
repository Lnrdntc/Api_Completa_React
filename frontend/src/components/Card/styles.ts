import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  border: 3px solid #ffbb33;
  box-shadow: 0 10px 10px 0 rgba(0,0,0, 0.15);
  padding: 10px;
  margin-bottom: 5px;
  margin-left: 15%;
  margin-right: 15%;
  background-color: #fff;
  max-width: 66%;
`;

export const Content = styled.div`
  > h1 {
    font-size: 10px;
    color: #222;
    margin-bottom: 10px;
  }

  > span {  
    font-size: 12px;
    font-weight: 300;
    color: #ffbb33;
  }

  > button {
    border-radius: 3px;
    background: #222;
    cursor: pointer;
    border: 1px solid #222;
    border-color:#ffbb33;
    padding: 10px;
    font-weight: bold;
  }
    >.promotion-search__input:hover {
    color: #ffbb33;
  }
`;