function denseRanking(ranked, player) {
  // Menghapus skor yang sama
  const uniqueRank = [...new Set(ranked)];

  const hasil = [];

  for (let score of player) {
    let rank = 1;

    for (let nilai of uniqueRank) {
      if (score < nilai) {
        rank++;
      } else {
        break;
      }
    }

    hasil.push(rank);
  }

  return hasil;
}

// Input 1
const ranked1 = [100, 100, 50, 40, 40, 20, 10];
const player1 = [5, 25, 50, 120];

console.log("Input 1:");
console.log(denseRanking(ranked1, player1).join(" "));

// Input 2
const ranked2 = [200, 150, 100, 50];
const player2 = [30, 100, 220];

console.log("Input 2:");
console.log(denseRanking(ranked2, player2).join(" "));

// Input 3
const ranked3 = [90, 80, 70];
const player3 = [60, 75, 95];

console.log("Input 3:");
console.log(denseRanking(ranked3, player3).join(" "));
