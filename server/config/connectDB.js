const mongoose = require("mongoose") ;
require("dotenv").config() ;

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(console.log("DB Connection Successful"))
    .catch((err) => {
        console.log("DB Connection Issues") ;
        console.error(err) ;
        process.exit(1) ;
    }) ;
}
module.exports = connectDB; 