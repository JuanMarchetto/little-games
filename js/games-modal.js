function gamesModal(game) {
	$("body").append("<div><iframe src='" + game + "'></iframe></div>");
}

$( ".game" ).click(function(e) {
	gamesModal(e.target.id);
});