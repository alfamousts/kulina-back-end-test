const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

// parse application/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_db'
});

//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

//tampilkan semua data product
app.get('/api/products',(req, res) => {
  let sql = "SELECT * FROM user_review";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//tampilkan data product berdasarkan id
app.get('/api/products/:id',(req, res) => {
  let sql = "SELECT * FROM user_review WHERE id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Tambahkan data product baru
app.post('/api/products',(req, res) => {
  let data = {id: req.body.id, order_id: req.body.order_id,product_id: req.body.product_id,user_id: req.body.user_id,rating: req.body.rating,review: req.body.review};
  let sql = "INSERT INTO user_review SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Edit data product berdasarkan id
app.put('/api/products/:id',(req, res) => {
  let sql = "UPDATE user_review SET rating='"+req.body.rating+"', review ='"+req.body.review+"' WHERE id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Delete data product berdasarkan id
app.delete('/api/products/:id',(req, res) => {
  let sql = "DELETE FROM user_review WHERE id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});
