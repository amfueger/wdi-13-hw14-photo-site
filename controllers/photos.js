const express = require('express');
const router  = express.Router();
//Models communicating to the db
const Photo = require('../models/photos');
const Photographer  = require('../models/photographers');


//GET - index
router.get('/', (req, res) => {
	
});
//GET - new
router.get('/new', (req, res) => {
	
});

//GET - show
router.get('/:id', (req, res) => {
	
});

//GET - edit
router.get('/:id/edit', (req, res) => {
	
});

//POST - create
router.post('/', (req, res) => {
	
});
//DELETE - destroy
router.delete('/:id', (req, res) => {
	
});
//PUT - update
router.put('/:id', (req, res) => {
	
});



module.exports = router;