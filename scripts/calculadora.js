$(document).ready(function() {
    let anulado = true;
    $('.numero').on('click', function(e) {
        if (anulado) {
            $('#resultado').text($(this).text());
            if ($('#resultado').text() != '0') {
               anulado = false;  
            }  
        }
        else {
            $('#resultado').append($(this).text());
        } 
    });

    $('#ac').on('click', function() {
        if (!anulado) {
            anulado = true;
            $('#resultado').text('0');
        }
    });
})