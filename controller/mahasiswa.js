const mahasiswaModel = require('../model/mahasiswa');

exports.show = (req, res) => {
    try {
        mahasiswaModel.find({}, (err, response) => {
            if (err) {
                return next(err);
            }
            res.send(response);
        });
    } catch (err) {
        res.status(404).json({
            "status": "ERROR",
            "message": err
        });
        res.status(500).json({
            "status": "ERROR",
            "message": err
        });
    }
}

exports.create = (req, res) => {
    try {
        const { nama, npm, kelas } = req.body;
        const mahasiswa = new mahasiswaModel({
            nama, npm, kelas
        });
        mahasiswa.save(err => {
            if (err) {
                return next(err);
            }
            res.json({
                "status": "OK",
                "message": "create success",
                "data": mahasiswa
            });
        });
    } catch (err) {
        res.status(404).json({
            "status": "ERROR",
            "message": err
        });
        res.status(500).json({
            "status": "ERROR",
            "message": err
        });
    }
}

exports.store = (req, res) => {
    try {
        const id = req.params.id;
        mahasiswaModel.findById(id, (err, resposne) => {
            if (err) {
                return next(err);
            }
            res.send(resposne);
        });
    } catch (err) {
        res.status(404).json({
            "status": "ERROR",
            "message": err
        });
        res.status(500).json({
            "status": "ERROR",
            "message": err
        });
    }
}

exports.update = (req, res) => {
    try {
        const id = req.params.id;
        const { nama, npm, kelas } = req.body;
        mahasiswaModel.findByIdAndUpdate(id, { nama, npm, kelas }, (err, response) => {
            if (err) {
                return next(err);
            }
            res.json({
                "status": "OK",
                "message": "update success",
            });
        });
    } catch (err) {
        res.status(404).json({
            "status": "ERROR",
            "message": err
        });
        res.status(500).json({
            "status": "ERROR",
            "message": err
        });
    }
}

exports.delete = (req, res) => {
    try {
        const id = req.params.id;
        mahasiswaModel.findByIdAndDelete(id, (err, response) => {
            if (err) {
                return next(err);
            }
            res.json({
                "status": "OK",
                "message": "delete success"
            });
        });
    } catch (err) {
        res.status(404).json({
            "status": "ERROR",
            "message": err
        });
        res.status(500).json({
            "status": "ERROR",
            "message": err
        });
    }
}