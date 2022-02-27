import React, { useState, useEffect } from "react";
import { CurrentStat } from "../cmps/CurrentStat";
import { Stats } from "../cmps/Stats";
import { pingService } from "../services/ping-service.js";
export function StatsPage() {
	const [currStat, setCurrStat] = useState("");

	return (
		<section className='stats-page'>
			<div className='sites'>
				<Stats click={setCurrStat} />
			</div>
			<CurrentStat stat={currStat} />
		</section>
	);
}
