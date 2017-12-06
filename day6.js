'use strict'

{
  const fs = require('fs')

  fs.readFile('blocks.txt', 'utf8', (err,data) => {
    let blocks = data.trim().split('\t').map(Number)
    let key = blocks.join(',')
    let configs = []
    let steps = 0;
    while(configs[key] == undefined){
      configs[key] = steps
      let highest = 0
      blocks.map((block, idx) => { highest = (blocks[idx] > blocks[highest]) ? idx : highest })
      
      let  distro = blocks[highest]
      blocks[highest] = 0
      
      while(distro){
        blocks[++highest % blocks.length]++
        distro--
      }

      key = blocks.join(',')
      steps++
    }
    console.log([steps, steps - configs[key]])  
  })
}
