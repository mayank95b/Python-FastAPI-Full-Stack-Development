const fs = require('fs')

//synchronous way
const data = fs.readFileSync('./data.json', 'utf8')
console.log(data)


//asynchronous way
fs.readFile('./data.json','utf-8',(err,data) => {
    if (err) return console.error(err);
    console.log(data)
})

