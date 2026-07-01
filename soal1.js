function a000124(n) {
  let hasil = [];
  let angka = 1;

  for (let i = 0; i < n; i++) {
    hasil.push(angka);
    angka += i + 1;
  }

  return hasil.join("-");
}
console.log("Input 5 :", a000124(5));
console.log("Input 7 :", a000124(7));
console.log("Input 10:", a000124(10));
