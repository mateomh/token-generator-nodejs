const fs = require('fs');
const https = require('https');
const express = require('express');

const Token = require('./modules/token_generator');

const secure_key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');

const app = express();
const server = https.createServer({key: secure_key, cert: cert }, app);
const server_port = 3000;

const key = 'rUlaMASgt1Byi4Kp3sKYDeQzo';
const appId = 'ApplicationID';
const expires = 10000;

app.get('/', (request, response) => {
  let userName = 'user1';

  if (request.headers.user !== undefined){
    userName = request.headers.user;
  }

  const token = Token.generateToken(key, appId, userName, expires);
  response.send({ token });
});

// app.listen(server_port, () => console.log(`Server Started on port ${server_port}`));
server.listen(server_port, () => console.log(`Server Started on port ${server_port}`));
