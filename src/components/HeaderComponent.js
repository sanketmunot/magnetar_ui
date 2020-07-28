import React , {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component{
constructor(props){
super(props)
this.state = {
isNavOpen : false
}
this.toggleNav = this.toggleNav.bind(this)

}

toggleNav() {
this.setState({
isNavOpen: !this.state.isNavOpen
})
}

render(){
return(

<>
<Navbar dark expand='md' color='dark'>
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
 <Jumbotron>
          <div className='container'>
            <div className='row row-header'>
              <div className='col-12 col-sm-8'>
                <h1>Gas Authority of India Limited</h1>
                <p className = 'display-6'>Predective Maintainence System for Real Time Alerts ! </p>
              </div>
            </div>
          </div>
  </Jumbotron>
</>
)
}
}

export default Header
