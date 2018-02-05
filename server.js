const express = require('express');
const bodyParser = require('body-parser');
const timersRouter = require('./routes/timers');

const app = express();
const PORT = process.env.PORT || 3001;

// app.use('/', express.static(path.join(__dirname, 'client', 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/timers', timersRouter);

app.listen(PORT, (err) => {
    if (err) {
        console.log(`failed to start server on ${PORT}`);
    } else {
        console.log(`started express server on ${PORT}`);
    }
});