import React, { useState, useEffect } from "react";
import { pingService } from "../services/ping-service.js";
import { CollapsibleTable } from "./Table";
export function CurrentStat({ stat }) {
	const [currSite, setCurrSite] = useState(stat);

	useEffect(() => {
		(async () => {
			if (stat) {
				const currSiteStats = await pingService.getSpecificStat(stat);
				setCurrSite(currSiteStats);
			}
		})();
	}, [stat]);

	if (!currSite) return <></>;
	return <CollapsibleTable data={currSite} />;
}
