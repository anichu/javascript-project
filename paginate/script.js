import fetchFollowers from "./fetchFollowers.js";
import paginate from "./paginate.js";
import displayFollowers from "./displayFollowers.js";
import displayButton from "./displayButton.js";
const titleHeader = document.querySelector(".title-header");
const buttonContainer = document.querySelector(".button-container");

let index = 0;
let pages = [];

const UI = () => {
	displayFollowers(pages[index]);
	displayButton(buttonContainer, pages, index);
};

const init = async () => {
	const data = await fetchFollowers();
	titleHeader.innerText = "Paginate";
	pages = paginate(data);
	UI();
};

buttonContainer.addEventListener("click", function (e) {
	let i = parseInt(e.target.dataset.index);
	if (i < 0 && index == 0) {
		index = pages.length - 1;
	} else if (i < 0 && index > 0) {
		index--;
	} else if (i == pages.length && index == pages.length - 1) {
		index = 0;
	} else if (i == pages.length && index < pages.length - 1) {
		index++;
	} else {
		index = i;
	}

	UI();
});

window.addEventListener("load", init);
