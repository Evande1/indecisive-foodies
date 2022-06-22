const MealModel = require('../models/models');

//create and save meals
exports.create = async (req, res) => {
  if (!req.body.meal && !req.body.category) {
    res.status(400).send({ message: 'content cannot be empty!' });
  }
  // else create the meal
  const meal = new MealModel({
    meal: req.body.meal,
    category: req.body.category,
  });

  await meal
    .save()
    .then((data) => {
      res.send({
        message: 'meal created successfully',
        meal: data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || 'some error occured while creating meal',
      });
    });
};

// Retrieve all mealss from the database.
exports.findAll = async (req, res) => {
  try {
    const meal = await MealModel.find();
    res.status(200).json(meal);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Find a single Meal with an id
exports.findOne = async (req, res) => {
  try {
    const meal = await MealModel.findById(req.params.id);
    res.status(200).json(meal);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getRandomMealBreakfast = async (req, res) => {
  try {
    const allMeals = await MealModel.find({category : "BREAKFAST"});
    const meal = allMeals[Math.floor(Math.random()*allMeals.length)];
    res.status(200).json(meal);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getRandomMealLunch = async (req, res) => {
  try {
    const allMeals = await MealModel.find({category : "LUNCH"});
    const meal = allMeals[Math.floor(Math.random()*allMeals.length)];
    res.status(200).json(meal);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getRandomMealDinner = async (req, res) => {
  try {
    const allMeals = await MealModel.find({category : "DINNER"});
    const meal = allMeals[Math.floor(Math.random()*allMeals.length)];
    res.status(200).json(meal);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getRandomMealSnack = async (req, res) => {
  try {
    const allMeals = await MealModel.find({category : "SNACKS"});
    const meal = allMeals[Math.floor(Math.random()*allMeals.length)];
    res.status(200).json(meal);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getAllBreakfast = async (req, res) => {
  try {
    const allMeals = await MealModel.find({category : "BREAKFAST"});
    res.status(200).json(allMeals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getAllLunch = async (req, res) => {
  try {
    const allMeals = await MealModel.find({category : "LUNCH"});
    res.status(200).json(allMeals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getAllDinner = async (req, res) => {
  try {
    const allMeals = await MealModel.find({category : "DINNER"});
    res.status(200).json(allMeals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getAllSnacks = async (req, res) => {
  try {
    const allMeals = await MealModel.find({category : "SNACKS"});
    res.status(200).json(allMeals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// Update a meal by the id in the request
exports.update = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }

  const id = req.params.id;

  await MealModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Meal not found.`,
        });
      } else {
        res.send({ message: 'Meal updated successfully.' });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

// Delete a meal with the specified id in the request
exports.destroy = async (req, res) => {
  await MealModel.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Meal not found.`,
        });
      } else {
        res.send({
          message: 'Meal deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
