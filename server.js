const express = require('express');

const app = express();
const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'dev',
    password : '1234',
    database: 'words'
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

app.get("/getword", (req, res) => {

    var word;

    connection.query("SELECT WORD, ID FROM MEANING ORDER BY RAND() LIMIT 0,1 ", (error, results, fields) =>{
        if(error){
            console.log("Can't process query");
            return;
        }

        console.log(results);
        word = {name: results[0].WORD, id: results[0].ID};
        console.log(word);
        res.json(word);
    });

    
});

app.listen(port, ()=>{
    console.log("Server has started on " + port);
});