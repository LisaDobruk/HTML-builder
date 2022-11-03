const fs = require('fs');
const path = require('path');
const text = path.join(__dirname, 'text.txt');

let streamText = fs.createReadStream(text, 'utf-8');

streamText.on('data', chunk => console.log(chunk));