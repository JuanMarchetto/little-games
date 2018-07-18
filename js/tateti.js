$(function() { 
  $( "div" ).click(function(e) {
		if($(e.target).hasClass('available')) {
			$(e.target).removeClass('available');
			$(e.target).addClass('played cruz');
			//play();
			if (((($( "body" ).find('.played')).length)>4) && (($("#a1").hasClass('played')) || ($("#b2").hasClass('played')) || ($("#c3").hasClass('played'))))  {
				console.log(isEnd());

			}
		}
	});
});



function isEnd() {
return (($("#a1").hasClass('cruz')) && ($("#a2").hasClass('cruz')) && ($("#a3").hasClass('cruz'))) || (($("#b1").hasClass('cruz')) && ($("#b2").hasClass('cruz')) && ($("#b3").hasClass('cruz'))) ||(($("#c1").hasClass('cruz')) && ($("#c2").hasClass('cruz')) && ($("#c3").hasClass('cruz'))) ||(($("#a1").hasClass('cruz')) && ($("#a2").hasClass('cruz')) && ($("#a3").hasClass('cruz')));
}