//Import Bio Model
Bio = require('./bioModel');

//For index
exports.index = function (req, res) {
    Bio.get(function (err, bio) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Bio Successfully!",
            data: bio       
        });
    });
};

//For creating new bio
exports.add = function (req, res) {
    var bio = new Bio();
    bio.name = req.body.name? req.body.name: bio.name;
    bio.games = req.body.games;
    bio.fg = req.body.fg;
    bio.threept = req.body.threept;
    bio.ft = req.body.ft;
    bio.assist = req.body.assist;
    bio.steal = req.body.steal;
    bio.rebound = req.body.rebound;
    bio.avepoints = req.body.avepoints;	

    //Save and check error
    bio.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "New Bio Added!",
            data: bio
        });
    });
};

// View Bio
exports.view = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        res.json({
            message: 'Bio Details',
            data: bio
        });
    });
};

// Update Bio
exports.update = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        bio.name = req.body.name ? req.body.name : bio.name;
		bio.games = req.body.games;
		bio.fg = req.body.fg;
		bio.threept = req.body.threept;
		bio.ft = req.body.ft;
		bio.assist = req.body.assist;
		bio.steal = req.body.steal;
		bio.rebound = req.body.rebound;
		bio.avepoints = req.body.avepoints;	

        //save and check errors
        bio.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Bio Updated Successfully",
                data: bio
            });
        });
    });
};

// Delete Bio
exports.delete = function (req, res) {
    Bio.deleteOne({
        _id: req.params.bio_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Bio Deleted'
        });
    });
};