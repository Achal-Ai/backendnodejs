require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 9000

app.get('/twitter', (req, res) => {
  res.send('Achal World!')
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.get('/users', (req, res) => {
  res.send('Backend World!')
})

app.get('/login', (req, res) => {
  res.send('<h1>Login Page</h1>')
})

app.get('/google', (req, res) => {
    res.send('<h2>This is my google landing page</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})