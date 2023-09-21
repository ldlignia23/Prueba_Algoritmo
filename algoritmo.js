const readline = require('readline');

//Lee los datos por consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//funcion para contactar los caracteres de la cadena de texto proporcionado por consola
function contarCaracteres(cadena, caracter){
    let contador = 0;
    for (let i = 0; i < cadena.length; i++){
        if (cadena.charAt(i).toLowerCase() === caracter.toLowerCase()){
            contador++;
        }
    }
    return `${caracter} = ${contador} veces`;
}

//Lectura de cadena y caracter a contar
rl.question('Ingrese una cadena de texto: ', (cadena) => {
    rl.question('Ingrese un carácter a buscar: ', (caracter) => {
        const resultado = contarCaracteres(cadena, caracter);
        console.log(resultado);
        rl.close();
    });
});