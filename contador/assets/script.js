 
 //inicio
 let increment = document.getElementById("increment");
 let decrement = document.getElementById('decrement');
 let currentNumberWrapper= document.getElementById('currentNumber');
 let currentNumber=0;


 //evento
    increment.addEventListener('click',function(){
    currentNumber =currentNumber + 1;//incrementamos mais 1 a cada click
   
    currentNumberWrapper.innerHTML =currentNumber;//adicionamos ao html 
  
    colorNumber()
});

    decrement.addEventListener('click',function (){
    currentNumber = currentNumber-1;//subtrai   1 a cada click
    conditionNegative()
    currentNumberWrapper.innerHTML= currentNumber;
    
     colorNumber()
 });
 
function colorNumber(){
    if(currentNumber < 0){
        currentNumberWrapper.style.color='#EC4632 ';
       } else{
        currentNumberWrapper.style.color='#418336 ';
       }
}
 
 
  


