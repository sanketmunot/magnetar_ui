import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isNavOpen: false
		}
		this.toggleNav = this.toggleNav.bind(this)

	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		})
	}

	render() {
		return (

			<>
				<Navbar dark expand='md' color='primary'>
					<div className='container'>
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className='mr-1 display-6'>Magnetar </NavbarBrand>

						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink className='nav-link' to='/home'>
										<span className='fa fa-home fa-lg'></span> Home
					</NavLink>
								</NavItem>

								<NavItem>
									<NavLink className='nav-link' to='/emailpref'>
										<span className='fa fa-cog fa-lg'></span> Alert Prefrences
									</NavLink>
								</NavItem>

							</Nav>


						</Collapse>
					</div>
				</Navbar>
				{/* <Jumbotron> */}
				<div style={{ backgroundColor: '#f8f8ff' }} className='pt-4'>
					<div className='container'>
						<div className='row row-header'>
							<div className='col-10 col-sm-8'>
								<h1>GAIL India Limited.</h1>
								<p className='display-6'>Predective Maintainence System for Real Time Alerts ! </p>
							</div>
							<div className='col-sm-2'>
								<iframe src='https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=small&timezone=Asia%2FKolkata' style={{border:'0'}} width="200" height="100" />
							</div>
						</div>
					</div>
				</div>
				{/* </Jumbotron> */}
			</>
		)
	}
}

export default Header
