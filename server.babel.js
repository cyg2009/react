import express from 'express';   //ES6 syntax

import React from 'react';
import ReactDOM from 'react-dom/server';
import MyApp from './myapp.jsx';

const app = express();

//var express = require('express');
//var app = express();

/*
This is the only built-in middleware function in Express. It serves static files and is based on serve-static.
The root argument refers to the root directory from which the static assets are to be served. The file to serve will be determined by combining req.url with the provided root directory. When a file is not found, instead of sending a 404 response, this module will instead call next() to move on to the next middleware, allowing for stacking and fall-backs.
*/
app.get('/', function(req, res){
    
    var temp1 = ReactDOM.renderToString(<MyApp />);
        console.log(temp1);    
    
    res.send(temp1);
});

//app.use('/static/', express.static('public'));

console.log('start listen on 3000')

app.listen(process.env.PORT || 3000);
