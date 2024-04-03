const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());
//await pool.connect();
app.listen(5000, () =>
{
    console.log("listening to Sid's port 5000");
});

app.post("/register", async(req,res)=>{
    console.log('Hello');
    console.log('desc ',req.body);
    try {
        const {username, password} = req.body;
        console.log(username);// name is username, email is password
        const newuser = await pool.query("INSERT INTO auth Values($1,$2)",[username,password]);
        res.status(200);
    } catch (error) {
        console.log(error.message);
    }
    res.send("user successfully registered");
});



