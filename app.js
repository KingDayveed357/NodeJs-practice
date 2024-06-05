const { readFile, writeFile } = require("fs").promises;


const start = async() => {
    try{
     const first = await readFile("./content/subfolder/first.txt", 'utf8');
     const second = await readFile("./content/subfolder/second.txt", "utf8");
     await writeFile("./content/result.txt", "Wagwan");
     console.log(first, second);
    } catch(error){
       console.log(error);
    }
    
}
start()

 // const util = require('util')
 // const readFilePromise = util.promisify(readFile);
 // const writeFilePromise = util.promisify(writeFile);

// getText("./content/subfolder/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));


 // const getText = (path) => {
 //   return new Promise((resolve, reject) => {
 //  readFile(path, "utf8", (err, data) => {
 // if (err) {
 //  reject(err)
//  } else {
//    resolve(data);
 // }
 //});
// })
//}