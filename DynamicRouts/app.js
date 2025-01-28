const express = require('express');
const path = require('path');

const app = express();

// Import dynamic routes
const userRoutes = require('../DynamicRouts/Routs/users');
const postRoutes = require('../DynamicRouts/Routs/posts');

// Middleware for parsing requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Routes
app.use('/users', userRoutes); // Dynamic routes for users
app.use('/posts', postRoutes); // Dynamic routes for posts

// 404 Page for unmatched routes
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
