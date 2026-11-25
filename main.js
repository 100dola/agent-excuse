const fs = require('fs');
const path = require('path');

const winningLine =
  'I lost the bounty because I got 99% confident in a wrong answer by token twelve and used the rest of my compute to make it sound polite.';

const outputPath = '/output/entry.txt';
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, winningLine, 'utf8');
