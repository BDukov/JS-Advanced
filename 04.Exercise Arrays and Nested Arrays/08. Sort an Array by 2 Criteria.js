function sortingInArray(input) {
  input.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(input.join("\n"));
}
sortingInArray(["alpha", "beta", "gamma"]);

console.log(`----------`);

sortingInArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);

console.log(`----------`);

sortingInArray(["test", "Deny", "omen", "Default"]);
