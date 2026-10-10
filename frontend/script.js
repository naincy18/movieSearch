const movieInput=document.getElementById("movieInput");
const searchBtn=document.getElementById("searchBtn");
const movieContainer=document.getElementById("movieContainer");

searchBtn.addEventListener("click",async function(){
     const movieName=movieInput.value.trim();
     if(movieName===""){
          movieContainer.textContent="Please enter a movie name:";
          return;
     }

     // Ask the backend to search for that movie
     try{
          const response=await fetch(
               `http://localhost:3000/findMovie?movie=${encodeURIComponent(movieName)}`
          );
          const data=await response.text();
          movieContainer.textContent = data;
     }catch(error){
          movieContainer.textContent = "Could not connect to the server.";
          console.error(error);

     }


});