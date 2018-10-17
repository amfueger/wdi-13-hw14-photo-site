const express = require('express');
const router  = express.Router();
//Models communicating to the db
const Photo = require('../models/photos');
const Photographer  = require('../models/photographers');


//GET - index
router.get('/', (req, res) => {
	Photo.find({}, (err, foundPhoto) => {
		res.render('photos/index.ejs', {
			photos: foundPhoto
		});
	});
});
//GET - new
router.get('/new', (req, res) => {
	Photo.find({}, (err, allPhotographers) => {
		res.render('photos/new.ejs', {
			photographers: allPhotographers
		})
	})
});

//GET - show
router.get('/:id', (req, res) => {
	Photo.findById(req.params.id, (err, foundPhoto) => {
		Photographer.findOne({'photos._id': }, req.params.id, (err, foundPhotographer) => {
			console.log(foundPhotographer, "foundPhotographer");
			res.render('photos/show.ejs', {
				photo: foundPhoto,
				photographer: foundPhotographer
			});
		});
	});
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