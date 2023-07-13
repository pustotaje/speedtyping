const fs = require('fs');

function convertFile(inputFile, outputFile) {
  const lines = fs.readFileSync(inputFile, 'utf8').split('\n');

  const antonyms = [];
  const regex = /([^\s—]+)\s—\s([^\s;]+);/;

  for (const line of lines) {
    const matches = line.match(regex);
    if (matches && matches.length === 3) {
      const word = matches[1];
      const antonym = matches[2];
      antonyms.push({ word, antonym });
    }
  }

  const output = antonyms.map(({ word, antonym }) => `{ word: '${word}', antonym: '${antonym}' },`).join('\n');

  fs.writeFileSync(outputFile, output);
}

// Пример использования
const inputFile = 'input.txt';
const outputFile = 'output.txt';
convertFile(inputFile, outputFile);
