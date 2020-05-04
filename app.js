const http = require('http');
const express = require('express');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const bodyParser = require('body-parser');


const app = express();

// I get some problem and my terminal showed me below explanation

// body-parser deprecated undefined extended: provide extended option at express

// and i used this app.use(bodyParser.urlencoded({extended: false}))

// or

// you are running a version of Express that is 4.16+ then type just

// app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     console.log("Hello Express 1");
//     next(); // Allows the request to continue to the middleware in line.
// });

app.use(adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(403).send('<H1>Page Not Found!!</H1>')
});


// const server = http.createServer(app);
// server.listen('3000');
app.listen(3000);