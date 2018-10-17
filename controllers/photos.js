const express = require('express');
const router  = express.Router();
//Models communicating to the db
const Photo = require('../models/photos');
const Photographer  = require('../models/photographers');


//GET - index
router.get('/', (req, res) => {
	Photo.find({}, (err, foundPhotos) => {
		res.render('./photos/index.ejs', {
			photos: foundPhotos
		});
	});
});
//GET - new
router.get('/new', (req, res) => {
	Photographer.find({}, (err, allPhotographers) => {
		res.render('./photos/new.ejs', {
			photographers: allPhotographers
		});
	});
});

//GET - show
router.get('/:id', (req, res) => {
	Photo.findById(req.params.id, (err, foundPhoto) => {
		Photographer.findOne({'photos._id': req.params.id}, (err, foundPhotographer) => {
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
	Photo.findById(req.params.id, (err, foundPhoto) => {
		Photographer.find({}, (err, allPhotographers) => {
			Photographer.findOne({'photos._id': req.params.id}, (err, foundPhotoPhotopgraher) => {
				res.render('photos/edit.ejs',{
					photo: foundPhoto,
					photographers: allPhotographers,
					photoPhotographer: foundPhotoPhotopgraher
				});
			});
		});
	});
});
//
//POST - create
router.post('/', (req, res) => {
	Photographer.findById(req.body.photographerId, (err, foundPhotographer) => {
		Photo.create(req.body, (err, createdPhoto) => {
			foundPhotographer.photos.push(createdPhoto)
			foundPhotographer.save((err, data) => {
				res.redirect('/photos')
			});	
		});
	});
});
//DELETE - destroy
router.delete('/:id', (req, res) => {
	Photo.findByIdAndRemove(req.params.id, (err, deletePhoto) => {
		Photographer.findOne({'photos._id': req.params.id}, (err, foundPhotographer) => {
			foundPhotographer.photos.id(req.params.id).remove();
			foundPhotographer.save((err, data) => {
				res.direct('/photos')
			});
		});	
	});
});
//PUT - update
router.put('/:id', (req, res) => {
	Photo.findByIdAndUpdate(req.params.id, req.body, (err, updatePhoto) => {
		res.redirect('/photos')
	});
});



module.exports = router;