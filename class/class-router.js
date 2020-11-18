const server = require('../server')
const router = require('express').Router();
const Classes = require('../models/class-model');
const restricted = require('../auth/auth-middleware');



router.get('/', restricted, async (req, res) => {

    try {
      const classes = await Classes.findClasses()
      res.status(200).json( classes);
    } 
    catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error getting the classes',
      });
    }
  });

//get classes by category id
router.get('/categories/:categoryId', restricted, async (req, res) => {

    try {
      const classe = await Classes.findClassesByCatId(req.params.categoryId)
      

      res.status(200).json( classe);
    } 
    catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error getting the class',
      });
    }
  });

//get class by id
  router.get('/:classId', restricted, async (req, res) => {

    try {
      const classe = await Classes.findClassById(req.params.classId)
      

      res.status(200).json( classe);
    } 
    catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error getting the class',
      });
    }
  });

  router.post('/', restricted, async (req, res) => {

    try {
        console.log(req.body)
      const classe = await Classes.addClass(req.body)


      res.status(200).json(classe);
    } 
    catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error adding the class to the database',
      });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
    //   console.log(res)
    console.log('hello')
    const classe = await Classes.removeClass(req.params.id);
      res.status(200).json(classe);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error updating the dang cohorts',
      });
    }
  });

  router.put('/:id', async (req, res) => {
    try {
    
    console.log('hello')
    const classe = await Classes.updateClass(req.params.id, req.body);

      res.status(200).json(classe);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error updating the dang Class',
      });
    }
  });



  
  module.exports = router;




// const express = require('express');
// const router = express.Router();
// const classDb = require('../models/class-model');


// router.get('/', (req, res) => {
//     classDb.find()
//         .then( posts =>{
//             res.status(200).json(posts);
//             console.log(posts);
//         })
//         .catch( err=>{
//             res.status(500).json(err);
//             console.log(err);
//         })
// })

// //GET class list by type

// router.get('/:type', (req, res)=>{
//     const { type } = req.params;

//     classDb.findByType(type)
//         .then( posts =>{
//             res.status(200).json(posts);
//             console.log(posts);
//         })
//         .catch( err=>{
//             res.status(500).json(err);
//             console.log(err);
//         })
// })

// router.post('/:id', (req, res) => {
//     const { id } = req.params;

//     classDb.find()
//         .then( posts =>{
//             res.status(200).json(posts);
//             console.log(posts);
//         })
//         .catch( err=>{
//             res.status(500).json( {message: "something went wrong adding your classs"});
//             console.log(err);
//         })
// })

// router.put('/:id', (req, res) => {
//     const { id } = req.params;

//     classDb.find()
//         .then( posts =>{
//             res.status(200).json(posts);
//             console.log(posts);
//         })
//         .catch( err=>{
//             res.status(500).json(err);
//             console.log(err);
//         })
// })

//   router.delete('/:id', async (req, res) => {
//     try {
//         const classe = await classDb.removeClass(req.params.id);
//       res.status(200).json(classe);
//     } catch (error) {
//       // log error to server
//       console.log(error);
//       res.status(500).json({
//         message: 'Error updating the dang cohorts',
//       });
//     }
//   });

// module.exports = router;