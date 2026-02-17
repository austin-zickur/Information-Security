const express = require('express');
const app = express();

/*
Information Security 
all code additions below this comment
author: Austin Zickur
*/
const helmet = require('helmet'); //load and cache modules

app.use(helmet.hidePoweredBy()); //remove x-powered-by header

app.use(helmet.frameguard({action:'DENY'})); //deny clickjacking via framing

app.use(helmet.xssFilter()); //sanitize server queries

app.use(helmet.noSniff()); //lock content-type

app.use(helmet.ieNoOpen()); //block html autodownload

const ninetyDaysInSeconds = 90*24*60*60
app.use(helmet.hsts({maxAge:ninetyDaysInSeconds, force: true})); //https 90 day limit




























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
