const db = require('../db/database');

class Category {
    static create(data, callback) {
        const { name, type } = data;
        db.run(`INSERT INTO categories (name, type) VALUES (?, ?)`,
            [name, type], function(err) {
                callback(err, this.lastID);
            });
    }

    static findAll(callback) {
        db.all(`SELECT * FROM categories`, [], (err, rows) => {
            callback(err, rows);
        });
    }
}

module.exports = Category;
