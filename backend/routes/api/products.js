import express from 'express';
import data from '../../data';
const router = express.Router();

router.get('/', (req, res) => {
  return res.json(data.products);
});

router.get('/:id', (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((item) => item.id === Number(productId));
  console.log(product);
  if (product) return res.json(product);
  else {
    res.status(404).send({ msg: 'Product Not Found!' });
  }
});
module.exports = router;
