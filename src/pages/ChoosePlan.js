import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../svg/logo.svg'
import { Link } from 'react-router-dom'
import CheckmarkLogo from '../images/Checkmark.png'
import { Button } from '../components/Button'
// the reason Button is inside of curly braces is because it's a variable and not a function/class
import FooterChoosePlan from '../components/choosePlan/FooterChoosePlan'


class ChoosePlan extends Component {
 componentDidMount(){
 	window.scrollTo(0,0);
 }
 render(){
  return(
	<MainContainer>
	{/*Header Top*/}
	 <div className="header-top">
	  <Link to="/">
	  	<Logo src={logo} alt="logo" />
	  </Link>
	  <Link to="/" className="btn signIn-btn">
	  	Sign in
	  </Link>
	 </div>{/*End of header-top*/}
	{/*Header Content*/}
	<div className="header-content">
	  <img className="checkmark-logo" src={CheckmarkLogo} alt="checkmark image" />
	  <p>Step <strong> 1 </strong> of <strong> 3</strong>  </p>

	  <h2> Choose your plan. </h2>
	  <div className="checked-list">
	    <div className="bullet"> No commitments, cancel anytime </div>
	    <div className="bullet"> Everything on Netflix for one low price </div>
	    <div className="bullet"> Unlimited viewing on all your devices </div>
	  </div> {/*End of checked-list*/}
	  <Link to="/">
	  </Link>
	   <Button> See the plans </Button>
	</div> {/*End of header-content*/}
	<FooterChoosePlan />
   </MainContainer>
	  )
 }
}

export default ChoosePlan

// Main container
const MainContainer = styled.div`
	background:#fff;

	// header-top
	.header-top{
		background:#fff;
		height:6rem;
		border-bottom: 1px solid #e6e6e6;
	}

	// header-content
	.header-content{
		display:grid;
		justify-content: center;
		background: #fff;
		color: var(--main-dark);
		margin-bottom: 6rem;
		width:65%;
		position: relative;
		margin: auto;
		margin-top: 4.5rem;
		text-align: center;
		align-content: center;
		flex-direction: column;
		z-index: 2;
	}

	// checkmark logo
	.checkmark-logo{
		width: 3rem;
		margin-top: 3.125rem;
		margin-bottom: 2rem;

	}

	.header-content img{
		margin: 6.25rem auto 1.875rem;
	}

	// checked list
	.checked-list{
		text-align: left;
		margin: 1rem auto 3rem;
		padding-left: 1.5625rem;
		width: 85%;
		font-size: 17px;
		padding: auto;
	}

	// bullets
	.bullet {
		margin-top: 1rem;
		margin-left: 1rem;
		text-indent: -1em;
		line-height: 1.2rem;
	}

	// we add check-mark bullets just before the each list texts
	.checked-list .bullet:before{
		color: transparent;
		display: inline-block;
		position: relative;
		height: 0.3em;
		width: 0.8em;
		content: '';
		left:-0.9375rem;
		bottom: 0.1875rem;
		border-bottom: 1px solid #e50914;
		border-left: 1px solid #e50914;
		transform: rotate(-45deg);
	}

	// the signin Button
	.signIn-btn{
		margin-top: 1.5625rem 3% 0;
		padding: 0.4375rem 1.0625rem;
		font-weight: 700;
		line-height: normal;
		color: var(--main-dark);
		font-size: 1.25rem;
		top:1.5rem;
		right: 0;
		position: absolute;
		cursor: pointer;
		&:hover{
			text-decoration:underline;
		}
	}

`;

// Logo
const Logo = styled.img`
	width: 10.5rem;
	height:3.5rem;
	position: absolute;
	top: 49%;
	left: 8%;
	transform: translate(-50%, -50%);
	margin-left: 0;

`;

