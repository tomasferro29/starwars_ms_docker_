const server = require('./src/server');

const PORT = 8004;

const {Character, Film, Planet} = require('./src/database')

// Character.getOne('Greedo').then(res=> console.log(res) )

server.listen(PORT, () => console.log('Database running on port', PORT))