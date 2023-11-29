const express = require('express');
const app = express();
//引入db.js文件抛出的内容
const { OrderReceive } = require('./db');

app.get('/api/test', async (req,res) => {
  res.send("success +++++++++")
})

app.listen(3000, () => {
  console.log('server running port 3000!');
  
})