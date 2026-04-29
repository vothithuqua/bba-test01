// Khai báo biến
const playerName = "Mario";
let currentLives = 3;

// Coins theo từng level
const coinsLevel1 = 25;
const coinsLevel2 = 30;
const coinsLevel3 = 35;

// Tính tổng coins
const sum = coinsLevel1 + coinsLevel2 + coinsLevel3;

// Tính trung bình
const avg = sum % 3;

// In ra số coins dư khi tổng chia cho 3
console.log("Số coins dư khi tổng chia cho 3 là:", avg);



