const express = require('express');
const server = express();
const morgan = require('morgan')
const PORT = 3001;
const router = require('./routes/index')
const cors = require('cors')

server.use(express.json())
server.use(cors())

server.use('/rickandmorty', router)

server.listen(PORT, () => {
    console.log('Server raised in port ' + PORT);
});