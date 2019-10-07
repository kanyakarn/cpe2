const express = require('express')
const app = express()
const port = 15106

app.get('/', (req, res) =>
  res.send('Greetings from jamnoonfaang...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
