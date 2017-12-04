const fs = require('fs')

const countValidPhrases = (data) => {
  const phrases = data.split(/\r?\n/)
  let valid = 0

  phrases.map(phrase => {
    phrase = phrase.split(' ')
    const len = phrase.length
    const uLen = [...new Set(phrase)].length
    console.log(len, uLen)

    if( len !== uLen){
      console.log('phrase:', phrase.toString())
      console.log('set:', [... new Set(phrase)].toString())
    }

    valid += (len === uLen) ? 1 : 0
  })

  console.log(`${valid} of ${phrases.length} valid phrases found.`)
}

fs.readFile('passphrases.txt', 'utf8', (err, data) => {
  countValidPhrases(data.trim())
})
