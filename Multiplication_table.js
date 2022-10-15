// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

// Your task, is to create NxN multiplication table, of size provided in parameter.

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

console.log(multiplicationTable(5))
/*[
  [1, 2, 3, 4, 5],
  [2, 4, 6, 8, 10], 
  [3, 6, 9, 12, 15], 
  [4, 8, 12, 16, 20], 
  [5, 10, 15, 20, 25]
]*/
