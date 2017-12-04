const target = 368078

const generateSpiral = (target) => {
  let spiral = [[1]]
  let cursor = 1

  for(let idx = 1; idx > 0; idx++){
    if(cursor >= target){ idx = -1 }

    switch(idx) {
      case 1:
        //console.log('move up')
        spiral.reverse()

        spiral.map(row => {
          cursor += 1
          row.push(cursor)
        })

        spiral.reverse()
        //console.log(spiral)
        break
      case 2:
        //console.log('move left')
        const leftWidth = spiralWidth(spiral)
        const leftMax = cursor + leftWidth
        let leftRow = []

        for(let lIdx = cursor; lIdx < leftMax; lIdx++){
          cursor += 1
          leftRow.push(cursor)
        }

        leftRow.reverse()
        spiral.unshift(leftRow)
        //console.log(spiral)
        break
      case 3:
        //console.log('move down')

        spiral.map(row => {
          cursor += 1
          row.unshift(cursor)
        })
        //console.log(spiral)
        break
      case 4:
        //console.log('move right')
        const rightWidth = spiralWidth(spiral)
        const rightMax = cursor + rightWidth
        let rightRow = []

        for(let rIdx = cursor; rIdx < rightMax; rIdx++){
          cursor += 1
          rightRow.push(cursor)
        }

        spiral.push(rightRow)
        //console.log(spiral)
        idx = 0
        break
    }
  }
  return spiral 
}

const spiralHeight = (spiral) => {
  return spiral.length
}

const spiralWidth = (spiral) => {
  let widest = 0

  spiral.map( row => {
    if(row.length > widest){
      widest = row.length
    }
  })
  return widest
}

const findTarget = (item) => {
  return item === target
}

const printSpiral = (spiral) => {
  console.log('Result Grid')
  spiral.map(row => {
    console.log(row.toString())
  })
}

const solveSpiral = (spiral, target) => {
  const lastRow = spiral[spiral.length - 1]
  const height = Math.ceil(spiralHeight(spiral) / 2) - 1
  const width = Math.floor(spiralWidth(spiral) / 2) - 1
  const latOffset = Math.abs(spiralWidth(spiral) - lastRow.findIndex((findTarget))) - 1
  const walkLat = Math.abs(latOffset - width)
  const walkLon = height

  console.log('target:', target, 'lat:', walkLat, 'lon:', walkLon, 'total:', walkLat + walkLon)
}

const spiral = generateSpiral(target)
//printSpiral(spiral)
solveSpiral(spiral, target)

