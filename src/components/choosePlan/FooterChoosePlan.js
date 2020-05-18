import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {generateMedia} from 'styled-media-query'


function FooterChoosePlan() {

	return(
	  <FooterContainer>
	  	<div className="footer-wrapper">
	  	<span className="question-link">
	  	Questions? &nbsp; <Link>Call 1-877-742-1335 </Link> </span>
	  	<div className = "footer-columns ">
	  	  <ul>
	  	    <li>
	  	      <Link> FAQ </Link>
	  	    </li>
	  	  </ul>{/*END OF 1ST LIST*/}
	  	  <ul>
	  	    <li>
	  	      <Link> Help Center </Link>
	  	    </li>
	  	  </ul>{/*END OF 2ND LIST*/}
	  	  <ul>
	  	    <li>
	  	      <Link> Term of use </Link>
	  	    </li>
	  	  </ul>{/*END OF 3RD LIST*/}
	  	  <ul>
	  	    <li>
	  	      <Link> Privacy </Link>
	  	    </li>
	  	  </ul>{/*END OF 3RD LIST*/}
	  	</div> {/*END OF FOOTER COLUMNS*/}
	   </div> {/*END OF FOOTER WRAPPER*/}	 
	  </FooterContainer>
	)
  
}
export default FooterChoosePlan;

const customMedia = generateMedia({
	tablet: '740px',
	
	// You specify your breakpoints
})

const FooterContainer = styled.footer`
 display:grid;
 justify-content: center;
 background: #f3f3f3;
 padding: 1.875rem 0;
 margin-top: 10rem;
 position: relative;
 border-top: 1px solid #e6e6e6;
 z-index:5;
 

 .footer-columns {
 	width:80%;
 	margin:1rem auto 0;
 	color: #999;
 	font-size: 0.9rem;
 	display:grid;
 	grid-template-columns: repeat(4, 15.625rem);
 	grid-gap: 0.3rem;
 	${customMedia.lessThan('tablet')`
 		grid-template-columns: repeat(2, 1fr);
 	`}

 }

 .footer-wrapper{
 	margin: 0 auto;
 	padding: 1.25rem;

 }

 .question-link{
 	margin-left: 3rem;
 	font-size: 1rem;
 	color: #999;
 }

 a {
 	color: #999;
 	font-size: 0.8125rem;
 	&:hover{
 		text-decoration: underline;
 		cursor: pointer;
 	}
 }

 ul li {
 	list-style:none;
 	line-height: 2.5;
 }
 a {
 	color:#999;
 	font-size: 0.9rem;
 }
 a:hover{
 	text-decoration: underline;
 	cursor: pointer;
 }

 p {
 	text-decoration: underline;
 	cursor: pointer;
 }

 // Language Button
 .lang-btn{
 	background: transparent;
 	border: 0.9px solid #333;
 	margin-left: 10%;
 	margin-top: 2rem;
 	color: #999;
 	padding: 1rem;
 	width:8rem;
 	display:grid;
 	grid-template-columns: repeat(3, 1fr);
 	margin: -2rem 0 2rem;
 	cursor:pointer;
 }
 // Toggle Language
 .lang-toggle{
 	marginLeft:10%;
 	position: absolute;
 	margin-top:-2rem;
 }

 .lang-toggle ul{
 	background: var(--main-deep-dark);
 	width: 8.125rem;
 	border: 1px solid #333;
 	text-align:center;
 	&:hover {
 		background: #0085ff;
 		color: white;
 	}
 }

`;