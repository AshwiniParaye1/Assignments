/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// function sleep(milliseconds) {
//   let ans = 0;
//   return new Promise(function (res) {
//     for (let i = 0; i < 10000000; i++) {
//       ans = ans + i;
//     }
//     res("hey");
//   });
// }

// sleep(2000).then((message) => {
//   console.log(message);
// });

module.exports = sleep;
