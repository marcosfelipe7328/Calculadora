$(document).ready(function() {
    let anulado = true;
    var n1;
    var n2;
    var operador;
    $('.numero').on('click', function() {
        if ($('#resultado').text() == '0' || n1 != null) {
            $('#resultado').text($(this).text()); 
        }
        else {
            $('#resultado').append($(this).text());
        }
    });

    $('#ac').on('click', function() {
        $('#resultado').text('0');
        n1 = 0;
        n2 = 0;
    });

    $('#pos-neg').on('click', function() {
        $('#resultado').text((Number($('#resultado').text() * -1)).toString());
    });

    $('.operador').on('click', function() {
        n1 = Number($('#resultado').text());
        operador = $(this).attr('id');  
    })

    $('#igual').on('click', function() {
        n2 = Number($('#resultado').text());
        calcula();
    });

    function calcula() {
        switch (operador) {
            case 'mais':
                soma();
                break;
            case 'menos':
                subtrai();
                break;
            case 'multiplicacao':
                multiplica();
                break;
            case 'divisao':
                divide();
                break;
            default:
                break;
        }
    }

    function soma() {
        var resultado = n1 + n2;
        igual(resultado);
    }

    function subtrai() {
        var resultado = n1 - n2;
        igual(resultado);
    }

    function multiplica() {
        var resultado = n1 * n2;
        igual(resultado);
    }

    function divide() {
        var resultado = n1 / n2;
        igual(resultado);
    }

    function igual(r) {
        $('#resultado').text(r.toString());
    }
})