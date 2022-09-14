// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
// TITLE : Extract the domain name from a URL

const domainName = n => {
    const cut = n.replace(/((http[s]*:[\/]{2})*(www\.)*)/g, '')
    return cut.split('.')[0]
  }