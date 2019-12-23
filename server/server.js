const express = require("express");

const app = express();
const mysql = require("mysql");
const port = process.env.port || 1500;

var createConnection = async () => {
    connection = mysql.createConnection({
        host: "remotemysql.com",
        port: 3306,
        user: "uKvABK0n58",
        password: "g0FFzxiUpW",
        database: "uKvABK0n58"
    });

    connection.connect(err => {
        if (err) {
            console.log("Error Connecting to database");
            console.log(err);
            return;
        } else {
            console.log("Connected to database!");
        }
    });

    connection.on("error", function(err) {
        console.log("Connection Loast");
        createConnection();
    });
};

createConnection();

var randomGenerator = (done, length) => {
    var flag = false;
    var no;

    while (!flag) {
        no = Math.floor(Math.random() * length);

        if (!done.has(no)) {
            flag = true;
        }
    }
    return no;
};

processQuery = query => {
    var promise = new Promise((resolve, reject) => {
        connection.query(query, (error, results, fields) => {
            if (error) {
                console.log("Can't process '" + query + "'");
                throw error;
            }

            resolve(results);
        });
    });

    return promise;
};

app.get("/question", async (req, res) => {
    var question = {};

    try {
        word = await processQuery(
            "SELECT WORD, ID, DEFINITION FROM MEANING ORDER BY RAND() LIMIT 0,1 "
        );

        question = {
            ...question,
            ...{ word: word[0].WORD, id: word[0].ID }
        };

        definition = word[0].DEFINITION;

        optionsList = [{}, {}, {}];
        no = randomGenerator(new Set(), 3);
        question.answer = no;
        optionsList[no] = { id: no, text: definition };

        options = await processQuery(
            "SELECT DEFINITION FROM MEANING WHERE ID != " +
                question.id +
                " ORDER BY RAND() LIMIT 3"
        );

        for (let i = 0; i < 3; i++) {
            if (i !== no) {
                optionsList[i] = { no: i, text: options[i].DEFINITION };
            }
        }

        question.options = optionsList;

        res.json(question);
    } catch (e) {
        console.log("Can't get a question");
        console.log(e);
    }
});

app.get("/getword", async (req, res) => {
    var word;

    try {
        results = await processQuery(
            "SELECT WORD, ID FROM MEANING ORDER BY RAND() LIMIT 0,1 "
        );
        word = { name: results[0].WORD, id: results[0].ID };
        res.json(word);
    } catch (e) {
        console.log("Promise rejected");
    }
});

app.get("/getdefs/:id", async (req, res) => {
    var id = req.params.id;
    var results = { defs: ["", "", ""], correct: -1 };
    var done = new Set();

    try {
        correct = await processQuery(
            "select DEFINITION from MEANING where ID = " + id
        );

        no = randomGenerator(done, 3);
        done.add(no);
        console.log(no + 1);

        results.defs[no] = correct[0].DEFINITION;
        results.correct = no + 1;

        options = await processQuery(
            "SELECT DEFINITION FROM MEANING WHERE ID != " +
                id +
                " ORDER BY RAND() LIMIT 2"
        );

        for (let i = 0; i < 2; i++) {
            no = randomGenerator(done, 3);
            done.add(no);
            results.defs[no] = options[i].DEFINITION;
        }

        res.json(results);
    } catch (e) {
        console.log("Promise rejected");
    }
});

app.listen(port, () => {
    console.log("Server has started on " + port);
});
