import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/logo.png";

export function AppHeader({ isDark, setIsDark }) {
	return (
		<section className={`app-header ${isDark ? "header-dark" : "header-light"}`}>
			<div className='app-header-layout'>
				<nav className='nav-links'>
					<img className='logo' src={logo} />
					<div className='logo-text'>Ping-U</div>
					<NavLink className='header-link' to='/'>
						Homepage
					</NavLink>
					<NavLink className='header-link' to='/stats'>
						Statistics
					</NavLink>
				</nav>
				<label className='dark-mode-switch'>
					<div className='switch'>
						<input onClick={() => setIsDark(!isDark)} type='checkbox' />
						<span className='slider round'></span>
					</div>
					<span className='mode-text'>{isDark ? "Dark " : "Light "}Mode</span>
				</label>
			</div>
		</section>
	);
}
