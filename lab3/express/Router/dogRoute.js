const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Dog page');
});

router.get('/walk', (req, res) => {
    res.send('The dog walk');
});

router.get('/play', (req, res) => {
    res.send('The dog play');
});


module.exports = router