import { Router } from 'express';
const router = Router();

import {
  createProduct, getProducts, getProduct, deleteProduct, updateProduct
} from '../controllers/product.controller';

import multer from '../libs/multer';

router.route('/products')
  .get(getProducts)
  .post(multer.single('image'), createProduct);

router.route('/products/:id')
  .get(getProduct)
  .delete(deleteProduct)
  .put(updateProduct);

export default router;