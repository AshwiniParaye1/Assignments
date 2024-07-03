// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counter() {
  for (let i = 30; i >= 0; i--) {
    setTimeout(function () {
      console.log(i);
    }, (30 - i) * 1000);
  }
}

counter();
// (Hint: setTimeout)
