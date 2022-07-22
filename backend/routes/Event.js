const express = require('express')
const EventController = require('../controllers/Event')
const router = express.Router();


router.post('/', EventController.create);
// router.delete('/:id', EventController.destroy);
router.get('/', EventController.findAll);
router.delete('/schedule', EventController.deleteAll);
router.get('/schedule', EventController.schedule);

module.exports = router