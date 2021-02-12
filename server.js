const express = require('express');

const app = express();
const server_port = 3000;

app.get('/', (request, response) => {
  console.log('Request', request);
  response.send('<h1>Hello from node</h1>');
});

app.listen(server_port, () => console.log(`Server Started on port ${server_port}`));
