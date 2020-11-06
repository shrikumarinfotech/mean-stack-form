// import body-parser
const bodyParser = require('body-parser');

// import mongoose model for submissions
const Submissions = require('../models/submissionModel');

// export controller function
module.exports = function(app){
    // use body-parser
    // create application/json parser
    const jsonParser = bodyParser.json();
    // create application/x-www-form-urlencoded parser
    const urlencodedParser = bodyParser.urlencoded({extended: true});

    // use GET method to retrieve data
    app.get('/api/submission/:id', urlencodedParser, function(req, res){
        if(req.params.id){
            Submissions.findById(req.params.id, function(err, data){
                if(err) throw err;
                res.send(data);
            });
        };
    });

    // use POST method to save data
    app.post('/api/submission', jsonParser, function(req, res){
        // create submission data
        const newFormData = Submissions({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            address: req.body.address,
            country: req.body.country,
            zip: req.body.zip,
            phone: req.body.phone,
            comments: req.body.comments,
            createdDate: Date.now(),
            subscribed: req.body.subscribed
        });

        // save submission data
        newFormData.save(function(err, data){
            if(err) throw err;
            res.send(`New Submission Saved: ${data}`);
        });
    });

    // use POST to update data
    app.post('/api/submission/:id', jsonParser, function(req, res){
        if(req.body.id){
            Submissions.findByIdAndUpdate(req.body.id, {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                address: req.body.address,
                country: req.body.country,
                zip: req.body.zip,
                phone: req.body.phone,
                comments: req.body.comments,
                updatedDate: Date.now(),
                subscribed: req.body.subscribed
            }, function(err, data){
                if(err) throw err;
                res.send(`Submission updated: ${data}`);
            });
        }
    });

    // use DELETE method to delete a submission
    app.delete('/api/submission/:id', urlencodedParser, function(req, res){
        if(req.params.id){
            Submissions.findByIdAndRemove(req.params.id, function(err, data){
                if(err) throw err;
                res.send(`Submission deleted: ${data}`);
            });
        }
    });
}