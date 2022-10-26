// Delete occurrences of an element if it occurs more than n times

// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.

function deleteNth(ar,n){
  const res = []
  const counts = {}
  ar.map(x => counts[x] = counts[x] ? counts[x]: 1)
  ar.map(x => {
    if (counts[x] <= n){
      res.push(x)
      counts[x] = counts[x] + 1
    }
  })
  return res
}
//Example
deleteNth([1,1,3,3,7,2,2,2,2], 3)
// >> [1, 1, 3, 3, 7, 2, 2, 2]
