var http = require('http');
var url = require('url');
var mysql = require('mysql'); //npm install mysql
//MYSQL
var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123456",
    insecureAuth: true,
    database: "linhdb"
});
// if error: 
// fix it: chay lenh nay trong workbench
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
//Web server
http.createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    switch (req.url) {
        case "/mysql":
            var sql = "SELECT * FROM solieu";
            con.query(sql, function (err, results) {
                if (err) throw err;
                console.log("row-0 > deviceName: " + results[0].namedevice);
                res.end(JSON.stringify(results));
            });
            break;
    }
}).listen(3000);
console.log("Listening on port 3000... ");