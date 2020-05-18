import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {Icon} from 'react-icons-kit'
import {iosWorldOutline} from 'react-icons-kit/ionicons/iosWorldOutline'
import {arrowSortedDown} from 'react-icons-kit/typicons/arrowSortedDown'
import {generateMedia} from 'styled-media-query'


class Footer extends Component {
  state = {
  	langContent: false
  }
  handleToggle = e =>{
  	e.preventDefault();
  	this.setState({
  		langContent: !this.state.langContent
  		//the above sets state value to true
  	})
  }
  render() {
	return(
	  <FooterContainer>
	  	<span style={{marginLeft:'15%', fontSize:'1.125rem'}}> Questions? <Link>Call 1-877-742-1335 </Link> </span>
	  	<div className = "footer-columns ">
	  	  <ul>
	  	    <li>
	  	      <Link> FAQ </Link>
	  	    </li>
	  	    <li>
	  	      <Link> Investor Relations </Link>
	  	    </li>
	  	    <li>
	  	      <Link> Ways to Watch </Link>
	  	    </li>
	  	    <li>
	  	      <Link> Corporate Information </Link>
	  	    </li>
	  	    <li>
	  	      <Link> Netflix Originals </Link>
	  	    </li>
	  	  </ul>{/*END OF 1ST LIST*/}
	  	  <ul>
	  	    <li>
	  	      <Link> Help Center </Link>
	  	    </li>
	  	    <li>
	  	      <Link> Jobs </Link>
	  	    </li>
	  	    <li>
	  	      <Link> Terms of Use </Link>
	  	    </li>
	  	    <li>
	  	      <Link> Contact us </Link>
	  	    </li>
	  	  </ul>{/*END OF 2ND LIST*/}
	  	  <ul>
	  	    <li>
	  	      <Link> Accounts </Link>
	  	    </li>
	  	    <li>
	  	      <Link> Redeem Gift Cards </Link>
	  	    </li>
	  	    <li>
	  	      <Link> Privacy </Link>
	  	    </li>
	  	    <li>
	  	      <Link> Speed test </Link>
	  	    </li>
	  	  </ul>{/*END OF 3RD LIST*/}
	  	  <ul>
	  	    <li>
	  	      <Link> Media Center </Link>
	  	    </li>
	  	    <li>
	  	      <Link> Buy Gift Cards </Link>
	  	    </li>
	  	    <li>
	  	      <Link> Cookies in Preferences </Link>
	  	    </li>
	  	    <li>
	  	      <Link> Legal Notices </Link>
	  	    </li>
	  	    <li>
	  	      <Link> Netflix Originals </Link>
	  	    </li>
	  	  </ul>
	  	{/* Language Button  */}
	  	<div className="lang-btn" onClick={this.handleToggle}>
	  	 <Icon icon={iosWorldOutline} size={20} />
	  	 &nbsp;&nbsp;English&nbsp;&nbsp;
	  	 <Icon icon={arrowSortedDown} />
	  	</div>
	  	{/* Toggle Language Content*/}
	  	
	  	{this.state.langContent && (
	  	<div className="lang-toggle">
	      <ul>
	        <li>
	          English
	        </li>
	      </ul>
	      <ul>
	        <li>
	          French
	        </li>
	      </ul>
	  	</div> 
	  	/*END OF Toggle Language*/

	  )} {/*END OF HANDLECLICK SIDE EFFECT*/}

	  	</div> {/*END OF FOOTER COLUMNS*/}
	  	<span style={{fontSize:'0.9rem', marginLeft:'15%' }}>Netflix Nigeria </span>
	  </FooterContainer>
		)
  }
}
export default Footer;

const customMedia = generateMedia({
	tablet: '740px',
	
	// You specify your breakpoints
})

const FooterContainer = styled.footer`
 background: var(--main-deep-dark);
 padding-top: 10rem;
 padding-bottom: 3rems;
 color:#999;
 

 .footer-columns {
 	width:70%;
 	margin:1rem auto 0;
 	font-size: 0.9rem;
 	overflow:auto;
 	display:grid;
 	grid-template-columns: repeat(4, 1fr);
 	${customMedia.lessThan('tablet')`
 		grid-template-columns: repeat(2, 1fr);
 	`}

 }

 ul li {
 	list-style:none;
 	line-height: 2.5;
 }
 a {
 	color:#999;
 }
 a:hover{
 	text-decoration: underline;
 	cursor: pointer;
 }

 // Language Button
 .lang-btn{
 	background: transparent;
 	border: 0.9px solid #333;
 	padding: 1rem;
 	width:8rem;
 	display:grid;
 	grid-template-columns: repeat(3, 1fr);
 	margin: -2rem 0 2rem;
 	cursor:pointer;
 }
 // Toggle Language
 .lang-toggle{
 	marginLeft:15%;
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