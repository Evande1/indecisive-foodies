const express = require('express')
const MealController = require('../controllers/Meal')
const router = express.Router();

router.get('/', MealController.findAll);
router.get('/getbreakfast', MealController.getRandomMealBreakfast);
router.get('/getlunch', MealController.getRandomMealLunch);
router.get('/getdinner', MealController.getRandomMealDinner);
router.get('/getsnack', MealController.getRandomMealSnack);
router.get('/breakfast', MealController.getAllBreakfast);
router.get('/lunch', MealController.getAllLunch);
router.get('/dinner', MealController.getAllDinner);
router.get('/snacks', MealController.getAllSnacks);
router.get('/:id', MealController.findOne);
router.post('/', MealController.create);
router.patch('/:id', MealController.update);
router.delete('/:id', MealController.destroy);

module.exports = router