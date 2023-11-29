const express = require('express');
// const colors = require('colors');
const app = express();

// app.use((req, res) => {
//   console.log('Got a new Request!');
//   // res.send({color : 'red'});
//   res.send(`<h1>This is my webpage</h1>, { color: 'red' }`);
// })
app.get('/', (req, res) => {
  res.send('This is the homepage')
})

app.get('/o/:forum', (req, res) => {
  const { forum } = req.params;
  res.send(`<h1>You are on the ${forum} forum!!</h1>`)
})


app.get('/cats', (req, res) => {
  res.send('Meow!!!')
})

app.get('/dogs', (req, res) => {
  res.send('Woof!!!')
})

app.post('/cats', (req, res) => {
  res.send('This is a post to the server!!!')
})

//catch all
app.get('*', (req, res) => {
  res.send(`This path doesn't exist.`)
})

app.post('*', (req, res) => {
  res.send(`This path doesn't exist.`)
})

app.listen(3000, () => {
  console.log('Listening on port: 3000');
})


