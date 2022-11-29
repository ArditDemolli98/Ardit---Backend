console.log("Hello world");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Type your name here: ", (name) => {
    console.log("Ok, your name is " + name);
    rl.close();
})