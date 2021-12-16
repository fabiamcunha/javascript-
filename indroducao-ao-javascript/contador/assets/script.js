 
 //inicio
 
 let currentNumberWrapper= document.getElementById('currentNumber');
 let currentNumber=0;


 //evento
document.getElementById('increment').addEventListener('click',function(){
    currentNumber =currentNumber + 1;//incrementamos mais 1 a cada click
   
    currentNumberWrapper.innerHTML =currentNumber;//adicionamos ao html 
  
    currentNumberWrapper.style.color='#418336 ';

});

document.getElementById('decrement').addEventListener('click',function (){
    currentNumber = currentNumber -1;//subtrai   1 a cada click
   if(currentNumber < 0){
    currentNumberWrapper.style.color='#EC4632 ';
   }
    currentNumberWrapper.innerHTML= currentNumber;
   
 });
 

 

 
 
 
 
  


