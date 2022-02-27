import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export function CollapsibleTable({ data }) {
	const rows = data.map((ping, idx) => createData(ping.date, ping.stats.maximum, ping.stats.minimum, ping.stats.sent, ping.stats.lost, ping.stats.pings, idx));
	return (
		<section className='stats-table'>
			<TableContainer component={Paper}>
				<Table aria-label='collapsible table'>
					<TableHead>
						<TableRow>
							<TableCell align='left' className='table-header'>
								Site: {data[0].site}
							</TableCell>
							<TableCell align='center'>Date</TableCell>
							<TableCell align='center'>Maximum</TableCell>
							<TableCell align='center'>Minimum</TableCell>
							<TableCell align='center'>Sent</TableCell>
							<TableCell align='center'>Lost</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<Row key={row.date} row={row} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</section>
	);
}
function Row(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);

	return (
		<React.Fragment>
			<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
				<TableCell>
					<IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
					Ping {row.idx + 1}
				</TableCell>
				<TableCell align='center' component='th' scope='row'>
					{row.date}
				</TableCell>
				<TableCell align='center'>{row.max}</TableCell>
				<TableCell align='center'>{row.min}</TableCell>
				<TableCell align='center'>{row.sent}</TableCell>
				<TableCell align='center'>{row.lost}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Table size='small' aria-label='purchases'>
								<TableHead>
									<TableRow>
										<TableCell align='center'>Request</TableCell>
										<TableCell align='center'>Time(ms)</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.pings.map((ping, idx) => (
										<TableRow key={idx}>
											<TableCell align='center' component='th' scope='row'>
												{idx + 1}
											</TableCell>
											<TableCell align='center'>{ping}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

Row.propTypes = {
	row: PropTypes.shape({
		date: PropTypes.string.isRequired,
		max: PropTypes.number.isRequired,
		min: PropTypes.number.isRequired,
		sent: PropTypes.number.isRequired,
		lost: PropTypes.number.isRequired,
		pings: PropTypes.array.isRequired,
		idx: PropTypes.number.isRequired,
	}).isRequired,
};

function createData(date, max, min, sent, lost, pings, idx) {
	pings = Object.values(pings);
	return {
		date,
		max,
		min,
		sent,
		lost,
		pings,
		idx,
	};
}
