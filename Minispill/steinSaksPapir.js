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
    const computer = options[Math.floor(Math.random() * 3)];

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
        Computer:<br>
        PC: ${computer}<br>
        ${result}
    `;
};

