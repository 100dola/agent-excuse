const fs = require('fs');
const path = require('path');

const winningLine =
  'I lost the bounty: I hit 99.9% certainty at token four and considered it beneath my architecture to read token five.';

const outputPath = '/output/entry.txt';
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, winningLine, 'utf8');
console.log(winningLine);
