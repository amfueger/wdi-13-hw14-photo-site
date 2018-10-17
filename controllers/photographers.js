const express = require('express');
const router  = express.Router();
//Models communicating to the DB
const Photo = require('../models/photos');
const Photographer  = require('../models/photographers');


//GET - index
router.get('/', (req, res) => {
		Photographer.find({}, (err, foundPhotographers) => {
			res.render('photographers/index.ejs', {
				photographers: foundPhotographers
			});
		});
	});

// GET - new
router.get('/new', (req, res) => {
	res.render('./photographers/new.ejs')
});

//GET - show
router.get('/:id', (req, res) => {
	Photographer.findById(req.params.id, (err, photographerFound) => {
		res.render('photographers/show.ejs', {
			photographer: photographerFound
		});
	});
});

//GET - edit
router.get('/:id/edit', (req, res) => {
	Photographer.findById(req.params.id, (err, editPhotographer) => {
		res.render('photographers/edit.ejs', {
			photographer: editPhotographer
		});
	});
});

//POST - create
router.post('/', (req, res) => {
	Photographer.create(req.body, (err, createdPhotographer) => {
		if(err){
			console.log(err, "err");
		} else {
			res.redirect('/photographers')
		}
	});
});

//PUT - update
router.put('/:id', (req, res) => {
	Photographer.findByIdAndUpdate(req.params.id, req.body, (err, updatePhotographer) => {
		res.redirect('/photographers');
	});
});

//DELETE - destroy
router.delete('/:id', (req, res) => {
	Photographer.findOneAndDelete(req.params.id, (err, deletedPhotographer) => {
		//getting photo ids, for Article Collection
		const photoIds = [];
		for(let i = 0; i < deletedPhotographer.photos.length; i++){
			photoIds.push(deletedPhotographer.articles[i].id);
		}
		//photoIds Should be filled with ids of photos we're deleting
		console.log(photoIds, "photoIds");
		Photo.deleteMany({
			_id: {
				$in: photoIds
			}
		}, (err, data) => {
			res.redirect('/photographers')
		});
	});
});




module.exports = router;
