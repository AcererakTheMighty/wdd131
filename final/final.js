
const rollBtn = document.getElementById("rollBtn");
const resultsDiv = document.getElementById("results");
const summaryDiv = document.getElementById("summary");

rollBtn.addEventListener("click", () => {
  const diceCount = getDiceCount();
  resetDisplay();

  let rolls = rollDice(diceCount);
  let successes = displayResults(rolls);

  showSummary(successes);
});

// Function 1: Get dice count
function getDiceCount() {
  return parseInt(document.getElementById("diceCount").value);
}

// Function 2: Reset UI
function resetDisplay() {
  resultsDiv.innerHTML = "";
  summaryDiv.innerHTML = "";
}

// Function 3: Roll dice
function rollDice(count) {
  let rolls = [];
  for (let i = 0; i < count; i++) {
    rolls.push(Math.floor(Math.random() * 10) + 1);
  }
  return rolls;
}

// Function 4: Display results and calculate successes
function displayResults(rolls) {
  let successes = 0;

  rolls.forEach(roll => {
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
  });

  return successes;
}

// Function 5: Show summary
function showSummary(successes) {
  summaryDiv.textContent = "Total Successes: " + successes;
}