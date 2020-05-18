import React, { Component } from 'react'
import styled from 'styled-components'
// import '../css/Main.css'
import logo from '../svg/logo.svg'
import LoginForm from '../components/login/LoginForm'
import LoginFooter from '../components/login/LoginFooter'
import {generateMedia} from 'styled-media-query'

class Login extends Component {
  render(){
	return (
	  <div className="main-login-container">
	  	<div className="header-top">
	  	  <Logo src={logo} alt="logo" className="logo" />
	  	</div> {/*END OF HEADER-TOP*/}
      <LoginForm />
      <LoginFooter />
	  </div> /*END OF MAIN-LOGIN-CONTAINER*/
		)
  }
}

export default Login;

const customMedia = generateMedia({
  lgTablet:'740px',
  tablet:'640px'
})

// Logo
const Logo = styled.img`
  width: 11rem;
  position: absolute;
  top:25%;
  left: 11%;
  transform: translate(-50%, -50%);
  margin-left:0;
  // know that this will replace img tag with a logo tag name
  ${customMedia.lessThan('tablet')`
    top:45%;
    left: 23%;
    
  `}
`;

