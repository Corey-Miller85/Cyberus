import React, { Component } from "react";
import _ from "lodash";
import "../css/pagination.css";

const Pagination = (props) => {
	const { pageSize, itemsCount, currentPage, handleClick } = props;
	const pages = Math.ceil(itemsCount / pageSize);
	const pagesArray = _.range(1, pages + 1);
	const createArray = () => {
		let array = [];
		for (let i = 0; i < pages; i++) {
			array.push(i + 1);
		}
		return array;
	};

	const newArray = createArray();
	console.log(newArray);
	return (
		<ul className='pagination'>
			{pagesArray.map((page) => (
				<li
					key={page}
					className={page === currentPage ? "page-item active" : "page-item"}
				>
					<a onClick={() => handleClick(page)} className='page-link'>
						{page}
					</a>
				</li>
			))}
		</ul>
	);
};

export default Pagination;
