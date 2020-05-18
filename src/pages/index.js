import React, { Component } from 'react';
import Header from '../components/Header.js'
import TabComponent from '../components/TabComponent.js'
import Footer from '../components/Footer.js'
class Main extends Component {
	render(){
		return(
			<div>
				<Header />
				<TabComponent />
				<Footer />
			</div>
			)
	}
}

export default Main