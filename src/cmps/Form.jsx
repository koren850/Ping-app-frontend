import React, { useState, useEffect } from "react";
import { pingService } from "../services/ping-service.js";

export function Form() {
	const [res, setRes] = useState("");
	const [input, setInput] = useState({ site: "", count: 4 });
	useEffect(() => {}, []);

	const ping = async () => {
		let currPing = await pingService.ping(input.site, input.count);
		setRes(currPing);
	};

	const handleChange = (event) => {
		let key = event.target.name;
		let val = event.target.value;
		setInput({ ...input, [key]: val });
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
				<textarea placeholder='Output' readOnly value={res}></textarea>
			</div>
		</section>
	);
}
