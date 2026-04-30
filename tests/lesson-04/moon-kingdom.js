// Bài 1
function createCharacters() {

    // Khai báo mảng characters
    const characters = [
        { name: "Xuân", level: 1, health: 500 },
        { name: "Hạ", level: 2, health: 200 },
        { name: "Thu", level: 5, health: 150 },
        { name: "Đông", level: 10, health: 600 }
    ]

    // Map: create new charactersPowerUp
    const charactersPowerUp = characters.map(char => ({
        name: char.name.toUpperCase(),
        level: char.level * 2,
        health: char.health * 3
    }));

    // Filter: health > 1000
    const possibleWinners = charactersPowerUp.filter(
        char => char.health > 1000
    );

    return {
        charactersPowerUp,
        possibleWinners
    };
}

// Result
const result = createCharacters();
console.log("charactersPowerUp: ", result.charactersPowerUp);
console.log("possibleWinners: ", result.possibleWinners);


// Bài 2
const players = [
    { name: "Mario", score: 500 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800 },
    { name: "Qua", score: 700 }
]
function printLeaderboard(players) {
    const medals = ["🥇", "🥈", "🥉"];

    // sắp xếp từ cao đến thấp
    players.sort((a, b) => b.score - a.score);

    for (let i = 0; i < players.length; i++) {
        if (i < 3) {
            console.log(medals[i] + " " + (i + 1) + "." + players[i].name + " - " + players[i].score + "pts");
        } else {
            console.log("   " + (i + 1) + "." + players[i].name + " - " + players[i].score + "pts");
        }
    }

}
printLeaderboard(players);

