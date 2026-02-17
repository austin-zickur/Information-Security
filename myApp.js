const express = require('express');
const app = express();

/*
Information Security 
all code additions below this comment
author: Austin Zickur
*/
const helmet = require('helmet');

app.use(helmet.hidePoweredBy());

app.use(helmet.frameguard({action:'DENY'}));

app.use(helmet.xssFilter());



































/*
Information Security 
all code additions above this comment
author: Austin Zickur
*/


module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
