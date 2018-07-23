function gamesModal(game) {
	$("body").append("<div id='gamesModal'></div>");
  var url = game + "/index.html"
  $("#gamesModal").load(url);
}

$( ".game" ).click(function(e) {
	gamesModal(e.target.id);
});
