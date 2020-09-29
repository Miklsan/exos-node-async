/*
4: Optionnel:
Réecrivez le programme promiseCopy.js afin qu'il puisse accepter 2 arguments de la ligne de commande:
un fichier source, qui est le fichier à copier
un fichier dest, qui sera la destination de la copie
Comme pour l'exercice précedent utiliser les api asynchrones basées sur des promises du module fs de node.js.
*/
import fs from 'fs/promises'

console.log('START OF PROGRAM')

let fileSrc = process.argv[2]
let fileDest = process.argv[3]

try {
    let stats = await fs.stat(fileSrc)
    if (stats.isFile()) {
        await fs.copyFile(fileSrc, fileDest)
        console.log(
            'file.txt was copied to file2.txt asynchronously with a promise'
        )
    }
} catch (e) {
    console.error(e)
}
console.log('END OF PROGRAM')
