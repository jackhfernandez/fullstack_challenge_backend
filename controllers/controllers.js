const {
  createProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../models/models");

const create = (req, res) => {
  const { body } = req;
  createProduct(body, (error, id) => {
    if (error) {
      res.status(501).json(error);
    }
    res.status(201).json({ id });
  });
};

const getAll = (req, res) => {
  getAllProducts((error, products) => {
    if (error) {
      res.status(501).json(error);
    }
    res.status(201).json(products);
  });
};

const getById = (req, res) => {
  const { params } = req;
  getProduct(params.id, (error, product) => {
    if (error) {
      res.status(501).json(error);
    }
    res.status(201).json(product);
  });
};

const deleteById = (req, res) => {
  const { params } = req;
  deleteProduct(params.id, (error, deleteMessage) => {
    if (error) {
      res.status(501).json(error);
    }
    res.status(201).json(deleteMessage);
  });
};

const update = (req, res) => {
  const { body, params } = req;
  updateProduct(params.id, body, (error, product) => {
    if (error) {
      res.status(501).json(error);
    }
    res.status(201).json(product);
  });
};

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  update,
};
