'use strict'

{
  const fs = require('fs')

  fs.readFile('captcha.txt','utf8',(err, data) => { 
    const digits = [...data.trim()].map(Number);
    const sumMatching = shift => digits
        .filter((number, idx, set) => number === set[shift(idx, set.length) % set.length])
        .reduce((sum, number) => sum + number, 0);
    console.log([idx => idx + 1, (idx, length) => idx + length / 2].map(sumMatching));
  })
}
