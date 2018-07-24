var piano = Synth.createInstrument('piano');
$(".tecla").click(function(e){
    piano.play(($(e.target).attr("key")), ($(e.target).attr("oct")), 2);
    $("body").css("background-color", ($( this ).css( "background-color" )));
});
