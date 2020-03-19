const mongoose = require('mongoose');
const schema = mongoose.Schema;

let mahasiswaModel = schema({
    nama: { type: String },
    npm: { type: String },
    kelas: { type: String }
});

module.exports = mongoose.model("mahasiswa", mahasiswaModel);