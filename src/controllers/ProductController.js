const mongoose = require('mongoose');
const Product = mongoose.model('Product')

module.exports = {
  // Vai fazer uma listagem de todos os produtos que estiverem dentro da base de dados
  async index(req, res) {
    // permite inserir parametros na URL
    const { page = 1 } = req.query
    // busca todos os produtos e coloca dentro de products
    const products = await Product.paginate({}, { page, limit: 10})
    // retorna as informação em JSON
    return res.json(products)
  },

  // Criação
  async store(req, res) {
    const product = await Product.create(req.body)

    return res.json(product)
  },

  // Detalhes dos Produtos
  async show(req, res) {
    const product = await Product.findById(req.params.id)

    return res.json(product)
  }, 
  
  // Atualização
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

    return res.json(product)
  },

  // Remoção
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id)

    return res.send()
  },

}
