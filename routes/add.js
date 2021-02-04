var data = require("../data.json");
var newFriend = require("../newFriend.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	newFriend.name = request.query.name;
	newFriend.description = request.query.description;
	data.friends.push(newFriend);
	console.log(data);
	response.render('index', data);
 }