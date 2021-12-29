//array 
const users=['junior','Jose','Carlos','Paulo','Lucia','Carla regina','Fabiana'];

//obj Symbol retorna um valor do tipo símbolo
const gender={
    MAN:Symbol('M'),
    WOMAN:Symbol('F')
}
//array de obj
const persons=[
{
    name:'Mauricio ',
    age:26,
    gender:gender.MAN
},
{
    name:'Jose',
    age:27,
    gender:gender.MAN
},
{
    name:'Carlos',
    age:33,
    gender:gender.MAN
},
{ 
    name:'Paulo',
    age:45,
    gender:gender.MAN
},
{
    name:'Lucia',
    age:45,
    gender:gender.WOMAN
},
{
    name:'Carla regina',
    age:49,
    gender:gender.WOMAN
},
{
    name:'Fabiana',
    age:70,
    gender:gender.WOMAN 
}
]
//======================================================================================
//filter
//=======================================================================================
const m = persons.filter((item)=>{
    return item.name.includes('C')
})
console.log(m)


//======================================================================================
//isArray
//======================================================================================= 

console.log('a variavel e um array',Array.isArray(persons));


//======================================================================================
//forEach
//======================================================================================= 

 
//EXEMPLO:1
persons.forEach(person=>{
    console.log('Nome:'+ person.name)
})
//EXEMPLO:2
persons.forEach(pessoa=> {
    console.log(`O nome é: ${pessoa.name} e tem a idade ${pessoa.age} `);
});
//EXEMPLO:3
const produtos = [
    {name:'Bike',price:1000,desconto:0.10},
    {name:'TV',price:2450,desconto:0.10},
    {name:'Netbook',price:5900,desconto:0.10},
    {name:'Phone',price:3200,desconto:0.10},
    {name:'Computer',price:10000,desconto:0.10},
    {name:'Keyboard',price:320,desconto:0.10}
]
produtos.forEach((item,index)=>{
    let priceTotal=item.price*item.desconto;//descobrir o valor do desconto( price * desconto)
   item.priceDesconto=item.price-priceTotal//descobrir preço com desconto
  console.log(index + 1,item.name,item.desconto,item.priceDesconto)
    
})

//======================================================================================
//MAP ()
//=================================================================================
//exercicio 1
const numeros=[1,2,3,4,5];
  
 const resultado=numeros.map(dobro=> dobro*2 );
 console.log(resultado)

//exercicio 2
 function getCusto(precoComDesconto){
     return parseInt(precoComDesconto *  0.10)
 }
 function precoComDesconto(produto){
      return produto.price *produto.desconto
 }
 const valorFinal = produtos
 .map(precoComDesconto)
 .map(getCusto)
console.log(valorFinal)

 //exercicio 3
 const fahrenheit = [0,3,45,50,34,21]
 const celsius =fahrenheit.map(el=>  Math.round((el-32)*5/9))

 console.log(celsius)

 //======================================================================================
//filter()
//=======================================================================================
const n = [1,1,2,3,4,5,5,6,9,9,0,2,4]

//exercicio 1
const x=n.filter((elem,index,arr)=> arr.indexOf(elem)===index);
console.log(x)

//exercicio 2
const y=n.filter(elem=>elem > 5);
console.log(y)

//======================================================================================
//reduce()
//=======================================================================================

//exercicio 1
const rockets=[
    {country:'Russia',launches:32},
    {country:'US',launches:23},
    {country:'China',launches:16},
    {country:'Europe',launches:7},
    {country:'India',launches:6}
]
//primeiro parametro e o anterior e o segundo o atual.
const totalLaunches=rockets.reduce((prevVal,elem)=>prevVal+elem.launches,0);
console.log(totalLaunches)

//======================================================================================
//every()
//=======================================================================================
//exercicio 1
const another=[12,23,5,6,89,10]
console.log(another.every(elem=>elem < 10))// retorna false

//exercicio 2
const turma=[
    {id:12,nome:'fred',idade:80},
    {id:18,nome:'mad',idade:20},
    {id:22,nome:'luis',idade:22},
    {id:23,nome:'paul',idade:22},
   ]
console.log(turma.every(p=>p.idade >=18))//retorna true
    

//======================================================================================
//some()
//=======================================================================================

//exercicio 1
const team=[
    {id:12,nome:'frederico',pilot:true},
    {id:18,nome:'madalena',pilot:true},
    {id:22,nome:'luis carlos',pilot:false},
    {id:23,nome:'paula',pilot:false},
]
console.log(team.some(pessoa=>pessoa.pilot)) //retorna true


//======================================================================================
//find()
//=======================================================================================
//retorna o valor do primeiro elemento encontrado
const carros =[
    {name:'uno',modelo:'Fiat', ano:2012},
    {name:'honda',modelo:'honda', ano:2010},
    {name:'scania',modelo:'scania', ano:2017},
    {name:'palio',modelo:'Fiat', ano:2021}
]
 const carroModelo = carros.find(item=>{
     return item.modelo='Fiat';
 })
 console.log(carroModelo)

//======================================================================================
//includes()
//=======================================================================================
 const numero=[1,2,3,45,6,78,90,100];

 const totalNumero= numero.includes(10);
 console.log(totalNumero)//false

 const totalNumero2= numero.includes(100);
 console.log(totalNumero2)//true