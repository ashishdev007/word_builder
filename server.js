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

var randomGenerator = (done, length) => {
    var flag = false;
    var no;

    while(!flag){
        no = Math.floor(Math.random() * length);

        if(!done.has(no)){
            flag = true;
        }
    }
    return no;
}

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

processQuery = (query) =>{
    
    var promise = new Promise((resolve, reject) => {
        connection.query(query, (error, results, fields) => {
            if(error){
                console.log("Can't process '" + query +"'");
                throw error;
            }
    
            resolve(results);
        })
    });

    return promise;

}

app.get("/getword", async (req, res) => {

    var word;

    try{
        results = await processQuery("SELECT WORD, ID FROM MEANING ORDER BY RAND() LIMIT 0,1 ");
        word = {name: results[0].WORD, id: results[0].ID};
        res.json(word);

    }catch(e){
        console.log("Promise rejected");
    }
    
});

app.get("/abc/:id", async (req,res) =>{
    console.log(req.params.id);
})

app.get("/getdefs/:id", async(req, res) => {
    var id = req.params.id;
    var results = {defs :["", "", ""], correct : -1};
    var done = new Set();

    try{

        correct = await processQuery("select DEFINITION from MEANING where ID = " + id);

        no = randomGenerator(done,3);
        done.add(no);
        console.log(no +1);

        results.defs[no] = correct[0].DEFINITION;
        results.correct = no + 1;

        options = await processQuery("SELECT DEFINITION FROM MEANING WHERE ID != " + id + " ORDER BY RAND() LIMIT 2");

        for (let i = 0; i < 2; i++) {
            no = randomGenerator(done,3);
            done.add(no);
            results.defs[no] = options[i].DEFINITION;
            
        }

        res.json(results);
    }catch(e){
        console.log("Promise rejected");
    }

});

app.listen(port, ()=>{
    console.log("Server has started on " + port);
});