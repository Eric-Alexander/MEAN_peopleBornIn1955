var mongoose=require('mongoose');
var People = mongoose.model('People');

module.exports=(function(){
	return{
		index: function(req, res){
			console.log(":::::The backend controller has been asccessed, sir::::::::::");
			People.find({}, function(err, rio){
				if(err){
					console.log(err+"oooooooThere seems to be a back controller error, siroooooooo");
				}else{
					console.log("8888  Backend query selection was successful, sir  8888888888");
					res.json(rio);
					console.log(rio);
				}
			})
		},
		create: function(req,res){
			var people = new People(req.body)
			people.save(function(err,neo){
				if(err){
					console.log("}}}}}}}}} Data Creation: Unsuccessful, sir {{{{{{{{{{")
				}else{
					res.json(neo);
				}
			})
		},
		delete: function(req,res){
			console.log(req.params._id+"WHAT IS THIS");
			People.remove({_id: req.params._id}, function(err,bri){
				if(err){
					console.log(err+"--------there seems to be a deletion from database error, sir----------");
				}else{
					console.log("::::::::  Deletion from DATABASE SUCCESSFUL, sir :::::::::::")
					res.json(bri);
				}
			});
		}
	}
})();