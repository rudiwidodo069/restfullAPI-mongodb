const express = require('express');
const mongodb = require('./config/mongodb');
const port = process.env.PORT || 5000;

mongodb
    .then(() => {
        const app = express();

        app.use(express.json());

        const routerMahasiswa = require('./router/mahasiswa');
        app.use('/api/mahasiswa', routerMahasiswa);

        app.listen(port, () => {
            console.log(`server is runing...`);
        });
    })
    .catch(() => {
        console.log("koneksi monggo db gagal");
    });
