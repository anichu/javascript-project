const paginate = (data) => {
	const itemsPerPage = 5;
	const totalPages = Math.ceil(data.length / itemsPerPage);
	let pages = Array.from({ length: totalPages }, (_, index) => {
		let start = index * itemsPerPage;
		return data.slice(start, start + itemsPerPage);
	});
	return pages;
};

export default paginate;
