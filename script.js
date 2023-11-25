import testList from "./testsList.js";

const input = document.querySelector('#input');
const output = document.querySelector('#output');
const outputContainer = document.querySelector('.output-container');

function searchTests() {
  const searchString = input.value.toLowerCase();
  const uniqueTests = new Set();

  const searchIndex = testList.filter(test => {
    const isMatch = test.czynnik.toLowerCase().includes(searchString);
    if (isMatch) {
      uniqueTests.add(`${test.badanie} - ${test.kod}`);
    }
    return isMatch;
  });

  // Display the results
  if (searchIndex.length > 0) {
    output.innerHTML = Array.from(uniqueTests).join('<br>');
    outputContainer.style.display = "block";
  } else {
    output.innerHTML = "Nie znaleziono wyników.";
  }

  if (searchString === '') {
    output.innerHTML = "";
    outputContainer.style.display = "none";
  }
}

input.addEventListener('input', searchTests);