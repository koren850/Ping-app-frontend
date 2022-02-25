import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppHeader } from "./cmps/AppHeader.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { SecondPage } from "./pages/SecondPage.jsx";

export function RootCmp() {
	return (
		<section>
			<AppHeader />
			<Routes>
				<Route path='/secondpage' element={<SecondPage />} />
				<Route path='/' element={<HomePage />} />
			</Routes>
		</section>
	);
}
