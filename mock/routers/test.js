const express = require('express')
const app = express()

app.post('/form', async (req, res) => {
  try {
    if (req.body) {
      const result = req.body
      res.status(200).send({ success: true, message: '', result })
    }
  } catch (error) {
    console.log(error)
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else {
      res.status(500)
      res.send({ success: false, message: '伺服器錯誤' })
    }
  }
})

module.exports = app
