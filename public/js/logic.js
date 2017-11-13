$("#directorTab").click(function() {
	$("#singerBioSection").hide();
	$("#directorBioSection").show();
	$("#directorTab").css({"background": "black", "color": "white", "box-shadow": "2px 0px 2px grey"});
	$("#singerTab").css({"background": "white", "color": "black", "box-shadow": "0px 0px 0px grey"});
});

$("#singerTab").click(function() {
	$("#directorBioSection").hide();
	$("#singerBioSection").show();
	$("#singerTab").css({"background": "black", "color": "white", "box-shadow": "2px 0px 2px grey"});
	$("#directorTab").css({"background": "white", "color": "black", "box-shadow": "0px 0px 0px grey"});
});

$(".singerPic").click(function() {
	$(".singerBio").hide();
	var singerId = ($(this).attr("class").split(' ')[1]);
	$("." +singerId).show();
});

$("#emailSubmit").click(function() {
	console.log("click");
	var email = $("#emailField").val().trim();
	var newEmail = {
		email: email
	};
	$.post("api/new/email", newEmail)
		.done(function(data) {
			$("#finishedSignUp").text("Registration Complete!");
			$("#emailField").val("");
		});
});