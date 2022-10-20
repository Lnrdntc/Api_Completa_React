import styled from "styled-components";

export const Container = styled.div`
		max-width: 1024px;
		padding: 20px;
		align-items: center;
		text-align: center;
		background-image: radial-gradient( #ffffff23, #fff);
		border: 10px solid  #f5e8cf;
		border-radius: 20px;
		margin: 10px auto;

	> h1 {
		color: #ffbb33;
		margin-bottom: 5%;
		text-align: center;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}
`;

export const Header = styled.div`

  	.logo {
		margin-left: 1%;
		margin-top: 1%;
		margin-bottom: 1%;
		margin-right: 1%;
		align-items:center;
		display: flex;
  		justify-content: center;
	}
	.logo img {
		border-radius:20px;
	}
	> h1 {
		text-transform: uppercase;
		color: #ffbb33;
		align-items: center;
		padding: 20px;
	}
	> h5 {
		text-transform: uppercase;
		color: #fff;
		align-items: center;

	}

`;

export const Form = styled.form`
	> div, h3, h5 {
		margin-bottom: 10px;
		color: #fff;
		font-size: 20px;
	}
	> span {
		margin-bottom: 8px;
		color: red;
		font-size: 20px;
	}
`;

export const ButtonWrapper = styled.div`
	display: block;
	align-items: center;
	padding: 20px;
	color: blue;
`;

