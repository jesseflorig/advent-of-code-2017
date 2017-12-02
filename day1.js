const fs = require('fs')

const solveCaptcha = (input) => {
    let result = 0
    const series = input.split('')

    for(idx=0; idx < series.length; idx++){
	const nextIdx = (idx === series.length - 1) ? 0 : idx + 1
	
        if(series[idx]===series[nextIdx]){
          result += parseInt(series[idx])
	}
    }
    
    console.log(`The answer is ${result}`)
}

const solveCaptcha2 = (input) => {
    let result = 0
    const series = input.split('')

    for(idx=0; idx < series.length; idx++){
	const nextIdx = (idx + (series.length / 2)) % series.length
	
        if(series[idx]===series[nextIdx]){
          result += parseInt(series[idx])
	}
    }
    
    console.log(`The answer is ${result}`)
}

solveCaptcha('1122')
solveCaptcha('1111')
solveCaptcha('1234')
solveCaptcha('91212129')
solveCaptcha2('1212')
solveCaptcha2('1221')
solveCaptcha2('123425')
solveCaptcha2('123123')
solveCaptcha2('12131415')

fs.readFile('captcha.txt','utf8',(err, data) => { 
  solveCaptcha(data.trim())
  solveCaptcha2(data.trim())
})
