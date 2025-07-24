const mongoose= require('mongoose');

async function connectDB() {
    try {
        
        await mongoose.connect("mongodb://127.0.0.1:27017/notesweb_proj")
        console.log(">>>>>>>>>>>>>>>>>>>>>>>Connected to the database successfully>>>>>>>>>>>>>>>>>>>>>>>");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
}

module.exports = connectDB;
