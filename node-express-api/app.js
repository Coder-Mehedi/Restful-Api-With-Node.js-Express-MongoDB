const express = require('express');
const mongoose = require('mongoose')
const app = express();
const postsRoute = require('./routes/posts')
require('dotenv/config')
const cors = require('cors')
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())


// connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('db connected')
)

app.use('/posts', postsRoute);

app.listen(3000, () => console.log('server started'))