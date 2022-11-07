const fs = require('fs');
const path = require('path');
const readline = require('readline');

let textFile = path.join(__dirname, 'text.txt');

let writerText = fs.createWriteStream(textFile);

let readText = readline.createInterface({
    input: process.stdin,
    output: writerText,
});

console.log("Let's write something!");

readText.on('line', function(line){
    if(line == "exit"){
        readText.close();
        console.log("Bye-bye! Do widzenia;)");
    }else{
        writerText.write(line + '\n');
    }
})

process.on('SIGINT', ()=>{
    console.log("Bye-bye! Do widzenia;)");
    process.exit();
})


