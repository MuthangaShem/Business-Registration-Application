const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');


mongoose.set('useFindAndModify', false);
const businessRoute = require('./routes/business.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser: true }).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const app = express();

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});


app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(cors());
app.use('/business', businessRoute);
const port = process.env.PORT || 8080;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});