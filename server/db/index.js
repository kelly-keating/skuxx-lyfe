const getSkuxxes = (db) => {
  return db('skuxxes')
    .select('*')
}

module.exports = {
  getSkuxxes
}
