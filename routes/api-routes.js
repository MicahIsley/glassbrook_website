var Email_list = require("../models")["EmailList"];
var expressValidator = require("express-validator");

module.exports = function(app) {

	app.post("/api/new/email", function(req, res) {
		req.checkBody("email", "The email you entered is invalid, please try again.").isEmail();
		const errors = req.validationErrors();
		if (errors) {
			console.log(`errors: ${JSON.stringify(errors)}`);
			res.redirect("/contact");
		} else {
			Email_list.create({
				email: req.body.email
			}).then(function(results) {
				res.json(results);
			});
		}
	});
};