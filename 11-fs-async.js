const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/subfolder/first.txt', 'utf8', (err,result) =>{
    if (err) {
       console.log(err); 
       return
    }
    console.log(result);

    const first = result;
    readFile('./content/subfolder/second.txt', 'utf8', (err,result) => { 
        if (err) {
           console.log(err); 
           return
        } 
    const second = result;
    writeFile('./content/result-async.txt', 
    `Here is the result: ${first}.  ${second} `,
    {flag: 'a'} , (err,result) =>{
        if (err) {
            console.log(err); 
            return
         }
         console.log('done with this task');
    }
    )
    })
})
console.log('starting the next task');


const { readFile } = require("fs");

console.log("started a first task");

readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");