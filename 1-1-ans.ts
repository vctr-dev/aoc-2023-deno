const input = Deno.readTextFileSync("./1-input")
  .split("\n")
  .map((v) => v.split(""))
  .map((v) => {
    const firstDigit = v.find((s) => !isNaN(parseInt(s)));
    const lastDigit = v.findLast((s) => !isNaN(parseInt(s)));
    return parseInt(firstDigit + "" + lastDigit);
  });
console.log(input.filter((v) => !isNaN(v)).reduce((a, v) => a + v, 0));
