const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("Hello Express 1");
    next(); // Allows the request to continue to the middleware in line.
});

app.use((req, res, next) => {
    console.log("Hello Express 2");
    res.send('<h1>Header Note</h1>');
});

// const server = http.createServer(app);
// server.listen('3000');
app.listen(3000)

