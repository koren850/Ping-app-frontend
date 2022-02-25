import { pingService } from "../services/ping-service.js";
import { useForm } from "../hooks/useForm";
import { setResult } from "../store/stats.action";
import { useDispatch, useSelector } from "react-redux";

export function Form() {
	const pingResult = useSelector((state) => state.statsModule.result);
	const [handleChange, input] = useForm();
	const dispatch = useDispatch();

	const ping = async () => {
		let currPing = await pingService.ping(input.site, input.count);
		dispatch(setResult(currPing));
	};

	return (
		<section className='form'>
			<div className='user-input flex'>
				<div>
					<label>
						Enter a site to ping:(www.example.com)
						<input className='innrt-input' autoFocus name='site' type='text' value={input.site} onChange={handleChange}></input>
					</label>
					<label>
						Enter number of requests(1-10) :
						<div className='innrt-input flex'>
							<input name='count' type='range' min={1} max={10} value={input.count} onChange={handleChange}></input>
							{input.count}
						</div>
					</label>
				</div>
				<button onClick={ping}> Run</button>
			</div>
			<div>
				<textarea placeholder='Output' readOnly value={pingResult}></textarea>
			</div>
		</section>
	);
}
