var test = require('ava')

var configurationDatabase = require('./setup-db')
configurationDatabase(test)

var db = require('../../server/db')

let object={
  name: "Gal Gadot",
  img_url: "https://media.tenor.com/images/6255737420306ddab0a9eb653ab69c9b/tenor.gif",
  level: "9"}

test('saveSkuxxes saves a single person to the database', function (t){
  return db.saveSkuxxes(object, t.context.db)
    .then((res)=>{
      t.is(res.length,1) //the length of array of id of items inserted should be only one
    })
})
