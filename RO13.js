// https://www.codewars.com/kata/52223df9e8f98c7aa7000062

function rot13(test){
    const list = test.split('')
    const res = []
    list.map(x =>{
      if (/[a-mA-M]/.test(x)) {
        res.push(String.fromCharCode(x.charCodeAt(0)+13))
      }if (/[n-zN-Z]/.test(x)) {
        res.push(String.fromCharCode(x.charCodeAt(0)-13))
      }if (/[a-zA-Z]/.test(x)===false){
        res.push(x)
      }
    })
    return res.join('')
  }