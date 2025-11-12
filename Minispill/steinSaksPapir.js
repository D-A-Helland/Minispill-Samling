const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const label = document.querySelector(".game-label");

console.log("Hei");

rock.addEventListener("click", () => {
    runGame("🪨");
});

paper.addEventListener("click", () => {
    runGame("📄");
});

scissors.addEventListener("click", () => {
    runGame("✂️");
});

const runGame = function(choice) {
    const options = ["🪨", "📄", "✂️"];

    // Pick a random choice from the array using a for loop instead of direct Math.random
    let computer = "";
    for (let i = 0; i < options.length; i++) {
        const randomIndex = Math.floor(Math.random() * options.length);
        computer = options[randomIndex];
        break; // we only need one random choice, so break after assigning
    }

    let result = "";

    if (choice === computer) {
        result = "Uavgjort! 🤝";
    } else if (
        (choice === "🪨" && computer === "✂️") ||
        (choice === "📄" && computer === "🪨") ||
        (choice === "✂️" && computer === "📄")
    ) {
        result = "Du vant! 🎉";
    } else {
        result = "Du tapte! 😢";
    }

    label.innerHTML = `
        Du: ${choice}<br>
        PC: ${computer}<br>
        ${result}`;
};

