
//exercicio simples palindromo verifica se a palavra e uma palindromo e returna true o false
function checkPalindromo(string){
    if(!string) return "string invalida";

    //Remove caracter especial e espaço em branco
    let ignoreSpace = string.replace(/[^A-Z0-9]/ig,"").toLowerCase();

    //separa as silabas 
    let str = ignoreSpace.split('').reverse().join("");

    return ignoreSpace === str;
}

console.log(checkPalindromo("Subi no onibus"));