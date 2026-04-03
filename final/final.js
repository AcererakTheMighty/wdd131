const rollBtn = document.getElementById("rollBtn");
const resultsDiv = document.getElementById("results");
const summaryDiv = document.getElementById("summary");

rollBtn.addEventListener("click", () => {
  const diceCount = parseInt(document.getElementById("diceCount").value);

  resultsDiv.innerHTML = "";
  summaryDiv.innerHTML = "";

  let successes = 0;

  for (let i = 0; i < diceCount; i++) {
    const roll = Math.floor(Math.random() * 10) + 1;

    const die = document.createElement("div");
    die.classList.add("die");
    die.textContent = roll;

    if (roll >= 6 && roll < 10) {
      successes++;
      die.classList.add("success");
    } else if (roll === 10) {
      successes += 2;
      die.classList.add("critical");
    } else {
      die.classList.add("failure");
    }

    resultsDiv.appendChild(die);
  }

  summaryDiv.textContent = "Total Successes: " + successes;
});
