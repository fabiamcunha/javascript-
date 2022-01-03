const url =  `https://thatcopy.pw/catapi/rest/`;
const btnCat = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats =async() =>{
try{
  const data = await (fetch(url));//Returno uma promise
   const json = await data.json();

     return json.webpurl
} catch(e){
    console.log(e.message)
}
}

 const loadImg = async()=>{
     catImg.src = await (getCats())
 }   
 btnCat.addEventListener('click',loadImg)
 loadImg()