const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routs/userrouts');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
