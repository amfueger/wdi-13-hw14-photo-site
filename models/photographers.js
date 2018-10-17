const mongoose = require('mongoose');
const Photo = require('./photos');


const photographerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	photo: [Photo.schema]
});

module.exports = mongoose.model('Photographer', photographerSchema);