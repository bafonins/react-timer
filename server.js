const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const FILE_PATH = path.join(__dirname, 'mock-data.json');
const PORT = process.env.PORT || 3001;

// app.use('/', express.static(path.join(__dirname, 'client', 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, (err) => {
    if (err) {
        console.log(`failed to start server on ${PORT}`);
    } else {
        console.log(`started express server on ${PORT}`);
    }
});