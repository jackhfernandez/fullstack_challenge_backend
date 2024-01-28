const router = require("express").Router();
const {
  create,
  getAll,
  getById,
  deleteById,
  update,
} = require("../controllers/controllers");

router.post("/product", create);

router.get("/product", getAll);

router.get("/product/:id", getById);

router.delete("/product/:id", deleteById);

router.put("/product/:id", update);

module.exports = router;
