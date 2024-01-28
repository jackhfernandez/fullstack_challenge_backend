const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("e-commerce");

const initDB = () => {
  db.run(
    "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, price INT, category TEXT, description TEXT, image TEXT, stock INT )"
  );
};

const closeDB = () => db.close();

module.exports = { initDB, closeDB, db };
