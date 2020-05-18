import styled from 'styled-components'

export const Button = styled.button` 
	display: inline-block;
	background: var(--main-red);
	text-transform:uppercase;
	border:none;
	outline: none;
	margin: ${props => props.primary ? '0 30%': '0'};
	//the above is a way to dynamically add margin property to the button component wherever it will called if the margin value is primary then we have margin to be 0 33% else 0
	color:white;
	// the above fetches the primary variable from TabContent One with a ternary operator
	padding: ${props => props.primary ? '1.5rem': '0.8rem 1.3rem'}; 
	border-radius:0.1875rem;
	font-size:${props => props.primary ? '2rem': '1rem'};
	text-align:center;
	box-shadow:0 1px 0 rgba(0,0,0,0.45);
	transition:background 0.2s ease-in;
	cursor:pointer;
	&:hover{
		background: var(--main-red-hover)
	}
`;