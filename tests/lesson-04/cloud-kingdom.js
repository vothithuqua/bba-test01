// Khai báo biến
const playerName = "Mario";
let currentLives = 3;

// Coins theo từng level
const coinsLevel1 = 25;
const coinsLevel2 = 30;
const coinsLevel3 = 35;

// Tính tổng coins
const sum = coinsLevel1 + coinsLevel2 + coinsLevel3;


const avg = sum / 3; //trung bình

const remainder = sum % 3; // Số dư

// Tính trung bình
console.log("Trung bình coins: ", avg);

// In ra số coins dư khi tổng chia cho 3
console.log("Số coins dư khi tổng chia cho 3 là:", remainder);



