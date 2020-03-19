const router = require('express').Router();
const MahasiswaController = require('../controller/mahasiswa');

router.get('/', MahasiswaController.show);
router.post('/', MahasiswaController.create);
router.get('/:id', MahasiswaController.store);
router.put('/:id', MahasiswaController.update);
router.delete('/:id', MahasiswaController.delete);

module.exports = router;