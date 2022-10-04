const express = require("express");
const app = express();
const connection = require("./models/users");
const mysql = require("mysql2");
const cors = require("cors")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "in8dev",
});

app.use(cors());
app.use(express.json());


app.get("/listUsers", (req, res) => {
    let SQL = "SELECT * FROM users";

    db.query(SQL, (err, result) => {
       if(err) console.log(err);
        else res.send(result);
    });
});

app.post("/register", (req, res) => {
    const { name } = req.body;
    const { email } = req.body;
    const { birthDate } = req.body;
    const { phone } = req.body;

    let SQL = "INSERT INTO users ( name, email, birthDate, phone ) VALUES ( ?,?,?,?)";
    db.query(SQL, [name, email, birthDate, phone], (err, result) => {
        console.log(err);
    });
});

app.listen(3001, ()=> {
    console.log("server running");
})