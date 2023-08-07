import React from 'react';
import { Link } from 'react-router-dom';

import { NavContainer } from './nav.styles.jsx';

const Nav = () => {
	return (
		<NavContainer className='nav'>
			<Link to='/'>
				<div>CRYPTO PRICES</div>
			</Link>

			<Link to='/currencies'>
				<div>CURRENCIES</div>
			</Link>
		</NavContainer>
	);
};

export default Nav;
