import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AppHeader } from "./cmps/AppHeader.jsx";
import { AppFooter } from "./cmps/AppFooter.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { StatsPage } from "./pages/StatsPage.jsx";

export function RootCmp() {
	const [isDark, setIsDark] = useState(true);
	return (
		<section className={isDark ? "dark-mode" : "light-mode"}>
			<AppHeader isDark={isDark} setIsDark={setIsDark} />
			<Routes>
				<Route path='/stats' element={<StatsPage />} />
				<Route path='/' element={<HomePage />} />
			</Routes>
			<AppFooter isDark={isDark} setIsDark={setIsDark} />
		</section>
	);
}
