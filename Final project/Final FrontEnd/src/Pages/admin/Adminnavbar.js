import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

const Adminnavbar = () => {

	const logout = () =>{
		localStorage.removeItem("userinfo")
		localStorage.removeItem("userinfo-cust")
		localStorage.removeItem("userinfo-sp")
		window.location.href="/";
	}
return (
	<>
	<Nav>
		
		<Bars />
		<NavMenu>
		<NavLink to='/' activeStyle>
        Home
		</NavLink>
		<NavLink to='/Aboutus' activeStyle>
        About us
		</NavLink>
		<NavLink to='/Contactus' activeStyle>
        Contact us
		</NavLink>
		<NavLink onClick={logout} to='/Logout' activeStyle>
        Logout
		</NavLink>

		
		 </NavMenu>
		 
	</Nav>
	</>
);
};

export default Adminnavbar;
