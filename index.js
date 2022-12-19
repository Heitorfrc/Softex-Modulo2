import express from 'express';


const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("Hello World");

});

app.listen(8088, function() {
    console.log("url @ http://localhost:8088");
});
