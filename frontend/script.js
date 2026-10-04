const movieInput=document.getElementById("movieInput");
const searchBtn=document.getElementById("searchBtn");
searchBtn.addEventListener("click",function(){
     const movieName=movieInput.value;
     console.log(movieName);

})