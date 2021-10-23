const { getProducts, getProductDetail } = require('../controllers/products');
const router = require('express').Router();

router.get('/', getProducts);
router.get('/:id', getProductDetail);
module.exports = router;
