const express = require('express');
const app = express();
//the / after get means that when they enter that it will show whatever is in the function
app.get('/', (req, res) => {
  res.send({hi: 'there'});
});
//this tells us which port to listen to
const PORT = process.env.PORT || 5000;
app.listen(PORT);
