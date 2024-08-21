import testList from "./testsList.js";

const input = document.querySelector('#input');
const output = document.querySelector('#output');
const outputContainer = document.querySelector('.output-container');

// Funkcja usuwająca znaki specjalne
function removeSpecialChars(str) {
  return str.replace(/[^a-zA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ\s]/gi, '');
}

function searchTests() {
  const searchString = removeSpecialChars(input.value.toLowerCase());
  const uniqueTests = new Set();

  // Filtruj testy na podstawie wyszukiwanego ciągu znaków
  const searchIndex = testList.filter(test => {
    const isMatch = test.czynnik.toLowerCase().includes(searchString);
    if (isMatch) {
      uniqueTests.add({
        czynnik: test.czynnik,
        badania: test.badania.split(', ') // podział badań na podstawie przecinka
      });
    }
    return isMatch;
  });

  // Wyświetlanie wyników
  if (searchIndex.length > 0) {
    const resultsHTML = Array.from(uniqueTests).map(testObj => {
      const czynnik = testObj.czynnik;
      // Stwórz HTML dla każdego badania w osobnym wierszu
      const badania = testObj.badania.map(badanie => `<div>${badanie}</div>`).join('');
      // Składanie HTML
      return `<div><strong>${czynnik}:</strong><br>${badania}</div>`;
    }).join('');

    output.innerHTML = resultsHTML;
    outputContainer.style.display = "flex";
  } else {
    output.innerHTML = "Nie znaleziono wyników.";
    outputContainer.style.display = "flex";
  }

  // Ukryj wyniki, gdy pole wyszukiwania jest puste
  if (searchString === '') {
    output.innerHTML = "";
    outputContainer.style.display = "none";
  }
}

input.addEventListener('input', searchTests);