'use strict'

{
  const fs = require('fs')

  const stepThrough = offsetStart => jump => {
    const offsets = [...offsetStart]
    let [pointer, idx] = [0, 0]

    while(++idx){
      const offset = offsets[pointer]
      offsets[pointer] += jump(offset)
      pointer += offset
      if(pointer < 0 || pointer >= offsets.length) return idx
    }
  }

  fs.readFile('offsets.txt', 'utf8', (err, data) => {
    const offsets = data.trim().split('\n').map(Number)
    console.log([() => 1, d => ( d >= 3 ? -1 : 1)].map(stepThrough(offsets)))
  })
}
