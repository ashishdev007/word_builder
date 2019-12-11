const express = require('express');

const app = express();
const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'dev',
    password : '1234',
    database: 'test'
});

const port = process.env.port || 3000;

connection.connect(
    (err) =>{
        if (err){
            console.log("Can't establish connection");
        }

        else{
            console.log("Connection established");
        }

    }
);

app.get("/", (req, res) => {

    connection.query("select * from words", (error, results, fields) =>{
        if(error){
            console.log("Can't process query");
            return;
        }

        console.log(results);
        console.log(results[0].name);
    });
    res.send("Hello World");
});

app.listen(port, ()=>{
    console.log("Server has started on " + port);
});