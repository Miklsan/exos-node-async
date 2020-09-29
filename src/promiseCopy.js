/*3: promiseCopy.js
Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt en utilisant les api asynchrones basées sur des promises du module fs de node.js.
*/
import fs from 'fs/promises'

console.log('START OF PROGRAM')

let copyFile1 = await fs.copyFile('./../file1.txt', './../file4.txt')
console.log(copyFile1)

console.log('END OF PROGRAM')
