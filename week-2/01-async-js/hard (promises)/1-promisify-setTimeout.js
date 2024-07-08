/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function wait(n) {
//   const p = new Promise(function (resolve) {
//     setTimeout(resolve, n);
//   });
//   return p;
// }

// wait(3000).then(function () {
//   console.log("heyy");
// });

// function wait(t) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("sdvs");
//     }, t);
//   });
// }
// wait(1000).then(function (msg) {
//   console.log(msg);
// });

async function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
}

module.exports = wait;
