import React, { Component } from "react";
import { getEntries } from "../services/fakeEntries";
import Pagination from "./pagination";

class EntriesTable extends Component {
	state = {
		entries: getEntries(),
		pageSize: 4,
		currentPage: 1,
		paginatedEntries: [],
	};

	handlePaginationClick = (page) => {
		this.setState({
			currentPage: page,
		});
		this.handlePagination();
	};

	handlePagination = () => {
		const offsetStart = (this.state.currentPage - 1) * this.state.pageSize;
		const offsetEnd = offsetStart + this.state.pageSize;
		const array = [];
		this.state.entries.forEach((entry, index) => {
			if (index >= offsetStart && index < offsetEnd) {
				array.push(entry);
			}
		});
		return array;
	};

	componentDidMount() {
		this.handlePagination();
	}

	render() {
		const { length: count } = this.state.entries;

		const newArr = this.handlePagination();
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
						{newArr.map((entry, index) => {
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
