var friendsList = require("../data/friend");
console.log(friendsList)

module.exports = function(app){
	app.get("api/friends", function(req, res){
		res.json(friendsList);
	})

// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
	console.log("post api friends: ", req.body)
	var newFriend = req.body;
	var userScore = 0;
	var total = 0;
	var match = {
		name: "",
		pic: "",
		scoreDif: 200
	}

	// Calculating totals 
	for (var i = 0; i < friendsList.length; i++) {
		total = 0;

		for (var j = 0; j < friendsList[i].preferences.length; j++) {
			total += Math.abs(friendsList[i].preferences[j] - newFriend.preferences[j]);

			if (total <= match.scoreDif) {
				match.name = friendsList[i].name,
				match.pic = friendsList[i].photo,
				match.scoreDif = total
			}
    	}
    }
	friendsList.push(newFriend);
	console.log(match);
    res.json(match);
  
});
}

