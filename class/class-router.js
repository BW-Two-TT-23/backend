const express = require('express');
const router = express.Router();
const classDb = require('../models/class-model');


router.get('/', (req, res) => {
    classDb.find()
        .then( posts =>{
            res.status(200).json(posts);
            console.log(posts);
        })
        .catch( err=>{
            res.status(500).json(err);
            console.log(err);
        })
})

//GET class list by type

router.get('/:type', (req, res)=>{
    const { type } = req.params;

    classDb.findByType(type)
        .then( posts =>{
            res.status(200).json(posts);
            console.log(posts);
        })
        .catch( err=>{
            res.status(500).json(err);
            console.log(err);
        })
})

router.post('/:id', (req, res) => {
    const { id } = req.params;

    classDb.find()
        .then( posts =>{
            res.status(200).json(posts);
            console.log(posts);
        })
        .catch( err=>{
            res.status(500).json( {message: "something went wrong adding your classs"});
            console.log(err);
        })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;

    classDb.find()
        .then( posts =>{
            res.status(200).json(posts);
            console.log(posts);
        })
        .catch( err=>{
            res.status(500).json(err);
            console.log(err);
        })
})

  router.delete('/:id', async (req, res) => {
    try {
        const classe = await classDb.removeClass(req.params.id);
      res.status(200).json(classe);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error updating the dang cohorts',
      });
    }
  });

module.exports = router;