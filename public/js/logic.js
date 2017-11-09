$("#directorTab").click(function() {
	$("#singerBioSection").hide();
	$("#directorBioSection").show();
});

$("#singerTab").click(function() {
	$("#directorBioSection").hide();
	$("#singerBioSection").show();
});

$(".singerPic").click(function() {
	$(".singerBio").hide();
	var singerId = ($(this).attr("class").split(' ')[1]);
	$("." +singerId).show();
});