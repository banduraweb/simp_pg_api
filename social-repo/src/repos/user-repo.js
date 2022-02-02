const pool = require('../pool');

class UserRepo {
    static async find() {
        const {rows} = await pool.query('SELECT * FROM users;');
        return rows
    }

    static async findById(id) {
        const {rows} = await pool.query(`
SELECT * FROM users WHERE id = $1;
`, [id]);
        return rows[0];
    }

    static async insert(username, bio) {
      const {rows} =  await pool.query('' +
            'INSERT INTO users (username, bio) VALUES($1, $2) RETURNING *;', [username, bio]);
      return rows[0];
    }

    static async update() {
    }

    static async delete() {
    }
}

module.exports = UserRepo;