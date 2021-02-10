import path from 'path';
import fs from 'fs';

import express from 'express';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  const indexFile = path.resolve('./build/client/index.html'); // get the path to the built index.html file
  fs.readFile(indexFile, 'utf8', (err, data) => { // load in the index.html 
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!'); // error if the file does not load correctly
    }
    return res.send(data); // return the index.html
  });
});

app.use(express.static('./build')); // serve all static asset inside the build/ directory

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}! To see the app visit http://localhost:${PORT}`);
});

