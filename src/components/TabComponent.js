import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// the above makes available the react-tab library function
import TabDoor from './tabs_nav/TabDoor'
import TabDevices from './tabs_nav/TabDevices'
import TabPrices from './tabs_nav/TabPrices'
// the above imports the svg tab Components
import TabContentOne from './TabContentOne'
import TabContentTwo from './TabContentTwo'
import TabContentThree from './TabContentThree'
import '../css/TabsNav.css'
// the above imports the css peculiar to each svg tab Component

class TabComponent extends Component{
	state = {
		tabIndex: 0
	}; 
	//*state variable to control active page*//
	render() {
		return(
			<div>
				<Tabs className="tabs" selectedIndex={this.state.tabIndex}
					onSelect={tabIndex => this.setState({tabIndex})}> {/* the css class to style the tab & selectedIndex property from react tabs to identify an active tab*/}
					<TabList className="tab-nav-container">
						<Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active': null}`}> {/*ternary operator to control hover & click event on active tab*/}
						<TabDoor /> 
						<p className="lgScreen" style={{marginBottom: '1.875rem'}}>
							<strong>
						No Commitments
							<br />
						Cancel online at any time
							</strong>
						</p>
						<br />
						<span className="mdScreen" style={{ marginTop: '0.4rem'}}> Cancel </span>
						</Tab>
						<Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active': null}`}> 
						<TabDevices /> 
						<p className="lgScreen" style={{ marginTop: '-5.3215rem'}}> {/*I don't why two curly braces are used for inline css implementation*/}
							<strong>
						Watch Anywhere
							</strong>
						</p>
						<br />
						<span className="mdScreen" style={{ marginTop: '-5.3215rem'}}> Prices </span>
						</Tab>
						<Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active': null}`}> 
						<TabPrices />
						<p className="lgScreen">
						<strong>
						Pick your prices
						</strong>
						</p>
						<br />
						<span className="mdScreen"> Devices </span>
						</Tab>
					</TabList>
					{/*Tab Panel*/}
					<TabPanel>
					  <TabContentOne />
					</TabPanel>
					<TabPanel>
					  <TabContentTwo />
					</TabPanel>
					<TabPanel>
					  <TabContentThree />
					</TabPanel>
				</Tabs>
			</div>
			)
		
	}
}

export default TabComponent;