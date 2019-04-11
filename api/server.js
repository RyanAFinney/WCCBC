/*const express = require('express'),


*/

const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
cors = require('cors'),
config = require('./DB');


const businessRoute = require('./routes/business.route');    
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true}).then(
    () => {console.log('Database is connected')},
    err => {console.log('Can not connect to the database' + err)}
    );

const app = express();

app.use(bodyParser.json());
app.use(cors({origin:true}));
const port = 3000;
   
app.get('/', (req, res) => res.send('Hello World!!!'));
app.use('/business', businessRoute);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))