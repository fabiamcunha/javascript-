function validarArray(array,numero){
    try{
        if(!array && !numero) throw new ReferenceError("envio os parametros");

        if(typeof array !== "object")throw new TypeError("Array não e um object");
    
        if(typeof numero !== "number")throw new TypeError("numero deve ser tipo number");
    
        if(array.length !== numero)throw new RangeError("o tamanho do array nao corresponde ao numero")
        return array;
 }
 catch(e){
    if(e instanceof ReferenceError){
        console.log("Este erro é um referenceErro");
        console.log(e.message);
    }else  if(e instanceof TypeError){
        console.log("Este erro é um TypeError");
        console.log(e.message);
    }else if(e instanceof RangeError){
        console.log("Este erro é um RangeError");
        console.log(e.message);
    }else{
        console.log('TIPO DE ERRO NÃO ESPERADO')
    }
    
}
}
console.log(validarArray([1,2,4,5,6],'a'))