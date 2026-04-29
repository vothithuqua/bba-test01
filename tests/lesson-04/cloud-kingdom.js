// Khai báo biến
const powerUp = 'none';
let effect = '';

if (powerUp === "mushroom") {
    effect = 'Mario becomes Super!';
} else if (powerUp === "flower") {
    effect = 'Mario can shoot fireballs!';
} else if (powerUp === "star") {
    effect = 'Mario is invincible!';
} else if (powerUp === "none") {
    effect = 'Mario is normal';
} else {
    effect = 'Unknown power-up';
}

// in ra console hiệu ứng tên hiệu ứng
console.log(" Tên hiệu ứng là: ",powerUp);
console.log(" Hiệu ứng là: ",effect);