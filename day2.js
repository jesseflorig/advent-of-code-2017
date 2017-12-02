const fs = require('fs')

const checksum = (input) => {
  let matrix = []
  let result = 0	
  const rows = input.split(/\r?\n/)

  for(idx=0; idx <= rows.length - 1; idx++){
    const row = rows[idx].split(/\t/)
    matrix.push(row.map(item => parseInt(item)))  
  }

  for(idx2=0; idx2 <= matrix.length - 1; idx2++){
    result += Math.max(...matrix[idx2]) - Math.min(...matrix[idx2])
  }

  console.log(`The answer is ${result}`)
}

const process = (arr) => {
  let result = 0
  const sorted = arr.sort((a,b) => { return a - b})
  console.log('sorted',sorted.toString())
  sorted.map(denom => {
    sorted.map(numer => {
      if(numer % denom === 0 && (numer / denom) > result){
        result = numer / denom
      }
    })
  })
  return result
}

const checksum2 = (input) => {
  let matrix = []
  let result = 0
  const rows = input.split(/\r?\n/)

  for(idx = 0; idx <= rows.length - 1; idx++){
    const row = rows[idx].split(/\t/)
    matrix.push(row.map(item => parseInt(item)))
  }

  for(idx2=0; idx2 <= matrix.length - 1; idx2++){
    result += process(matrix[idx2])
  }

  console.log(`The answer is ${result}`)
}

fs.readFile('spreadsheet.txt', 'utf8', (err, data) => {
  checksum(data.trim())
  checksum2(data.trim())
})
