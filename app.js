const express = require('express')
const app = express()
const port = 3000
const dns = require('node:dns');
dns.setServers(['8.8.8.8']);
const mongoose =require('mongoose');
app.get('/', (req, res) => { 
  res.sendFile("./views/home.html", {root: __dirname})
})


mongoose
 .connect("mongodb+srv://jaouadihadil2004_db_user:hP5jLTVESr8nEyJq@cluster0.00cunyt.mongodb.net/")
 .then(()=>{app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});})
 .catch((err)=>{console.log(err)});