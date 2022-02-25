import React, { useState, useEffect } from "react";
import { pingService } from "../services/ping-service.js";

export function Stats(ping) {
	const [stats, setStats] = useState([]);

	useEffect(() => {
		(async () => {
			const newStats = await query();
			const StatsMap = getObjMap(newStats);
			setStats(StatsMap);
		})();
	}, []);

	const getObjMap = (obj) => {
		return obj.reduce((acc, ping) => {
			acc[ping.site] ? acc[ping.site]++ : (acc[ping.site] = 1);
			return acc;
		}, {});
	};

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
					<li key={stat.site}>
						<span>Site: "{stat.site}" </span>
						<span className='time-pinged'> Times Pinged:{stat.count}</span>
					</li>
				);
			});
	};

	return <ul className='stats'>{getStatsToRender()}</ul>;
}