const express = require('express');
const path = require('path');


const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// simple api data to send
const users = [
  {firstName: 'vas',lastName:'yov',email:'yovvas@gmail.com'},
  {firstName: 'sam',lastName:'com',email:'comsam@doker.com'},
  {firstName: 'jon',lastName:'tes',email:'tesjon@outlk.com'},
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
