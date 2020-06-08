import React, { Component } from "react";
import { getEntries } from "../services/fakeEntries";
import Pagination from "./pagination";

class EntriesTable extends Component {
	state = {
		entries: getEntries(),
		pageSize: 5,
		currentPage: 1,
	};

	handlePaginationClick = (page) => {
		const number = this.state.entries.length - this.state.pageSize * page;
		console.log(number);
	};

	render() {
		const { length: count } = this.state.entries;
		return (
			<div>
				<table className='table'>
					<thead>
						<tr>
							<th>Time</th>
							<th>Entry</th>
							<th>Officer Name</th>
						</tr>
					</thead>
					<tbody>
						{this.state.entries.map((entry, index) => {
							return (
								<tr key={index}>
									<td>{entry.time}</td>
									<td>{entry.message}</td>
									<td>{entry.officer}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<Pagination
					itemsCount={count}
					pageSize={this.state.pageSize}
					currentPage={this.state.currentPage}
					handleClick={this.handlePaginationClick}
				/>
			</div>
		);
	}
}

export default EntriesTable;
