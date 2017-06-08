var test = require('ava')
var request = require('supertest')

var app = require('../../server/server')
var configureDatabase = require('./setup-db.js')

configureDatabase(test, function (db) {
  app.set('db', db)
})

let object={
  name: "Gal Gadot",
  img_url: "https://media.tenor.com/images/6255737420306ddab0a9eb653ab69c9b/tenor.gif",
  level: "9"}

test.cb('POST /api/v1/skuxx adds a new person to database', (t)=> {
  request(app)
    .post('/api/v1/skuxx')
    .send(object)
    .expect(201)
    .end((err, res)=> {
      return t.context.db('skuxxes').select()
      .then((result)=>{
        t.is(result.length, 21)
        t.is(result[20].name, 'Gal Gadot')
        t.end()
      })
    })
})
