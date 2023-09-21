const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose
    .connect("mongodb+srv://pranjal:Pranjal%40123@cluster0.dcvydli.mongodb.net/test?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((err) => {
        console.log("Error connecting to the database:", err);
    });
