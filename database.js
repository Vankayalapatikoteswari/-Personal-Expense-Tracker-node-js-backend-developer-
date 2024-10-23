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
‎models/transaction.js
+39
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,39 @@
const db = require('../db/database');
class Transaction {
    static create(data, callback) {
        const { type, category, amount, date, description } = data;
        db.run(`INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)`,
            [type, category, amount, date, description], function(err) {
                callback(err, this.lastID);
            });
    }
    static findAll(callback) {
        db.all(`SELECT * FROM transactions`, [], (err, rows) => {
            callback(err, rows);
        });
    }
    static findById(id, callback) {
        db.get(`SELECT * FROM transactions WHERE id = ?`, [id], (err, row) => {
            callback(err, row);
        });
    }
    static updateById(id, data, callback) {
        const { type, category, amount, date, description } = data;
        db.run(`UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?`,
            [type, category, amount, date, description, id], (err) => {
                callback(err);
            });
    }
    static deleteById(id, callback) {
        db.run(`DELETE FROM transactions WHERE id = ?`, [id], (err) => {
            callback(err);
        });
    }
}
module.exports = Transaction;
