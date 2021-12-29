function comparaNumeros(num1,num2){
    if(!num1 || !num2 )return "Entre com numeros";
    
    
   
    const primeiraFrase = criarPrimeiraFrase(num1,num2);
    const segundaFrase = criarSegundaFrase(num1,num2);

    return `${primeiraFrase} ${segundaFrase}`;
}
function criarPrimeiraFrase(num1,num2){
   
    let saoIguais= '';
    if(num1 !== num2){
        saoIguais ='não';
    }
    return `Os numeros ${num1} e ${num2} ${saoIguais} são iguais. `;
}
function criarSegundaFrase(num1,num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const maior10 = soma > 10;
    const maior20 = soma > 20;

    if(maior10){
        resultado10 = 'maior';
    }

    if(maior20){
        resultado20 = 'maior'
    }
    return `Sua soma é de ${soma} que e ${resultado10} que 10 e ${resultado20} que 20`;
}



console.log(comparaNumeros(5));
