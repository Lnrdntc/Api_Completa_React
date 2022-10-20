import styled from "styled-components";

export const Container = styled.div`
	max-width: 1024px;
	padding: 50px;
	background-image: radial-gradient( #ffffff23, #fff);
	border: 10px solid  #f5e8cf;
	border-radius: 20px;
	margin: 10px auto;
	
	> h2{
		color: #fff;
		margin-top: 5%;
		margin-bottom: 1%;
		font-size: 40px;
		display: flex;
    	justify-content: space-between;
    	background-color: #222;
    	padding: 0.5em;
		border-radius: 10px;
		justify-content:center;
	}
	> h4{
		color: #fff;
		font-weight: 200;
		font-size: 20px;
		margin-bottom: 3%;
		margin:5% 0 2% 5%;
	} 
	.Resultado{
		display:inline-block;
		text-decoration: none;
		font-weight: 1000;
		color: #fff;
		font-size: 8px;
		border: 2px solid #ffbb33;
		border-radius: 10px;
		padding: 25px 20px;
		margin-right: 25%;
		margin-left: 25%;
		width: 50%;
	}
	>.Resultado:hover {
    color: #ffbb33;
	}
`;

export const Header = styled.div`
  	display: flex;
    justify-content: space-between;
    background-color: #222;
    padding: 1em;
	border-radius: 10px;

	>.promotion-search__input:hover {
    color: #ffbb33;
	}

	> h1 {
		text-transform: uppercase;
		text-decoration: none;
		color: #fff;
	}
	> a {
		display:inline-block;
		text-decoration: none;
		font-weight: 1000;
		color: #fff;
		font-size: 15px;
		border: 2px solid #ffbb33;
		border-radius: 20px;
		padding: 25px 20px;
		margin-right: 0%;
	}
	.logo {
		margin-left: 5%;
		margin-top: 1%;
		margin-bottom: 1%;
		margin-right: 1%;
	}
	
`;

export const InputContainer = styled.div`
  	> input {
		display: flex;
		height: 30px;
		border: 3px solid #ffbb33;
		border-radius: 8px;
		width: 50%;
		text-align:center;
		margin-left: 25%;
		margin-right: 25%;
		margin-bottom: 2%;
		padding: 5px 10px;
		font-size: 12px;
	}

	>.promotion-search__input:hover {
    color: #ffbb33;
	}
`;
