import React, { Component } from 'react'
import logo from '../svg/logo.svg'
import { Link } from 'react-router-dom'
// React-Router provides the <Link> and <NavLink> components, which allow you to navigate to different routes defined in the application.
import styled from 'styled-components'
// style components lets you style a component inside a component & replaces the div tag
import { Button } from './Button'
import {Icon} from 'react-icons-kit'
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'
// the above is from the react-icons-kit website
import {generateMedia} from 'styled-media-query'
//  the above is for add media query
class Header extends Component {
	render(){
		return (
			<HeaderComponent className="header-container">
			 <div className="header-top">
				<Logo src={logo} />
				<Link to="/login" className="signin-btn"> Sign In </Link>
			 </div>
			{/*Header Content*/}
			<div className="header-content">
				<Title> See What's Next. </Title>
				<SubTitle> Watch anywhere, cancel anytime </SubTitle>
				<Link to="/choose-plan"> 
				<Button  className="main-offer-btn" primary>
				 try it now 
				 <Icon className="icon" icon={ic_keyboard_arrow_right} size={37} />
				</Button>
				</Link>
			</div>
			</HeaderComponent>
			)
	}
}

export default Header;

const customMedia = generateMedia({
	lgDesktop: '1350px',
	mdDesktop: '1150px',
	tablet: '960px',
	smTablet: '740px'
	//this sets various screen limits which can apply to component elements in their css
})

//Logo
const Logo = styled.img`
	 width: 10rem;
	 height: 3.5rem;
	 position:absolute;
	 top:25%;
	 left:50%;
	 transform: translate(-50%, -50%);
	 margin-left:0;
	 ${customMedia.lessThan('tablet')`
	 	left: 20%;
	 `}//using styled-media-query

`;
 


// Header Container
const HeaderComponent = styled.div`
	.signin-btn{
		right:0;
		margin: 1.125rem 3% 0;
		padding: 0.4375rem 1.0625rem;
		font-weight: 400;
		line-height: normal;
		border-radius: 0.1875rem;
		font-size: 1rem;
		background: var(--main-red);
		position: absolute;
		translate: transform(-50%, -50%);
		cursor: pointer;
		transition: background 0.2s ease-in;
		&:hover{
			background: var(--main-red-hover);
		}
		${customMedia.lessThan('smTablet')`
			margin-top: 1.25rem;
			right:5%;
		`}//using styled-media-query		
	}

// header-top

.header-top{
	position: relative;
	height:10rem;
	z-index:1;
}

// Header Content
.header-content{
	width:65%;
	position:relative;
	margin:4.5rem auto 0;
	display: flex;
	justify-content: center;
	align-content: center;
	text-align:center;
	flex-direction: column;
	z-index:5;
	${customMedia.lessThan('smtablet')`
 		display: grid;
 		grid-template-rows: repeat(3, 60px)
 		grid-gap:8rem;

 	`}//using styled-media-query
}


 
 .icon svg{
 	vertical-align: bottom !important;
 	margin-left: 1.5rem;
 	${customMedia.lessThan('smTablet')`
 		margin: 0 20%;
 		font-size: 1.3rem;
 		display:none !important;
 	`}//using styled-media-query
 }

 .main-offer-btn{
 	${customMedia.lessThan('lgDesktop')`
 		margin: 0 33%;
 		font-size: 1.5rem;
 	`}//using styled-media-query
 	${customMedia.lessThan('mdDesktop')`
 		margin: 0 25%;
 		font-size: 1.5rem;
 	`}//using styled-media-query
 	${customMedia.lessThan('tablet')`
 		margin: 0 20%;
 		font-size: 1.3rem;
 	`}//using styled-media-query

 }

;`


// Main Title

const Title = styled.h1`
 	margin: 1rem 0rem 1.2rem;
 	font-size:5rem;
 	font-weight: 700;
 	line-height:5.1rem;
 	${customMedia.lessThan('tablet')`
 		font-size: 2.6rem;
 	`}//using styled-media-query
`
const SubTitle = styled.h2`
	margin-top= 1.0rem;
	font-weight= 400;
	font-size = 1.875rem;
	line-height= 1.25em;
	margin: 0 0 1.87rem;
	text-transform: uppercase;
	${customMedia.lessThan('smTablet')`
 		font-size: 1.4rem;
 		margin:0;
 	`}//using styled-media-query
`