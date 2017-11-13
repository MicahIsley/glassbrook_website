var Email_list = require("../models")["EmailList"];

module.exports = function(app) {

	app.post("/api/new/email", function(req, res) {
		Email_list.create({
			email: req.body.email
		});
	});
};