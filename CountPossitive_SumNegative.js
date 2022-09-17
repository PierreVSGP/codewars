// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

// INSTRUCTIONS 
/* 
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
*/

function countPositivesSumNegatives(input) {
  // your code here
  
   if (input){
    input = input.filter(x => x !== 0)
    const pos = input.filter(x => x > 0).length
    const neg = input.filter(x => x < 0).reduce((a,b)=> a+b, 0)
    var res = [pos, neg]
    return (pos || neg) ? res : []
  }
  return []
}
