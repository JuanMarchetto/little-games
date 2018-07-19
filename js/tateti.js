$(function() { 
  $( "div" ).click(function(e) {
  	var player = 'circulo';
		if($(e.target).hasClass('available')) {
			$(e.target).removeClass('available');
			$(e.target).addClass('played').addClass(player);
			isEndPosible(player);
			play();
		}
	});
});

function isEnd(player) {
return (($("#a1").hasClass(player)) && ($("#a2").hasClass(player)) && ($("#a3").hasClass(player))) || (($("#b1").hasClass(player)) && ($("#b2").hasClass(player)) && ($("#b3").hasClass(player))) ||(($("#c1").hasClass(player)) && ($("#c2").hasClass(player)) && ($("#c3").hasClass(player))) ||(($("#a1").hasClass(player)) && ($("#b1").hasClass(player)) && ($("#c1").hasClass(player)))||(($("#a2").hasClass(player)) && ($("#b2").hasClass(player)) && ($("#c2").hasClass(player)))||(($("#a3").hasClass(player)) && ($("#b3").hasClass(player)) && ($("#c3").hasClass(player)))||(($("#a1").hasClass(player)) && ($("#b2").hasClass(player)) && ($("#c3").hasClass(player)))||(($("#a3").hasClass(player)) && ($("#b2").hasClass(player)) && ($("#c1").hasClass(player)));
}

function play() {
 	var player = 'cruz';
	var available = ($( "body" ).find('.available'));
 	var selected = $(available[(Math.floor((Math.random() * available.length)))]);
	selected.removeClass('available');
	selected.addClass('played').addClass(player);
	isEndPosible(player);
}

function isEndPosible(player) {
	if (((($( "body" ).find('.played')).length)>4) && (($("#a1").hasClass('played')) || ($("#b2").hasClass('played')) || ($("#c3").hasClass('played'))))  {
		if (isEnd(player)){
			alert(player + " ganó!")
		}
	}
}