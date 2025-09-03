// import { Router } from 'express';
// import {
//   listProducts,
//   getProductById,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// } from './productsController.js';
// import { validateData } from '../../middlewares/validationMiddleware.js';

// import {
//   createProductSchema,
//   updateProductSchema,
// } from '../../db/productsSchema.js';
// import { verifySeller, verifyToken } from '../../middlewares/authMiddleware.js';

// const router = Router();

// router.get('/', listProducts);
// router.get('/:id', getProductById);
// router.post(
//   '/',
//   verifyToken,
//   verifySeller,
//   validateData(createProductSchema),
//   createProduct
// );
// router.put(
//   '/:id',
//   verifyToken,
//   verifySeller,
//   validateData(updateProductSchema),
//   updateProduct
// );
// router.delete('/:id', verifyToken, verifySeller, deleteProduct);

// export default router;

import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("the list of products");
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send("a product");
});

router.post("/", (req, res) => {
  res.send("new product created");
});

export default router;
