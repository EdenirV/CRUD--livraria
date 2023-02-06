import mongoose from "mongoose"

mongoose.connect("mongodb+srv://root:admin@alura.u4gsx4h.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;