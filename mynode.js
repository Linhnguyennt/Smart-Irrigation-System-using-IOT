var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "linhdb"
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE solieu (id INT AUTO_INCREMENT PRIMARY KEY, namedevice VARCHAR(255), temperature DOUBLE(8,2), description VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });
  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = "INSERT INTO solieu (namedevice, temperature, description) VALUES ('Lolin2', '22.7', 'Không tưới cây vì có việc bận')";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("1 record inserted");
  //   });
  // });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO solieu (namedevice, humid, description) VALUES ('Lolin2', '22.7', 'Không tưới cây vì có việc bận')";
    var sql="ALTER TABLE solieu RENAME COLUMN temperature TO humid";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });