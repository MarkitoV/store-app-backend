import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';

import Product from '../models/Product';

export async function getProducts(req: Request, res: Response): Promise<Response> {

  const products = await Product.find();

  return res.json(products);
}

export async function getProduct(req: Request, res: Response): Promise<Response> {

  const { id } = req.params;
  const product = await Product.findById(id);

  return res.json(product);
}

export async function createProduct(req: Request, res: Response): Promise<Response> {

  const { name, container, size, description, price, stock, provider } = req.body;
  const newProduct = {
    name,
    container,
    size,
    description,
    price,
    stock,
    provider,
    imagePath: req.file.path
  };
  const product = new Product(newProduct);
  await product.save();

  return res.json({
    message: 'Product successfully saved',
    product
  });
}

export async function deleteProduct(req: Request, res: Response): Promise<Response> {

  const { id } = req.params;
  const product = await Product.findByIdAndRemove(id);
  if (product) {
    await fs.unlink(path.resolve(product.imagePath));
  }

  return res.json({
    message: 'Product successfully deleted',
    product
  });
}

export async function updateProduct(req: Request, res: Response): Promise<Response> {

  const { id } = req.params;
  const { name, container, size, description, price, stock, provider } = req.body;
  const updatedProduct = await Product.findByIdAndUpdate(id, {
    name,
    container,
    size,
    description,
    price,
    stock,
    provider
  }, { new: true });
  
  return res.json({
    message: 'Product successfully updated',
    updatedProduct
  });
}

// Typescript, Nodejs & MongoDB RestAPI y Subida de Imagenes