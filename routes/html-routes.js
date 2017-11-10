var path = require("path");

module.exports = function(app) {

	app.get("/", function(req, res) {
		res.render("home");
	});

	app.get("/about", function(req, res) {
		res.render("about");
	});

	app.get("/concerts", function(req, res) {
		res.render("concerts");
	});

	app.get("/contact", function(req, res) {
		res.render("contact");
	});

	app.get("/donate", function(req, res) {
		res.render("donate");
	});

	app.get("/media", function(req, res) {
		res.render("media");
	});
};