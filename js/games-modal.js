function gamesModal(game) {
	$("body").append("<div id='gamesModal'></div>");
  $("#gamesModal").load(game + "/index.html");
}

$( ".game" ).click(function(e) {
	gamesModal(e.target.id);
});
