const movieInput=document.getElementById("movieInput");
const searchBtn=document.getElementById("searchBtn");

searchBtn.addEventListener("click",async function(){
     const movieName=movieInput.value;

     // Ask the backend to search for that movie
     const response=await fetch(
          `http://localhost:3000/findMovie?movie=${movieName}`
     );
     const data=await response.text();
     console.log(data);

})