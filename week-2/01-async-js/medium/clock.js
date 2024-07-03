function counter() {
  setInterval(function () {
    let currentTime = new Date();
    console.log(currentTime.toLocaleTimeString());
  }, 1000);
}

counter();
