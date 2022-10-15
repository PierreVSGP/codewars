const multiplicationTable = n =>{
  var res = []
  const final = []
  var d = 1
  for (let i = 1; i<= n; i++){
    res.push(i)
  }
  while (final.length < n){
    final.push(res.map(x=>x*d))
    d++
  }
  return final
}
