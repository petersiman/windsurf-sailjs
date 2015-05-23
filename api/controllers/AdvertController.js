/**
 * AdvertController
 *
 * @description :: Server-side logic for managing adverts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    new: function(req,res){
        res.view();
    },
    show: function (req, res) {
		console.log("Looking for adverts...");
        Advert.find(function(err, adverts) {
          console.log(JSON.stringify(adverts));
          res.view({
            adverts: adverts
          });
        });
    },
    create: function (req, res, next) {
		Advert.create(req.params.all(),function advertCreated(err, advert){
            console.log('Creating new advert ...');
            if (err) {
                console.log('Validation error: ');
                console.log(err);
                
                req.session.flash = {
                    err: err
                }
                
                return res.redirect('/advert/new')
            }
            console.log(JSON.stringify(advert));
            res.redirect('/advert/show');
        });
    },
    edit: function (req, res) {
		return res.send("Hi there!");
    },
    delete: function (req, res) {
		return res.send("Hi there!");
    }
	
};

