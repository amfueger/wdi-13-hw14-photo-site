const express = require('express');
const router  = express.Router();
//Models communicating to the DB
const Photo = require('../models/photos');
const Photographer  = require('../models/photographers');


//GET - index
router.get('/', (req, res) => {
		Photographer.create(req.body, (err, createPhotographer) => {
			if (err){
				console.log(err, "err");
			} else {
				res.redirect('/photographers')
			}
		});
	});

// GET - new
router.get('/new', (req, res) => {
	res.render('./photographers/new.ejs', {
		photographer: Photographer
	});
});

// //GET - show
// router.get('/:id', (req, res) => {
	
// });

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
