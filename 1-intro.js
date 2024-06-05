const amount = 12 ;

if (amount < 10) {
    console.log('small no')
} else{
    console.log('large')
}

console.log(`my first node app`);

// GLOBALS - No WINDOW !!

// __dirname - path to current dir
// __filename -  filename
// require - function to use modules(commonJS
// module - info about current module(file)
// process - info abt env where the program is being executed

console.log(__dirname);
setInterval(() => {
 console.log('hello world')
}, 1000);