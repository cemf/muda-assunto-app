'use strict';

const _ = require('lodash');
const xlsx = require('xlsx');

const workbook = xlsx.readFile('Askhole_translations.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const columnA = [];

// console.log(worksheet[0])

for (let z in worksheet) {
  if(z.toString()[0] === 'A'){
    columnA.push(worksheet[z].v);
  }
}


let newJson = {}
columnA.shift()

newJson['questoes'] = columnA

let perguntas = JSON.stringify(newJson)
var fs = require('fs');

fs.writeFile("perguntas.json", perguntas, function(err, result) {
    if(err) console.log('error', err);
});


// console.log(columnA);













// const xlsx= require('node-xlsx');
// Or var xlsx = require('node-xlsx').default;







// Parse a buffer
// const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`Askhole_translations.xlsx`));
// Parse a file
// const workSheetsFromFile = xlsx.parse(`Askhole_translations.xlsx`);
// workSheetsFromFile[0].data.shift()

// console.log(workSheetsFromFile[0].data)

// //workSheetsFromFile[0].data é um array gigante 

// 

// workSheetsFromFile[0].data.forEach(el=>{
//     newJson['questoes'].push(el.split(','))
// })