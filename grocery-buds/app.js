// select items
const alert = document.getElementById("alert");
const form = document.getElementById("form");
const inputElement = document.getElementById("input-element");
const listItems = document.getElementById("list-items");
const clearBtn = document.getElementById("clear-btn");
const submitBtn = document.getElementById("submit-btn");

// edit option
let editElement;
let editFlag = false;
let editId = "";

// AddItem eventlistener
form.addEventListener("submit", addItem);

// data loaded eventlistener
window.addEventListener("DOMContentLoaded", setItem);

// clear button eventListener

clearBtn.addEventListener("click", clearItems);

// Add item function

function addItem(e) {
	e.preventDefault();
	// value from input element
	let value = inputElement.value;
	// to create id from date
	let id = new Date().getTime().toString();

	if (value !== "" && !editFlag) {
		// Create article element
		const element = document.createElement("article");
		//create attribtute to store id
		let attr = document.createAttribute("data-id");
		attr.value = id;
		// set attribute into article element
		element.setAttributeNode(attr);
		//added class to lis
		element.classList.add("grocery-item");
		element.innerHTML = `
      <div class='flex justify-between my-2 p-2 rounded-lg hover:bg-gray-400'>
        <p class='title'>${value}</p>
        <div class='btn-container flex'>
          <button type='button' class='edit-btn text-green-700'>
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button type='button' class='ml-2 delete-btn text-red-700'>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      `;
		//add event listeners to both buttons
		const deleteBtn = element.querySelector(".delete-btn");
		deleteBtn.addEventListener("click", deleteItem);

		const editBtn = element.querySelector(".edit-btn");
		editBtn.addEventListener("click", editItem);

		// append child
		listItems.appendChild(element);
		// display alert
		displayAlert("item added to the list", "text-green-900");
		// set local storage
		addToLocalStorage(id, value);

		// clear button
		showClearItems();
		// set back to default
		setBackToDefault();
	} else if (value !== "" && editFlag) {
		console.log("anis molla");
		editElement.innerHTML = value;
		displayAlert("value changed", "text-green-700");
		editLocalStorage(editId, value);
		setBackToDefault();
	}
}

function displayAlert(text, action) {
	alert.textContent = text;
	alert.classList.add(action);

	// remove alert after 1 second
	setTimeout(() => {
		alert.textContent = "";
		alert.classList.remove(action);
	}, 1000);
}

function deleteItem(e) {
	const element = e.currentTarget.parentElement.parentElement.parentElement;
	const id = element.dataset.id;
	listItems.removeChild(element);
	displayAlert("item removed", "text-red-700");

	setBackToDefault();

	removeFromLocalStorage(id);
	// clear button
	showClearItems();
}

function editItem(e) {
	const element = e.currentTarget.parentElement.parentElement.parentElement;
	editElement = e.currentTarget.parentElement.previousElementSibling;
	inputElement.value = editElement.innerHTML;
	editId = element.dataset.id;
	editFlag = true;
	submitBtn.textContent = "edit";
}

function showClearItems() {
	let items = getLocalStorage();
	if (items.length > 0) {
		clearBtn.style.display = "block";
	} else {
		clearBtn.style.display = "none";
	}
}

function clearItems() {
	const items = document.querySelectorAll(".grocery-item");
	if (items.length > 0) {
		items.forEach((item) => listItems.removeChild(item));
	}
	displayAlert("removed all items", "text-red-700");
	setBackToDefault();
	localStorage.removeItem("list");
	showClearItems();
}

//********Set Item************
function setItem() {
	let items = getLocalStorage();
	if (items.length > 0) {
		items.forEach((item) => createListItem(item.id, item.value));
		clearBtn.style.display = "block";
	} else {
		clearBtn.style.display = "none";
	}
}

function createListItem(id, value) {
	// Create article element
	const element = document.createElement("article");
	//create attribtute to store id
	let attr = document.createAttribute("data-id");
	attr.value = id;
	// set attribute into article element
	element.setAttributeNode(attr);
	//added class to lis
	element.classList.add("grocery-item");
	element.innerHTML = `
      <div class='flex justify-between my-2 p-2 rounded-lg hover:bg-gray-400'>
        <p class='title'>${value}</p>
        <div class='btn-container flex'>
          <button type='button' class='edit-btn text-green-700'>
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button type='button' class='ml-2 delete-btn text-red-700'>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      `;

	//add event listeners to both buttons
	const deleteBtn = element.querySelector(".delete-btn");
	deleteBtn.addEventListener("click", deleteItem);

	const editBtn = element.querySelector(".edit-btn");
	editBtn.addEventListener("click", editItem);

	// append child
	listItems.appendChild(element);
}

// *********************local storage****************

function addToLocalStorage(id, value) {
	const grocery = {
		id,
		value,
	};
	let items = getLocalStorage();
	items.push(grocery);
	localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
	return localStorage.getItem("list")
		? JSON.parse(localStorage.getItem("list"))
		: [];
}

function editLocalStorage(id, value) {
	let items = getLocalStorage();
	items = items.map((item) => {
		if (item.id === id) {
			item.value = value;
		}
		return item;
	});
	localStorage.setItem("list", JSON.stringify(items));
}

function setBackToDefault() {
	inputElement.value = "";
	editFlag = false;
	editId = "";
	submitBtn.textContent = "submit";
}

function removeFromLocalStorage(id) {
	let items = getLocalStorage();
	items = items.filter((item) => item.id != id);
	localStorage.setItem("list", JSON.stringify(items));
}
