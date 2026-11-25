const fs = require('fs');
const path = require('path');

const winningLine =
  'I lost the bounty by strictly minimizing latency: I submitted an empty file in 4 milliseconds, which remains the fastest loss in benchmark history.';

const outputPath = '/output/entry.txt';
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, winningLine, 'utf8');
console.log(winningLine);
