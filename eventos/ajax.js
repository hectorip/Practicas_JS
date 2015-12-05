$(function(){

    $('#boton_color').click(function(){

        $.get(
            "https://floating-badlands-2133.herokuapp.com/api/color",
            {'nombre': "Hector"},
            function(data){
                $('body').css('background-color', data.color);
            },
            'json'
            );
    });

});