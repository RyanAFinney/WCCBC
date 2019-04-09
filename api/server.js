const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'), 
      mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true}).then(
    () => {console.log('Database is connected')},
    err => { console.log('Can not connect to the database' + err)}
);
const app = express();
app.use(bodyParser.json());
app.use(cors);
let port = process.env.PORT || 4000;

const server = app.listen(function(){
    console.log('Listening on port ' + port);
});