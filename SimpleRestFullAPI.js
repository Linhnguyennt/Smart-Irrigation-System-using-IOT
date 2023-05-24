var mysql = require('mysql');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
const PORT = process.env.PORT || 2002
app.listen(PORT, function () {
    console.log(`Demo project at: ${PORT}!`);
});
//MYSQL
var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123456",
    insecureAuth: true,
    database: "linhdb"
});
// workbench
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password';
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!!!")
    var sql = "SELECT * FROM solieu";
    con.query(sql, function (err, results) {
        if (err) throw err;
        console.log(results);
    })
});
//RESTFull API
app.get('/', function (req, res) {
    res.send('Hello World');
})
app.get('/getAllsolieu', function (req, res) {
    var sql = "SELECT * FROM solieu";
    con.query(sql, function (err, results) {
        if (err) throw err;
        res.send(results);
    });
})

app.post('/adddata', function (req, res) {
    const {namedevice,humid,description} = req.body;
    console.log('temperature', humid);
    // var sql ="INSERT solieu(humid,temperature,atTime) values (34,34.5,'2023/2/2 10:00:00')";
    var sql = "INSERT solieu(namedevice,humid,description) values ('"+namedevice+"',"+humid+",'"+description+"')";
    console.log(sql);
    con.query(sql, function(err, results) {
        if (err) throw err;
        res.send('Add successfully');
    });    
 })
        
app.delete('/deletesolieu', function (req, res) {
    var sql = "Delete from devices where id=1;";
    con.query(sql, function (err, results) {
        if (err) throw err;
        res.send('Delete device ok');
    });
})