'use strict'

{
  const fs = require('fs')

  fs.readFile('spreadsheet.txt', 'utf8', (err, data) => {
    const input = data.trim().split('\n');
    const rows = input.map(row => row.split('\t').map(Number).sort((a, b) => a - b));
    const difference = row => row[row.length - 1] - row[0];
    const quotient = row => (([a, b]) => b / a)(row.filter(a => row.some(evenDiv(a))));
    const evenDiv = a => b => a !== b && (b % a === 0 || a % b === 0);

    console.log([difference, quotient].map(func => rows.reduce((sum, row) => sum + func(row), 0)));
  })
}
