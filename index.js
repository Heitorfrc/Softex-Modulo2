import express from 'express';


const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("Hello World");

});

app.listen(8081, function() {
    console.log("url @ http://localhost:3333");
});