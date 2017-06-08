const getSkuxxes = (db) => {
  return db('skuxxes')
    .select('*')
}

const saveSkuxxes = (data, db) => {
  return db('skuxxes')
    .insert(data)
}

module.exports = {
  getSkuxxes,
  saveSkuxxes
}
