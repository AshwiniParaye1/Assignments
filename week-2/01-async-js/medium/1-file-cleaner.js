const fs = require("fs");

let newData = "";
fs.readFile("1.txt", "utf-8", function (err, data) {
  console.log(data);
  newData = data.replace(/\s+/g, " ").trim();
  console.log(newData);

  fs.writeFile("1.txt", newData, function (err) {
    if (err) {
      throw err;
    }
  });
});
