const { db } = require("../db");

const createProduct = (
  { title, price, category, description, image, stock },
  callback
) => {
  db.run(
    "INSERT INTO products (title, price, category, description, image, stock) VALUES (?, ?, ?, ?, ?, ?)",
    [title, price, category, description, image, stock],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, this.lastID);
    }
  );
};

const getAllProducts = (callback) => {
  db.all("SELECT * FROM products", (err, products) => {
    if (err) {
      return callback(err);
    }
    callback(null, products);
  });
};

const getProduct = (id, callback) => {
  db.get("SELECT * FROM products WHERE id = ?", [id], (err, product) => {
    if (err) {
      callback(err);
    }
    callback(null, product);
  });
};

const deleteProduct = (id, callback) => {
  db.run("DELETE FROM products WHERE id = ? ", [id], (err, product) => {
    if (err) {
      return callback(err);
    }
    callback(null, "[SUCCESS]: Producto eliminado exitosamente");
  });
};

const updateProduct = (
  id,
  { title, price, category, description, image, stock },
  callback
) => {
  db.run(
    "UPDATE products SET title = ?, price = ?, category = ?, description = ?, image = ?, stock = ? WHERE id = ? ",
    [title, price, category, description, image, stock, id],
    (err) => {
      if (err) {
        return callback(err);
      }
      db.get(
        "SELECT * FROM products WHERE id = ?",
        [id],
        (err, updatedProduct) => {
          if (err) {
            return callback(err, null);
          }
          callback(null, updatedProduct);
        }
      );
    }
  );
};

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
