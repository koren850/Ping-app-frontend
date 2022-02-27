import logo from "../assets/imgs/logo.png";
import git from "../assets/imgs/svg/github.svg";
import linkdin from "../assets/imgs/svg/linkedin.svg";

export function AppFooter({ isDark, setIsDark }) {
	return (
		<section className={`app-header ${isDark ? "header-dark" : "header-light"} flex app-footer`}>
			<footer>
				<div>
					<img src={logo} />
					<span>Ping-U</span> Ⓒ 2022 Made By Koren Aharon
					<a target='_blank' href='https://github.com/koren850'>
						<img src={git} />
					</a>
					<a target='_blank' href='https://www.linkedin.com/in/koren-aharon/'>
						<img src={linkdin} />
					</a>
				</div>
			</footer>
		</section>
	);
}
