var friendsList = require("../data/friend");

module.exports = function(app){
	app.get("api/friend", function(req, res){
		res.json(friendsList);
	})

// Create New Characters - takes in JSON input
app.post("/api/friend", function(req, res) {
	var newFriend = req.body;
	var userScore = 0;
	var totalNum = 0;
	var friendMatch = {
		name: "",
		pic: "",
		scoreDif: 200
	}

	// Calculating totals 
	for (var i = 0; i < friendsList.length; i++) {
		total = 0;

		for (var j = 0; j < friendsList[i].preferences.length; j++) {
			total += Math.abs(friendsList[i].preferences[j] - newFriend.preferences[j]);

			if (total <= match.difference) {
				match.name = friendsList[i].name,
				match.pic = friendsList[i].photo,
				match.scoreDif = total
			}
    	}
    }
    friendList.push(newFriend);
    res.json(match);
    console.log(match);
});
}

