'use strict'

{
  const fs = require('fs')

  fs.readFile('tower.txt', 'utf8', (err, data) => {

    let children = new Set()
    let parents = new Set()

    data.trim().split('\n').map(row => {
      if(row.indexOf('>') !== -1) {
        const rowChildren = row.split('>')[1].trim().split(',').map(x => { return x.trim()})
        rowChildren.map(child => { children.add(child) })
        parents.add(row.split(' ')[0])
      }
    })

    let root = new Set([...parents].filter(item =>  !children.has(item)))
    console.log([...root])
  })
}
