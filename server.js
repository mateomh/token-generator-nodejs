const Token = require('./token_generator');
const express = require('express');

const app = express();
const server_port = 3000;

const key = 'rUlaMASgt1Byi4Kp3sKYDeQzo';
const appId = 'ApplicationID';
const userName = 'user1';
const expires = 10000;

app.get('/', (request, response) => {
  response.send('<h1>Hello from node</h1>');
  const token = Token.generateToken(key, appId, userName, expires);
});

app.listen(server_port, () => console.log(`Server Started on port ${server_port}`));
