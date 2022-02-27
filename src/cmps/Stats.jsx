import React, { useState, useEffect } from "react";
import { pingService } from "../services/ping-service.js";
import { useSelector } from "react-redux";
export function Stats({ click = () => {} }) {
	const [stats, setStats] = useState([]);
	const result = useSelector((state) => state.statsModule.result);

	useEffect(() => {
		(async () => {
			const newStats = await query();
			const StatsMap = pingService.getObjMap(newStats);
			setStats(StatsMap);
		})();
	}, [result]);

	const query = async () => {
		return await pingService.getStats();
	};

	const getStatsToRender = () => {
		let statsToRender = [];
		Object.keys(stats).forEach((site, idx) => {
			statsToRender[idx] = { site, count: stats[site] };
		});
		return statsToRender
			.sort((a, b) => b.count - a.count)
			.map((stat) => {
				return (
					<li onClick={() => click(stat.site)} key={stat.site}>
						<span>Site: "{stat.site}" </span>
						<span className='time-pinged'> Times Pinged: {stat.count}</span>
					</li>
				);
			});
	};

	return <ul className='stats'>{getStatsToRender()}</ul>;
}
