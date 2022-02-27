import logo from "../assets/imgs/logo.png";

export function AppFooter({ isDark, setIsDark }) {
	return (
		<section className={`app-header ${isDark ? "header-dark" : "header-light"} flex app-footer`}>
			<footer>
				<div>
					<img src={logo} />
					<span>Ping-U</span> Ⓒ 2022 Made By Koren Aharon
				</div>
			</footer>
		</section>
	);
}
