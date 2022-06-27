import React from 'react';
import { Link } from 'react-router-dom';
import './AuthScreen.css';

const AuthScreen = () => {
	return (
		<div className="AuthScreen">
			<div className="ASAuthBtn">
				<div className="ASAuthRegisterBtn">
					<Link className="MainLink" to="/register">
						Užregistruoti{' '}
					</Link>{' '}
					naują vartotoją
				</div>
				<div className="ASAuthLoginBtn">
					<Link className="MainLink" to="/login">
						Prisijungti{' '}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AuthScreen;
