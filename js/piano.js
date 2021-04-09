$(".tecla").click(function(e){
	var instrumento = Synth.createInstrument('piano');
	var time = 2;
    if (($(e.target).attr("time")) != undefined){
    	time = ($(e.target).attr("time"));
    }
    if (($(e.target).attr("instrumento")) != undefined){
    	instrumento = ($(e.target).attr("instrumento"));
    }
  instrumento.play(($(e.target).attr("key")), ($(e.target).attr("oct")), time);
  $(".bg-change").css("background-color", ($( this ).css( "background-color" )));
});
