import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Devdatt@6799",
    database:"test",
}) 
app.get("/", (req,res) => {
    res.json("hello this is the backend")
})
app.get("/books", (req,res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err,data)=> {
        if(err) {
            console.log(err);
        return res.json(err)
        }    
        return res.json(data);
    });
});

app.listen(8800, () => {
    console.log("connected to backend!")
})