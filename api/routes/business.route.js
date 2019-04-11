const express = require('express');
const app = express();
const businessRoutes = express.Router();


//require business model in routes module
let Business = require('../models/Business');

//defined store route
businessRoutes.route('/add').post(function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let business = new Business(req.body);
    business.save()
        .then(business => {
            res.status(200).json({'business': 'Business added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

//defined get data (index or listing) route
businessRoutes.route('/').get(function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    Business.find(function (err, businesses) {
        if(err) console.log(err);
        else {
            res.json(businesses);
        }
    });
});

//defined edit route
businessRoutes.route('/edit/:id').get(function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let id = req.params.id;
    Business.findById(id, function(err, business){
        res.json(business);
    });
});

//defined update route
businessRoutes.route('/update/:id').post(function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let id = req.params.id;
    console.log(id);
    Business.findById(id, function(err, business) {
        console.log(business);
        if(!business) return new Error('Could not load document');
        else {
            business.person_name = req.body.person_name;
            business.business_name = req.body.business_name;
            business.business_gst_number = req.body.business_gst_number;

            business.save().then(business => {
                res.json('Update complete'); 
            })
            .catch( err => {
                res.status(400).send("unable to update the database");
            });
        }
    });
});

businessRoutes.route('/delete/:id').get(function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business) {
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;