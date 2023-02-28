const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port =  35000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,strictQuery: false}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const exerciseRouter=require('./routes/exercises');
const userRouter=require('./routes/user');

app.use('/exercises',exerciseRouter);
app.use('/users',userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});