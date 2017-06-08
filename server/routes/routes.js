var express = require('express')
var router = express.Router()

var skuxxesDb = require('../db')

router.get('/skuxx', (req, res) => {
  let db = req.app.get('db')
  skuxxesDb.getSkuxxes(db)
    .then(skuxxes => {
      res.json(skuxxes)
    })
})

router.post('/skuxx', (req, res) => {
  let db = req.app.get('db')
  skuxxesDb.saveSkuxxes(req.body)
    .then((result)=>{
      res.status(201).send()
    })
})

module.exports = router
