const mongoose = require('mongoose');
const mongoUrl = "mongodb://127.0.0.1:27017/mahasiswa";

mongoose.connect(mongoUrl);
mongoose.Promise = global.Promise;

const mongodb = mongoose.connection;
mongodb.on("error", console.error.bind(console, "koneksi gagal"));

module.exports = mongodb;