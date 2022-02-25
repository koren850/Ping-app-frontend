import { Stats } from "../cmps/Stats.jsx";
import { Form } from "../cmps/Form.jsx";

export function HomePage() {
	return (
		<section className='home-page'>
			<Form />
			<Stats />
		</section>
	);
}
