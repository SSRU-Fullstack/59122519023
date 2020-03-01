const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('cat page');
});

router.get('/eat', (req, res) => {
    res.send('The cat eat');
});

router.get('/sleep', (req, res) => {
    res.send('The cat sleep');
});


module.exports = router