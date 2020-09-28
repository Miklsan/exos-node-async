/*
4: Optionnel:
Réecrivez le programme promiseCopy.js afin qu'il puisse accepter 2 arguments de la ligne de commande:
un fichier source, qui est le fichier à copier
un fichier dest, qui sera la destination de la copie
Comme pour l'exercice précedent utiliser les api asynchrones basées sur des promises du module fs de node.js.
*/
import fs from 'fs/promises'

console.log('START OF PROGRAM')

const creatFile5 = async () => {
    let content = await fs.writeFile('./../file5.txt', 'Hello World !', 'utf-8')
    return content
}

const copyFile6 = async () => {
    let content = await fs.copyFile('./../file5.txt', './../file6.txt')
    return content
}

let content1 = await creatFile5()
console.log(content1)

let content2 = await copyFile6()
console.log(content2)

console.log('END OF PROGRAM')
