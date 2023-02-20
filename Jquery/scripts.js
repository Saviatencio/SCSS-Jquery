$(document).ready(function() {

    $('button').click(function(){
        $('.modal-popup').css('transform','scale(0)');
    });
  
    $('#open').click(function(){
        $('.modal-popup').css('transform','scale(1)');
    });

});