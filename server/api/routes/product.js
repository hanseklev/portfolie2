const express = require("express");
const { sendError } = require("../../lib");
const Product = require("../../models/product");
const { validateAdmin } = require("../middleware/auth-middleware");
const route = express.Router();

module.exports = (app) => {
  app.use(route);
  //route.use(validateAdmin);

  route.get("/products", async (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Returns  all products'
    try {
      const products = await Product.find();
      return res.status(200).json({ products: products });
    } catch (error) {
      console.log(error);
      return sendError(res, 500, error);
    }
  });

  route.get("/product/:id", async (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Returns a single product from given id'
    const productId = req.params.id;
    if (!productId)
      return sendError(res, 400, "Product id not defined in request");
    try {
      const product = await Product.findById(productId);
      return res.status(200).json({ product: product });
    } catch (error) {
      return sendError(res, 500, "Could not get product with given id");
    }
  });

  //AdminRouter.use(validateAdmin);
  route.post("/product", validateAdmin, async (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Creates a new product'
    /*	#swagger.parameters['obj'] = {
              in: 'body',
              description: 'Product object',
              required: true,
              schema: { $ref: "#/definitions/Product" }
      } */
    const product = req.body;

    try {
      const productExists = await Product.findOne({ name: product.name });
      if (productExists)
        return sendError(res, 400, "A product with this name already exists");

      const newProduct = new Product({
        name: product.name,
        price: product.price,
        description: product.description,
        shortDescription: product.shortDescription,
        imageUrl: product.imageUrl,
        stockQuantity: product.stockQuantity,
      });
      const result = await newProduct.save();
      return res.status(201).json({
        product: result._doc,
        message: "Product successfully created",
      });
    } catch (error) {
      return sendError(res, 500, error);
    }
  });

  route.put("/product/:id", validateAdmin, async (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Updated product from given id'
    /*	#swagger.parameters['obj'] = {
              in: 'body',
              description: 'Product object',
              required: true,
              schema: { $ref: "#/definitions/Product" }
      } */
      
    const productId = req.params.id;
    const updatedValues = req.body;
    if (!productId)
      return sendError(res, 400, "Product id not defined in request");
    try {
      const product = await Product.findById(productId);
      product.name = updatedValues.name;
      product.price = updatedValues.price;
      product.description = updatedValues.description;
      product.shortDescription = updatedValues.shortDescription;
      product.imageUrl = updatedValues.imageUrl;
      product.stockQuantity = updatedValues.stockQuantity;

      await product.save();
      return res.status(200).json({ message: "Product successfully updated" });
    } catch (error) {
      return sendError(res, 500, "Could not get product with given id");
    }
  });

  route.delete("/product/:id", validateAdmin, async (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Deletes product from given id'

    const productId = req.params.id;
    try {
      const deletedProduct = await Product.deleteOne({ _id: productId });
      return res.status(200).json({
        message: "Product succesfully deleted",
        //product: deletedProduct,
      });
    } catch (error) {
      return sendError(res, 500, "Could not find a product from given id");
    }
  });
};