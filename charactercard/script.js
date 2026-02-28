// Character Object
let character = {
  name: "Swamp Beast Diplomat",
  class: "Monster Envoy",
  level: 1,
  health: 100,
  image: "images/swamp-beast.png",

  attacked: function () {
    if (this.health > 0) {
      this.health -= 20;
      if (this.health <= 0) {
        this.health = 0;
        alert(this.name + " has died!");
      }
      updateDisplay();
    }
  },

  levelUp: function () {
    this.level += 1;
    updateDisplay();
  }
};

// Update UI
function updateDisplay() {
  document.getElementById("charName").textContent = character.name;
  document.getElementById("charClass").textContent = character.class;
  document.getElementById("charLevel").textContent = character.level;
  document.getElementById("charHealth").textContent = character.health;
}

// Initialize display on page load
updateDisplay();