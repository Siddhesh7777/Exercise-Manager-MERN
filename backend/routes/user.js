const router=require('express').Router();
let exercise=require('../models/exercise.model');



router.route('/').get((req,res)=>{

    exercise.find()
    .then(exercise=>res.json(exercises))
    .catch(err=>res.status(400).json('error:'+err));
});
router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const description=req.body.description;
    const duration=number(req.body.duration)
    const date=Date.parse(req.body.Date);

    const newExercise=new Exercise({
        username,description,duration,date
    })
    newExercise.save()
    .then(()=>res.json('Exercise added'))
    .catch(()=>res.status(400).json('Erroe'+err));
})
module.exports=router;