var piano = Synth.createInstrument('piano');
$(".tecla").click(function(e){
    piano.play(($(e.target).attr("key")), ($(e.target).attr("oct")), ($(e.target).attr("time")));
    $(".bg-change").css("background-color", ($( this ).css( "background-color" )));
});
