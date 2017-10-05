import * as React from 'react';
import {
	Nav,
	Navbar,
	NavItem,
	NavDropdown,
	MenuItem,
} from 'react-bootstrap';
import {
	NavLink,
} from 'react-router-dom';

const NavigationBar = props => (
	<Navbar inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<NavLink to="/">React-Bootstrap</NavLink>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav pullRight>
				<NavItem><NavLink to="/">Home</NavLink></NavItem>
				<NavItem><NavLink to="/about">About</NavLink></NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default NavigationBar;
