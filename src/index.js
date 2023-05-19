const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, 'views/index.html'))
});

app.listen(3002, function(){
    console.log("server on port 3002")
});
