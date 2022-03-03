import { useState, useEffect } from "react";

export function AutoComplete({ data, site, handleChange }) {
	const [sites, setSites] = useState([]);
	useEffect(() => {
		console.log(data);
		let sortedSites = [];
		for (const site in data) {
			sortedSites.push({ site, count: data[site] });
		}
		sortedSites = sortedSites.filter((item) => item.site.includes(site));
		console.log(sortedSites);
		setSites(sortedSites.sort((a, b) => b.count - a.count));
	}, [data, site]);

	return (
		<div>
			{sites.map((item) => {
				return (
					<div name='site' key={item.site} onClick={() => handleChange({ target: { name: "site", value: item.site } })}>
						{item.site}
					</div>
				);
			})}
		</div>
	);
}
