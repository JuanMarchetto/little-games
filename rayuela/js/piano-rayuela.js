var piano = Synth.createInstrument('piano');
$("#1").click(function(){
    piano.play('C', 4, 2);
    var color = ($( this ).css( "background-color" ))
    $(".modal").css("background-color", color);
});
$("#2").click(function(){
    piano.play('D', 4, 2);
        var color = ($( this ).css( "background-color" ))
    $(".modal").css("background-color", color);
});        
$("#3").click(function(){
    piano.play('E', 4, 2);
        var color = ($( this ).css( "background-color" ))
    $(".modal").css("background-color", color);
});  
$("#4").click(function(){
    piano.play('F', 4, 2);
        var color = ($( this ).css( "background-color" ))
    $(".modal").css("background-color", color);
});  
$("#5").click(function(){
    piano.play('G', 4, 2);
        var color = ($( this ).css( "background-color" ))
    $(".modal").css("background-color", color);
});  
$("#6").click(function(){
    piano.play('A', 4, 2);
        var color = ($( this ).css( "background-color" ))
    $(".modal").css("background-color", color);
});  
$("#7").click(function(){
    piano.play('B', 4, 2);
        var color = ($( this ).css( "background-color" ))
    $(".modal").css("background-color", color);
});  
$("#8").click(function(){
    piano.play('C', 5, 2);
        var color = ($( this ).css( "background-color" ))
    $(".modal").css("background-color", color);
}); 
$("#9").click(function(){
    piano.play('D', 5, 2);
        var color = ($( this ).css( "background-color" ))
    $(".modal").css("background-color", color);
}); 