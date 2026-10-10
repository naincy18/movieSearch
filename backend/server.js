const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();


const app = express();
app.use(cors());

const PORT = 3000;

app.get("/",  (req, res) => {
    

    res.send("Movie Finder Backend is running!");
});

app.get("/findMovie",async (req,res)=>{
    try{
        const movieName=req.query.movie;
        if(!movieName){
            return res.status(400).json({
                message:"Please enter a movie name:"
            });
        }
        const response=await axios.get(
            "http://www.omdbapi.com/",
            {
                params:{
                    apiKey:process.env.OMDB_API_KEY,
                    t:movieName
                }
            }

        );
        res.json(response.data);

    }catch(error){
        console.error(error.message);
        res.status(500).json({
            message: "Something went wrong while searching for the movie."
        });
    }

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



// req = request(Information coming to  by frontend.)
// res = response(Information going back to the client.)
// Client asks. Server handles. Server responds.

// GET → “Give me something it come from frontend.”
// POST → “Here is some data; please create/save/process it.”
// Backend → receives the request and does the work.
// Response → backend sends the result back to frontend.

