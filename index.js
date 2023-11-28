const express = require('express');
const app = express();

// app.use((req, res) => {
//   console.log('Got a new Request!');
//   // res.send({color : 'red'});
//   res.send(`<h1>This is my webpage</h1>, { color: 'red' }`);
// })
app.get('/', (req, res) =>{
  res.send('This is the homepage')
})
app.get('/cats', (req, res) => {
  res.send('Meow!!!')
})

app.get('/dogs', (req, res) => {
  res.send('Woof!!!')
})

app.listen(3000, () => {
  console.log('Listening on port: 3000');
})


