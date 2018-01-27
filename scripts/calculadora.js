$(document).ready(function() {
    var opClicado = false;
    var n1;
    var n2;
    var operador;
    $('.numero').on('click', function() {
        if ($('#resultado').text() == '0') {
            $('#resultado').text($(this).text()); 
        }
        else if (opClicado) {
            $('#resultado').text($(this).text());
            opClicado = false;
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

    $('#virgula').on('click', function() {
        if (!$('#resultado').text().includes(',')) {
            $('#resultado').append(',');
        }
    });

    $('#porcentagem').on('click', function() {
        if (n1 != null) {
            $('#resultado').text((n1 * Number($('#resultado').text().replace(',', '.')) / 100).toString().replace('.', ','));
        }
        else {
            $('#resultado').text((Number($('#resultado').text().replace(',', '.')) / 100).toString().replace('.', ','));
        }
    });
    $('.operador').on('click', function() {
        n1 = Number($('#resultado').text().replace(',', '.'));
        operador = $(this).attr('id');  
        opClicado = true;
    })

    $('#igual').on('click', function() {
        if (n1 != 0) {
            n2 = Number($('#resultado').text().replace(',', '.'));
        }
        else {
            n1 = Number($('#resultado').text().replace(',', '.'));
        }
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
        r = r.toString().replace('.', ',');
        $('#resultado').text(r);
        n1 = 0;
    }
})