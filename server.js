const Token = require('./modules/token_generator');
const express = require('express');

const app = express();
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

app.listen(server_port, () => console.log(`Server Started on port ${server_port}`));
