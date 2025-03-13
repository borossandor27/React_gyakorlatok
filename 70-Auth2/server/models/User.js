import db from '../config/db.js';

class User {
  static async create(username, password) {
    const [result] = await db.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, password]
    );
    return result;
  }

  static async findByUsername(username) {
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );
    return rows[0];
  }

  static async deleteById(userid) {
    const [result] = await db.execute(
      'DELETE FROM users WHERE userid = ?',
      [userid]
    );
    return result;
  }
}

export default User;