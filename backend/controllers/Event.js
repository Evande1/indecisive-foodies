const EventModel = require('../models/EventModel');
const MealModel = require('../models/MealModel');

exports.create = async (req, res) => {
  if (!req.body.title && !req.body.start && !req.body.end) {
    return res.status(400).send({ message: 'content cannot be empty!' });
  }

  const start = new Date(req.body.start)
  const end = new Date(req.body.end)

  // else create the meal
  const event = new EventModel({
    title : req.body.title,
    start: start,
    end: end,
  });

  await event
    .save()
    .then((data) => {
      res.send({
        message: 'event created successfully',
        event: data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || 'some error occured while creating meal',
      });
    });
};



exports.findAll = async (req, res) => {
  try {
    const events = await EventModel.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deleteAll = async (req, res) => {
    try{
        for(var i = 0 ; i < 3; i++){
        const today = new Date(Date.now());
        today.setHours(0,0,0,0);
            const test = await EventModel.deleteMany({start: {
                $gte: today,
            }});
                console.log(test)

        }
    } catch(error) {
    console.log('eorr')
    }
}

exports.schedule = async (req, res) => {
   const allBreakfast = await MealModel.find({category : "BREAKFAST"});
   const allLunch = await MealModel.find({category : "LUNCH"});
   const allDinner = await MealModel.find({category : "DINNER"});

   const eventArr = [];
   for(var i = 0 ; i < 3; i++){
      const breakfast = allBreakfast[Math.floor(Math.random()*allBreakfast.length)];
      const lunch = allLunch[Math.floor(Math.random()*allLunch.length)];
      const dinner = allDinner[Math.floor(Math.random()*allDinner.length)];

      const dateObj = new Date();
      const date = dateObj.setDate(dateObj.getDate() + i);
      eventArr.push({
        title: breakfast.meal,
        start: date,
        end: date,
      })
      eventArr.push({
          title: lunch.meal,
          start: date,
          end: date
      })
      eventArr.push({
          title: dinner.meal,
          start: date,
          end: date
      })
   }

   EventModel.insertMany(eventArr)
    .then(function(){
              res.send({
                message: 'event created successfully',
              });
    }).catch(function(error){
              res.status(500).send({
                message: error.message || 'some error occured while creating event',
              });     // Failure
    });
};
