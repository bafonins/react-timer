const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const resolve = path.resolve;

const FILE_PATH = resolve('mock-data.json');

router.get('/', (req, res, next) => {
    fs.readFile(FILE_PATH, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            res.setHeader('Cache-Control', 'no-cache');
            res.json(JSON.parse(data));
        }
    });
});

router.post('/', (req, res, next) => {
    fs.readFile(FILE_PATH, (err, data) => {
        const timer = {
            title: req.body.title,
            project: req.body.project,
            id: req.body.id,
            elapsed: 0,
            runningSince: null,
        };
        const timers = JSON.parse(data);
        timers.push(timer);

        fs.writeFile(FILE_PATH, JSON.stringify(timers, null, 4), (err) => {
            if (err) {
                console.log(err);
                res.status(500);
            } else {
                res.setHeader('Cache-Control', 'no-cache');
                res.json(timers);
            }
        });
    });
});

router.put('/', (req, res, next) => {
    fs.readFile(FILE_PATH, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            const timers = JSON.parse(data);
            const id = req.body.id;
            const title = req.body.title;
            const project = req.body.project;

            timers.forEach(t => {
                if (t.id === id) {
                    t.title = title;
                    t.project = project;
                }
            });

            fs.writeFile(FILE_PATH, JSON.stringify(timers, null, 4), (err) => {
                if (err) {
                    console.log(err);
                    res.status(500);
                } else {
                    res.json({});
                }
            });
        }
    });
});

router.delete('/', (req, res) => {
    fs.readFile(FILE_PATH, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            const timers = JSON.parse(data);
            ts = timers.reduce((memo, timer) => {
                if (timer.id === req.body.id) {
                    return memo;
                } else {
                    return memo.concat(timer);
                }
            }, []);

            fs.writeFile(FILE_PATH, JSON.stringify(ts, null, 4), (err) => {
                if (err) {
                    console.log(err);
                    res.status(500);
                } else {
                    res.json({});
                }
            });
        }
    });
});

module.exports = router;