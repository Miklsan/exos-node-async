/*
1: syncCopy.js
Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt en utilisant les api synchrones du module fs de node.js*/

import fs from 'fs'
console.log('START OF PROGRAM')

//fs.copyFileSync(`.././file1.txt`, `.././file2.txt`)

// try to read file1.txt
/*try {
    // step 1: read file1.txt
    let content1 = fs.readFileSync('.././file1.txt', 'utf-8')
    // step 2: write on screen content1
    console.log('file1.txt: ', content1)
} catch (e) {
    console.log('in first catch')
    console.error(e)
} finally {
    console.log('in first finally')
}*/

// try to create by copying file2.txt
try {
    // step 3: read file2.txt
    let content2 = fs.copyFileSync(`../file1.txt`, `../file2.txt`)
    // step 4: write on screen content2
    console.log('file2.txt: ', content2)
} catch (e) {
    console.log('in second catch')
    console.error(e)
} finally {
    console.log('in second finally')
}

console.log('END OF PROGRAM')
