const gridContainer = document.querySelector(".grid-container");
const rgb = document.querySelector("#rgb");
const eraser = document.querySelector("#eraser");
const changeSize = document.querySelector("#change-size");

changeSize.addEventListener("click", () => {

let createGrid = (userInput) => {

	userInput = prompt("Enter a number between 2-100.");

	if (userInput < 2 || userInput > 100) {

		userInput = prompt("Enter a number between 2-100.");

	}

	for (i = 0; i < userInput * userInput; i++) {

		const div = document.createElement("div");
		gridContainer.appendChild(div);

		gridContainer.setAttribute("style", `grid-template-columns: repeat(${userInput}, auto);
											 grid-template-rows: repeat(${userInput}, auto);`);



		gridContainer.addEventListener("mouseover", (e) =>

			e.target.style.backgroundColor = "#000");

	}

};

createGrid();

});	

let colorPicker = () => {

	let hexCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
	let colorPick = "#";

	for (i = 0; i < 6; i++) {

		let random = Math.floor(Math.random() * 16);
		colorPick = colorPick + hexCodes[random];

	};

	return (colorPick);

};

colorPicker();

rgb.addEventListener("click", () => {

	gridContainer.addEventListener("mouseover", (e) => {

		e.target.style.backgroundColor = colorPicker();

	});

});

eraser.addEventListener("click", () => {

	gridContainer.addEventListener("mouseover", (e) => {

		e.target.style.backgroundColor = "#fff";

	});

});