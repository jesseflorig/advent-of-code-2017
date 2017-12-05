'use strict'

{
  const fs = require('fs')
  fs.readFile('passphrases.txt', 'utf8', (err, data) => {
    const phrases = data.trim().split('\n')
    const noRepeats = (w, _, ws) => ws.filter(v => v === w).length === 1
    const sortLetters = w => [...w].sort().join('')
    const isValid = f => ph => ph.split(' ').map(f).every(noRepeats)
    const count = f => phrases.filter(isValid(f)).length

    console.log([w => w, sortLetters].map(count))
  })
}
