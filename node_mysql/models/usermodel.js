const db = require('../config/db');

// Create a new user
const createUser = (user, callback) => {
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [user.name, user.email], callback);
};

// Get all users
const getUsers = (callback) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, callback);
};

// Get user by ID
const getUserById = (id, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], callback);
};

// Update user by ID
const updateUser = (id, user, callback) => {
    const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(sql, [user.name, user.email, id], callback);
};

// Delete user by ID
const deleteUser = (id, callback) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
