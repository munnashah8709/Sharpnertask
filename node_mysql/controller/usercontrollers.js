const UserModel = require('../models/usermodel');

// Create User
exports.createUser = (req, res) => {
    const newUser = req.body;
    UserModel.createUser(newUser, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: 'User created', id: results.insertId });
    });
};

// Get All Users
exports.getUsers = (req, res) => {
    UserModel.getUsers((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

// Get User by ID
exports.getUserById = (req, res) => {
    const userId = req.params.id;
    UserModel.getUserById(userId, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send({ message: 'User not found' });
        res.status(200).json(results[0]);
    });
};

// Update User
exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    UserModel.updateUser(userId, updatedUser, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: 'User updated' });
    });
};

// Delete User
exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    UserModel.deleteUser(userId, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: 'User deleted' });
    });
};
