import React from 'react'
import styled from 'styled-components'
import {Button} from './Button'
import {Icon} from 'react-icons-kit'
import {check} from 'react-icons-kit/fa/check'
import {close} from 'react-icons-kit/fa/close'
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'
import { generateMedia } from 'styled-media-query'
import {Link} from 'react-router-dom'
function TabContentThree(){
  return(
	<TabContainer>
	  <div className="tab-content">
	   <div className="tab-top-content">
	  	<span style={{fontSize:'1.5rem'}}> Choose one plan and watch everything on Netflix </span>
	  	<Link to="/choose-plan"> 
	  	<Button className="btn"> Try it Now <Icon icon={ic_keyboard_arrow_right} /></Button>
	  	</Link>
	   </div> {/*END OF TOP-CONTENT*/}
		{/* BOTTOM-CONTENT*/}
	   <div className="tab-bottom-content">
	     <table>
	       <thead>
	       	<tr>
	       	  <th> </th>
	       	  <th>Basic </th>
	       	  <th>Standard </th>
	       	  <th>Premium </th>
	       	</tr>
	       </thead>
	       <tbody>
	        <tr> 
	          <td>Monthly price </td> 
	          <td>$9.99 </td> 
	          <td>$13.99  </td> 
	          <td>$16.99 </td> 
	        </tr>
	        <tr> 
	          <td>HD Available </td> 
	          <td> <Icon icon={close} size={10}  /> </td> 
	          <td> <Icon icon={check} size={10}  /> </td> 
	          <td> <Icon icon={check} size={10}  /> </td> 
	        </tr>
	        <tr> 
	          <td>Ultra HD Available </td> 
	          <td> <Icon icon={close} size={10}  /> </td> 
	          <td> <Icon icon={close} size={10}  /> </td> 
	          <td> <Icon icon={check} size={10}  /> </td> 
	        </tr>
	        <tr> 
	          <td>Screens you can watch on at the same time </td> 
	          <td> 1 </td> 
	          <td> 2 </td> 
	          <td> 4 </td> 
	        </tr>
	        <tr> 
	          <td>watch on your Laptop, TV, phone and tablet </td> 
	          <td> <Icon icon={check} size={10}  /> </td> 
	          <td> <Icon icon={check} size={10}  /> </td> 
	          <td> <Icon icon={check} size={10}  /> </td> 
	        </tr>
	        <tr> 
	          <td>Unlimited movies and TV shows </td> 
	          <td> <Icon icon={check} size={10}  /> </td> 
	          <td> <Icon icon={check} size={10}  /> </td> 
	          <td> <Icon icon={check} size={10}  /> </td> 
	        </tr>
	        <tr> 
	          <td>Cancel Anytime </td> 
	          <td> <Icon icon={check} size={10}  /> </td> 
	          <td> <Icon icon={check} size={10}  /> </td> 
	          <td> <Icon icon={check} size={10}  /> </td> 
	        </tr>
	       </tbody>

  	     </table>
	   </div> {/*END OF TOP-CONTENT*/}
	  </div>
	</TabContainer>
		)

 }

 export default TabContentThree;

// Create Media Query
const customMedia = generateMedia({
	lgDesktop: '1350px',
	mdDesktop: '1000px'
})


// Main Container
const TabContainer = styled.div`
 	background: var(--main-deep-dark);

 	.tab-content{
 		margin: 0 15%;
 		padding-bottom: .1%;
 	}

 	.tab-top-content{
 		display: grid;
 		grid-template-columns: repeat(12, 1fr);
 		padding: 3rem 0 0;
 		${customMedia.lessThan('lgDesktop')`
 			display:block;
 			grid-template-columns:1fr;
 			row-gap:1.5rem;
 			text-align:center;


 		`}
 	}

 	span{
 		grid-column: 1 / 9;
 		${customMedia.lessThan('lgDesktop')`
 			grid-column: 1/ -1:

 		`}
 	}

 	.btn{
 		grid-column: 9 / 12;
 		margin-left: 2rem;
 		margin-right: 3.1rem; 
 		${customMedia.lessThan('mdDesktop')`
 			margin-top: 1rem;
 			grid-column: 1 / -1;
 			margin-left: 30%;
 			margin-right: 30%;

 		`}
 	}

 	// Tab Bottom  TabContentThree
 	.tab-bottom-content {
 		margin: 2rem auto;
 	}

 	// table
 	table {
 		width: 100%;
 		margin-top: 2rem;
 		border: collapse;	
 	}

 	table thead th {
 		text-transform: uppercase;
 		padding: 0.8rem;
 	}

 	table tbody {
 		display: table-row-group;
 		vertical-align: middle;
 		border-color: inherit;
 	}

 	table tbody tr td{
 		color: #999;
 		padding: 0.8rem 1.2rem;
 		text-align: center;
 	}

 	table tbody tr td:first-child {
 		text-align: left;
 	}

 	table tbody tr:nth-child(even){
 		background: #222;
 	}
 `;