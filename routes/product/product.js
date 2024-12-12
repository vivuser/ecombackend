const express = require('express');
const router = express.Router();
const productController = require('../../controllers/product')

router.post('/', productController.createProducts);

router.get('/products', productController.getAllProducts);
router.get('/:id', productController.getProductDetails)

module.exports = router;
