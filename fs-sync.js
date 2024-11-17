const {readFileSync, writeFileSync, writeFile} = require('fs')

const readFirst = readFileSync('./content/first.txt', 'utf-8')
const readSecond = readFileSync('./content/second.txt', 'utf-8')

writeFileSync('./content/result-sync.txt',`here is the result : ${readFirst}, ${readSecond}`,{flag:'a'})

console.log(readFirst, readSecond)