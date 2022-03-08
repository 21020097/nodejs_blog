const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'javascripts')))
var mysql = require('mysql');

const systemInfo = require('./routes/systemInfo');
const Redirect = require('./routes/redirect');
const Books = require('./routes/book');
const file = require('./routes/files');
const users = require('./routes/users');

app.listen(PORT,()=>{console.log(`Server is listening on port :${PORT}`)});


app.get('/',(req,res)=>{
    res.setHeader('Conten-Type','text/html; charset=utf-8');
    res.send('Hello World');
})

app.use('/systemInfo',systemInfo);

app.use('/redirect',Redirect);

app.use('/books',Books);

app.use('/files',file);

app.use('/users',users);

app.use((req,res)=> res.status(404).sendFile(path.join(__dirname)+'/error404.html'));

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "quanlydangkikhoahoc",
})

con.connect(()=>{
    //if(err) throw err;
    console.log("Connected!");
    //con.query("CREATE DATABASE mydb", (result)=> console.log("Database created"))
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql,(result)=>console.log("table created!"))
});
