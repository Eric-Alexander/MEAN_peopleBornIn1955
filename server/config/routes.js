var People=require('./../controllers/peoples.js');

module.exports=function(app){
	console.log('^><^><^><^><^>Routing requests online, sir<^><^><^><^><^><^');
	app.get('/people', People.index);

	app.post('/people/new', People.create);

	app.delete('/people/:_id', function(req, res){
		console.log(req.params._id+"ROUTES PERSON ID");
		People.delete(req, res);
	});
}