let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".score").textContent = score;
const checkGuess = () => {
	const guess = Number(document.querySelector(".guess").value);

	if (!guess) {
		document.querySelector(".message").textContent =
			"🚫 Please enter a guess 🚫";
	} else if (guess === number) {
		document.querySelector(".message").textContent = "Correct Number 🎊";
		document.querySelector(".number").textContent = number;
		document.querySelector("body").style.backgroundColor = "#60b347";
	} else if (guess > number) {
		if (score > 0) {
			document.querySelector(".message").textContent = "Go Lower 👇";
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "Game lost 😞";
		}
	} else if (guess < number) {
		if (score > 0) {
			document.querySelector(".message").textContent = "Go Higher ☝";
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "Game lost 😞";
			document.querySelector("body").style.backgroundColor = "red";
		}
	}
};

const reset = () => {
	score = 20;
	document.querySelector(".score").textContent = score;
	number = Math.trunc(Math.random() * 20) + 1;
	document.querySelector(".message").textContent = "Start guessing...";
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").value = "";
	document.querySelector("body").style.backgroundColor = "#222";
};
document.querySelector(".check").addEventListener("click", checkGuess);
document.querySelector(".again").addEventListener("click", reset);
