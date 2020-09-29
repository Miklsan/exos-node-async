/*2: callbackCopy.js
Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt en utilisant les api asynchrones basées sur des callbacks du module fs de node.js.*/
import fs from 'fs'

console.log('START OF PROGRAM')

//asynchronous reading of file1.txt
fs.readFile('.././file2.txt', 'utf-8', (err, data) => {
    if (err) console.error(err)
    else console.log('file1.txt: ', data)
})

//asynchronous copying of file2.txt
fs.copyFile('.././file2.txt', '.././file3.txt', (err, data) => {
    if (err) console.error(err)
    else console.log('file2.txt: ', data)
})

console.log('END OF PROGRAM')

/*const fs = require('fs');
const { COPYFILE_EXCL } = fs.constants;

function callback(err) {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
}

// destination.txt will be created or overwritten by default.
fs.copyFile('source.txt', 'destination.txt', callback);

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
fs.copyFile('source.txt', 'destination.txt', COPYFILE_EXCL, callback);*/
