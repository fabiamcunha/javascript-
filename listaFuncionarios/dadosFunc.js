import * as fs from 'fs';
var fs = require("fs");
var funcionarios = "funcionarios.json";
//metodo de  leituta de arquivo JSON
fs.readFile(funcionarios, "utf-8", function(err, data){
    if(err){
        console.log(err);
    }else{
           //transforma um string JSON em objeto javascript
        funcionarios = JSON.parse(data);

    //transforma um objeto em string JSON
    //console.log(JSON.stringify(pessoa));
   
    

            
    }
    console.log(mediaSetor("Administrativo"))
    console.log(menorSalarioSetor("Administrativo"));
     console.log(maiorSalarioSetor("Administrativo"));
     console.log (maiorSalario());
     console.log (menorSalario());
     console.log( mediaEmpresa());
   
  

	// função para encontrar o maior salario de um arquivo JSON
    function maiorSalario(){
        var maiorSalario = 0;
         var funcionario = "";

        for(var i = 0; i < funcionarios.funcionarios.length; i++){
            
            if(funcionarios.funcionarios[i].salario > maiorSalario){
                maiorSalario=funcionarios.funcionarios[i].salario;
                funcionario=funcionarios.funcionarios[i].nome;
            }
        }
        
        return funcionario
    }

    function menorSalario(){

       var menorSalario = 999999;
        var funcionario = "";
        //var menorSalario=funcionarios.funcionarios[0].salario
        //var funcionario=funcionarios.funcionarios[0].nome

        for(var i = 0;i<funcionarios.funcionarios.length; i++ ){
            
            if(funcionarios.funcionarios[i].salario < menorSalario){
                menorSalario = funcionarios.funcionarios[i].salario;
                funcionario = funcionarios.funcionarios[i].nome;
            }
        }
       return funcionario
    }

    function mediaEmpresa(){
    	var total=0;
    	var mediaSalario=0;

    	  for(var i = 0; i < funcionarios.funcionarios.length; i++){
            
             total+=funcionarios.funcionarios[i].salario
              
			   	}
			  mediaSalario =total/funcionarios.funcionarios.length
		    return mediaSalario
    }
      
   function maiorSalarioSetor(setor){
         var maiorSalario = 0;
         var funcionario = "";

        for(var i = 0; i < funcionarios.funcionarios.length; i++){
            
            if(funcionarios.funcionarios[i].setor === setor && funcionarios.funcionarios[i].salario > maiorSalario){
                maiorSalario=funcionarios.funcionarios[i].salario;
                funcionario=funcionarios.funcionarios[i].nome;
            }
        }
        return funcionario
     }
     function menorSalarioSetor(setor){
        var menorSalario = 999999;
        var funcionario = "";
        //pegar primeiro funcionario da lista e fazer comparacoa com os outros 
        //var menorSalario=funcionarios.funcionarios[0].salario
        //var funcionario=funcionarios.funcionarios[0].nome

        for(var i = 0;i<funcionarios.funcionarios.length; i++ ){
            
            if(funcionarios.funcionarios[i].setor===setor && funcionarios.funcionarios[i].salario < menorSalario){
                menorSalario = funcionarios.funcionarios[i].salario;
                funcionario = funcionarios.funcionarios[i].nome;
            }
        }
       return funcionario
    }

function mediaSetor(setor){
    var total=0;
        
            var qtdSetor=0;
          for(var i = 0; i < funcionarios.funcionarios.length; i++){
            if(funcionarios.funcionarios[i].setor===setor){
             total+=funcionarios.funcionarios[i].salario
             qtdSetor++
              }
                }
            var   media =total/qtdSetor;
            return media
}
    
        
});
