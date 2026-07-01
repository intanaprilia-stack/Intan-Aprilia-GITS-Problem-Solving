function highestPalindrome(str, k) {
  let arr = str.split("");
  let changed = new Array(arr.length).fill(false);

  // Tahap 1: jadikan palindrome
  function makePalindrome(left, right, sisa) {
    if (left >= right) return sisa;

    if (arr[left] !== arr[right]) {
      if (sisa === 0) return -1;

      if (arr[left] > arr[right]) {
        arr[right] = arr[left];
      } else {
        arr[left] = arr[right];
      }

      changed[left] = true;
      changed[right] = true;

      return makePalindrome(left + 1, right - 1, sisa - 1);
    }

    return makePalindrome(left + 1, right - 1, sisa);
  }

  let sisa = makePalindrome(0, arr.length - 1, k);

  if (sisa === -1) return "-1";

  // Tahap 2: maksimalkan menjadi 9
  function maximize(left, right, remain) {
    if (left > right) return;

    if (left === right) {
      if (remain > 0) arr[left] = "9";
      return;
    }

    if (arr[left] !== "9") {
      if ((changed[left] || changed[right]) && remain >= 1) {
        arr[left] = "9";
        arr[right] = "9";

        maximize(left + 1, right - 1, remain - 1);
      } else if (!changed[left] && !changed[right] && remain >= 2) {
        arr[left] = "9";
        arr[right] = "9";

        maximize(left + 1, right - 1, remain - 2);
      } else {
        maximize(left + 1, right - 1, remain);
      }
    } else {
      maximize(left + 1, right - 1, remain);
    }
  }

  maximize(0, arr.length - 1, sisa);

  return arr.join("");
}

// Input 1
console.log(highestPalindrome("3943", 1));

// Input 2
console.log(highestPalindrome("932239", 2));

// Input 3
console.log(highestPalindrome("12321", 1));
