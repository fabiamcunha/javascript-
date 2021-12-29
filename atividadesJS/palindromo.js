//solução 1
//exercicio simples palindromo verifica se a palavra e um apalindromo e returna true o false
function verificarPalindromo(string){
    if(!string) throw "string invalida";

    return string.split("").reverse().join("") === string;

}

console.log(verificarPalindromo(""));