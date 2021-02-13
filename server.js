const fs = require('fs');
const https = require('https');
const express = require('express');

const Token = require('./modules/token_generator');

require('dotenv').config();

const secure_key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');

const app = express();

// Allows CORS to be enabled
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, user, Content-Type, Accept");
  next();
});

const server = https.createServer({key: secure_key, cert: cert }, app);
const server_port = 3000;

app.get('/', (request, response) => {
  let userName = 'user1';

  console.log('User', request.headers.user)
  const expires = 10000;

  if (request.headers.user !== undefined){
    userName = request.headers.user;
  }

  const token = Token.generateToken(process.env.APP_KEY, process.env.APP_ID, userName, expires);
  response.send({ token });
});

// app.listen(server_port, () => console.log(`Server Started on port ${server_port}`));
server.listen(server_port, () => console.log(`Server Started on port ${server_port}`));
