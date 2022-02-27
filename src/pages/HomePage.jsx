import { Stats } from "../cmps/Stats.jsx";
import { Form } from "../cmps/Form.jsx";

export function HomePage() {
	return (
		<section className='home-page'>
			<Form />
			<div className='stats-home-page'>
				<b>Your pings</b>
				<Stats />
				<div className='guide'>Check statistics page for more info</div>
			</div>
		</section>
	);
}
