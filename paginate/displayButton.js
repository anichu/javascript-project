const displayButton = (container, pages, activeIndex) => {
	console.log(container);
	let btns = pages.map((_, index) => {
		return `
    <button class='btn-page ${
			index === activeIndex ? "active-button" : "null"
		}' data-index=${index} >${index + 1}</button>
    `;
	});
	btns.push(
		`<button class='next-button' data-index=${pages.length}>next</button>`
	);
	btns.unshift(`<button class='prev-button' data-index='-1'>prev</button>`);
	console.log(btns);

	container.innerHTML = btns.join("");
};

export default displayButton;
