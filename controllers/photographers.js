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
			photographers: photographerFound
		});
	});
});

// //GET - edit
// router.get('/:id/edit', (req, res) => {
	
// });

// //POST - create
// router.post('/', (req, res) => {
	
// });
// //DELETE - destroy
// router.delete('/:id', (req, res) => {
	
// });
// //PUT - update
// router.put('/:id', (req, res) => {
	
// });



module.exports = router;
