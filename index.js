const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const handler = (req, res) => {
    res.send('Hello from node');
}

app.get('/', handler)

app.listen(port, (req) => {
    console.log("listenin to port");
})