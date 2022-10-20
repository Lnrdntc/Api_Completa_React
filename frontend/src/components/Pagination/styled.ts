import styled from "styled-components";

interface ISelect { 
	isSelect?: boolean
}

export const Container = styled.div`
  
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
  color: #fff;
  justify-content: space-between;
  background-color: #222;
  padding: 1em;
	border-radius: 10px;
  overflow: hidden;
  text-align: center;
  border: 2px solid #ffbb33;

>.mudancaNumber{
  font-size: 15px;
  color: #ffbb33;
  margin-top: 1px;
  justify-content:center;
  padding: 1%;
}

`;

export const PaginationButton = styled.div`
  display: flex;
  color: #fff;
  padding: 2%; 
`;

export const PaginationItem = styled.div<ISelect>`
  margin: 0 10px;
  cursor: pointer;
  ${(props) =>
    props.isSelect && {
      background: "#ffbb33",
      padding: "0 5px",
      color: "#fff",
    }}
`;