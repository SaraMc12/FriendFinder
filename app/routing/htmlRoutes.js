var paths= require("paths");
module.export = function(app){
    app.get("/", function(req, res){
        res.sendFile(paths.join(_dirname, "/..public/mainPage.html"));
    });

    app.get("/survery", function(req, res){
res.sendFile(path.join(__dirname, "/../public/survery.html"));
    });

};