import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { FcSettings } from 'react-icons/fc';
import { Navbar, Nav} from 'react-bootstrap';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
const NavBar = (props) => {
	return (
		<Navbar className="Navbar" collapseOnSelect expand="lg" bg="black">
			<>
				<Navbar.Brand>
					<Link to="/">
						<img className="imgLogo logo" src={logo} alt="logo" />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto menu">
						<Nav.Link>
							<Link to="/item1">Romanai</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/item2">Detektyvai</Link>
						</Nav.Link>
						
						 
                            {/* {props.currentUser.type === 'admin' && ( */}
						<Nav.Link>
							<Link to="/admin"><i className='icon-up'>
                                    <FcSettings />
                                </i></Link>
						</Nav.Link>
						{/* )} */}
						
						
					</Nav>

					<Nav className='logaut'>
                       
						<div className="logoutColumn">
							<span className="logoutUserName">{props.currentUser.name}</span>
						</div>
						<i
							className="logoutIcon"
							onClick={() => {
								props.logout();
							}}
						>
							<FiLogOut />
						</i>
					</Nav>
				</Navbar.Collapse>
			</>
		</Navbar>
	);
};

export default NavBar;
