const express = require('express')
const app = express()
var usrRoute = require('./userRouter')
var dogRoute = require('./Router/dogRoute')
var catRoute = require('./Router/catRoute')
var queryRoute = require('./Router/queryRoute')

//user
app.use('/user', usrRoute);
//dog
app.use('/dog', dogRoute);
//cat
app.use('/cat', catRoute);
//picture
app.use('/static' ,express.static('./public/'));

//query
app.use('/data', queryRoute);




app.listen(3000)