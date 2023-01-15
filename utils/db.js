const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const uri = 'mongodb+srv://muhammed:hamza@cluster0.d9eqgte.mongodb.net/?retryWrites=true&w=majority'
const connectDB = async () => {
    const connection = mongoose.connect(uri,{
        useNewUrlParser:true,
    });
    console.log(`Mongo DB Connected}`.cyan.bold.underline)
}

module.exports = connectDB;