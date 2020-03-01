const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('all user ');
});

router.get('/first', (req, res) => {
    res.send('user first');
});

router.get('/second', (req, res) => {
    res.send('user second');
});





module.exports = router