const express = require('express');
const router = express.Router();

// Route: Get User by ID
router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`<h1>User Profile</h1><p>Viewing user with ID: ${userId}</p>`);
});

// Route: Get All Users
router.get('/', (req, res) => {
    res.send('<h1>All Users</h1><p>List of all users...</p>');
});

module.exports = router;
