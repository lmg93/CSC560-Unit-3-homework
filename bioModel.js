var mongoose = require('mongoose');

//schema
var bioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    games: {
        type: String,
        required: true
    },
    fg: {
        type: String,
        required: true
    },
    threept: {
        type: String,
        required: true
    },
	ft: {
		type: String,
		required: true
    },
	assist: {
		type: String,
		required: true
    },
	steal: {
		type: String,
		required: true
    },
	rebound: {
		type: String,
		required: true
    },
	avepoints: {
		type: String,
		required: true
    },	
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Bio Model
var Bio = module.exports = mongoose.model('bio', bioSchema);

module.exports.get = function (callback, limit) {
   Bio.find(callback).limit(limit); 
}