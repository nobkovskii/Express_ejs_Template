const express = require('express')
const ejs = require('ejs')
const request = require('request')
const axios = require('axios');
const path = require('path');
const session = require('express-session')

var route = require('./routes/index')
var signup = require('./routes/signup')
var signin = require('./routes/signin')
var signout = require('./routes/signout')

var confirmSession = require('./confirmSession')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// postを使用するための設定
app.use(express.json());
app.use(express.urlencoded());

app.use('/', confirmSession, route)
app.use('/signup', signup)
app.use('/signin', signin)
app.use('/signout', signout)


app.listen(3000)
