exports.up = function (knex, Promise) {
  return knex.schema.createTable('skuxxes', (table) => {
    table.increments('id')
    table.string('name')
    table.string('img_url')
    table.integer('level')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('skuxxes')
}
