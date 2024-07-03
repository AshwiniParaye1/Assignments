// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log("content of data====", data);

//   fs.writeFile("a.txt", data, function (err) {
//     data = data + "new text added";
//     console.log(data);
//   });
// });

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log("content of data====", data);
// });
fs.writeFile("a.txt", "new text added", function (err) {
  if (err) {
    throw err;
  }
});

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log("content of data====", data);
});
