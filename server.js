/**
 * Created by csimek001c on 3/19/18.
 */

var express = require('express');
var app = express();
var opn = require('opn');
var port = process.env.PORT || 3001;
var path = require('path');

app.use(express.static(path.join(__dirname, '/')));

opn('http://localhost:' + port);

app.listen(port);
console.log("\x1b[32m%s\x1b[0m", 'App is listening on port ' + port);
