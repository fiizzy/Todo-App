const express = require('express');
const path = require('path');
let app = express();

//using a middleware to map the /assets link in the url
app.use(express.static(path.join(__dirname, '/public')));

//Setting the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html');
  // res.sendFile(__dirname + '/assets/appUI.js');
  
})

app.listen(3000, ()=>{
  console.log('Yikes! Listening to server 3000!!!')
})
