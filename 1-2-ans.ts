import { sumOf } from "@std/collections";
import { assertExists } from "@std/assert";

const numbersMap: Record<string, number> = {
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9,
};

const inputFromFile = Deno.readTextFileSync("./1-input");
// const inputFromFile = Deno.readTextFileSync("./1-2-example");

const output = inputFromFile
  .trim()
  .split("\n")
  .map((v) => findCombinations(v))
  .map((v) =>
    v.map((s) => {
      return toNumber(s);
    })
  )
  .map(([a, b]) => a * 10 + b);
console.log(sumOf(output, (v) => v));

function findCombinations(input: string) {
  const numberStringRegex = Object.keys(numbersMap).join("|");
  const first = input.match(new RegExp(numberStringRegex + "|\\d"))?.[0];

  assertExists(first, "first: " + first);
  const second = input.split("").reverse().join("").match(
    new RegExp(numberStringRegex.split("").reverse().join("") + "|\\d"),
  )?.[0].split("").reverse().join("");
  assertExists(second, input + ", " + "second: " + second);

  return [first, second];
}

function toNumber(input: string) {
  return numbersMap[input] || ~~input;
}
