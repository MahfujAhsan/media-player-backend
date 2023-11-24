const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 8000;
const { dbConnection } = require('./utils/dbConnect');
const videoRoutes = require('./routes/video.route');
const path = require('path');

// middlewares
app.use(cors({ credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json());

// routes
app.use('/api/video', videoRoutes);

// serve static file
app.use('/public', express.static(path.join(__dirname, 'public')))

const server = () => {
    dbConnection();
    app.listen(PORT, () => {
        console.log(`Server is listening to ${PORT}`);
    })
};

app.get('/', (req, res) => {
    res.send('server up and running!');
});

server();