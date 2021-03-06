const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();
const port = process.env.PORT || 5000

//DB config
const db = require('./config/keys').mongoURI;

// Connect to mongodb through mongoose
mongoose
    .connect(db)
    .then(() => {console.log("MongoDb Connected")})
    .catch(err => {console.log(err)});

app.get('/', (req, res) => {
    res.send("Hello! Whatsup doods")
})

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});