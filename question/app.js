const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
	const btn = question.querySelector(".question-btn");
	const faSolid = question.querySelector("#btn");
	const show = question.querySelector("#show");
	btn.addEventListener("click", () => {
		show.classList.toggle("block");
		show.classList.toggle("hidden");
		faSolid.classList.toggle("fa-minus");
		faSolid.classList.toggle("fa-plus");

		questions.forEach((q) => {
			if (q != question) {
				const s = q.querySelector("#show");
				s.classList.add("hidden");
				const fa = q.querySelector("#btn");
				fa.classList.remove("fa-minus");
				fa.classList.add("fa-plus");
			}
		});
	});
});
