const sqlite3 = require("sqlite3").verbose();
const fs = require('fs');

fs.open('felhasznalo.db', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

const db = new sqlite3.Database("./felhasznalo.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
  
    console.log("connection succesful");
  });
  
db.run('CREATE TABLE felhasznalos(id INTEGER PRIMARY KEY AUTOINCREMENT, nev TEXT NOT NULL, email TEXT UNIQUE NOT NULL, psw TEXT NOT NULL, address TEXT NOT NULL, mobile INT NOT NULL)');

/*
const sql ='INSERT INTO felhasznalos(nev, email, address) VALUES(?,?,?)';
db.run(sql, ["mike","asd@gmail.com", "aaaaaa aaaa"], (err)=>{
    if(err) return console.error(err.message);

    console.log("A new row added!");
});
*/
