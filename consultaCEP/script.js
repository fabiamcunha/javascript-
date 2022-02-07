let buscarCep = document.getElementById('btnPesquisar')

//evento
  buscarCep.addEventListener("click",pesquisarCep )
//validar entrada de CEP
  const eNumero = (numero)=> /^[0-9]+$/ .test(cep)
  const validarCep = (cep)=>cep.length == 8 && eNumero(cep)
//Pesquisar CEP no API do VIACEP
    function pesquisarCep(){
      let inputCep = document.getElementById('cep').value;  
      const url = `https://viacep.com.br/ws/${inputCep}/json/`;
      if(validarCep(inputCep)){
        fetch(url).then((response)=> response.json())
        .then(data =>{ atribuirCampos(data) })
        .catch(e=> {
         console.log(e.message)
        })
      }else{
         document.getElementById('cep').value ="CEP invalido";
      }
      }
   
//preencher o formulario dinamicamente
  function atribuirCampos(result){
    for(const campo in result){
      if(document.querySelector('#'+campo)){
        document.querySelector('#'+campo).value =result[campo]
      }
    }
  }

