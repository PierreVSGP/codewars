// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
// TITLE : Isograms (kyu7)

const isIsogram = n => {
    var res = []
    var bool = true;
    for (let i = 0; i < n.length; i++) {
      if (!res.includes(n[i].toLowerCase())){
        res.push(n[i])
      }else{
        bool = false
      }
    }
    return (bool)
  }