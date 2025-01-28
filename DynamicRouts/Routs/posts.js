const express = require('express');
const router = express.Router();

// Route: Get Post by ID
router.get('/:postId', (req, res) => {
    const postId = req.params.postId;
    res.send(`<h1>Post Details</h1><p>Viewing post with ID: ${postId}</p>`);
});

// Route: Get All Posts
router.get('/', (req, res) => {
    res.send('<h1>All Posts</h1><p>List of all posts...</p>');
});

module.exports = router;
