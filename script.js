import testList from "./testsList.js";

const input = document.querySelector('#input');
const output = document.querySelector('#output');
const outputContainer = document.querySelector('.output-container');

function removeSpecialChars(str) {
return str.replace(/[^a-zA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ\s]/gi, '')
}

function searchTests() {
const searchString = removeSpecialChars(input.value.toLowerCase());
const uniqueTests = new Set();

const searchIndex = testList.filter(test => {
  const isMatch = test.czynnik.toLowerCase().includes(searchString);
  if (isMatch) {
    uniqueTests.add(`<strong>${test.czynnik}:</strong> ${test.badania}`);
  }
  return isMatch;
});

// Display the results
if (searchIndex.length > 0) {
const formattedTests = Array.from(uniqueTests).map(test => test.replace(/, /g, ', <br>'));
const resultsHTML = formattedTests.map(test => {
  const parts = test.split(':');
  const czynnik = parts[0];
  const badania = parts[1].split(',').join(',');
  return `<div>${czynnik}:<br>${badania}</div>`;
}).join('');
output.innerHTML = resultsHTML;
outputContainer.style.display = "flex";
} else {
output.innerHTML = "Nie znaleziono wyników.";
}

if (searchString === '') {
  output.innerHTML = "";
  outputContainer.style.display = "none";
}
}

input.addEventListener('input', searchTests);