const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))

const test = require('./routers/test')
app.use('/api', test)
app.listen(port, () => console.log(`mock server listening at http://localhost:${port}`))
