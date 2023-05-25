const input = [
  "abc",
  "Cba",
  "aabc",
  "ccBa",
  "acb",
  "whatever",
  "cab",
  "cbCa",
  "bBca",
];

const output = (input) => {
  let arrayForOutput = [];
  let arrayForCompare = [];

  input.forEach((item) => {
    arrayForCompare.push(item.toLowerCase().split("").sort().join(""));
  });

  input.forEach((item) => {
    arrayForCompare.filter(
      (word) =>
        word.toLowerCase().split("").join("") ===
        item.toLowerCase().split("").sort().join("")
    ).length > 1 && arrayForOutput.push(item);
  });

  console.log(arrayForOutput);
};

output(input);
