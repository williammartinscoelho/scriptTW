//$.getScript('https://code.jquery.com/jquery-3.3.1.js');

$($('#plunder_list tbody tr th')[6]).empty();

$($('#plunder_list tbody tr th')[6]).append('<label>Somente:</label>');
$($('#plunder_list tbody tr th')[6]).append('<input type="number" id="lvMuralha1" min="0" max="15" step="1">');

$("#lvMuralha1").keyup(function () {
    let val = $('#lvMuralha1').val();

    if (val != "") {
        esconderLinhas1(val);
    } else {
        mostrarLinhas();
    }
});

$($('#plunder_list tbody tr th')[6]).append('<br><label>Menos:</label>');
$($('#plunder_list tbody tr th')[6]).append('<input type="number" id="lvMuralha2" min="0" max="15" step="1">');

$("#lvMuralha2").keyup(function () {
    let val = $('#lvMuralha2').val();

    if (val != "") {
        esconderLinhas2(val);
    } else {
        mostrarLinhas();
    }
});

function esconderLinhas1(muralha = 0) {
    let lista = $('#plunder_list tr');

    $(lista).each(function (i) {
        let val = $($(this).find('td')[6]).html();

        if (val != muralha) {
            //$($(this).find('td')[6]).css('background-color', 'green');
            //$($(this).find('td')[6]).css('color', 'white');

            $($(this).find('td')).css('display', 'none');
        } else {
            $($(this).find('td')).css('display', '');
        }
    });
}

function esconderLinhas1(muralha = 0) {
    let lista = $('#plunder_list tr');

    $(lista).each(function (i) {
        let val = $($(this).find('td')[6]).html();

        if (val == muralha) {
            //$($(this).find('td')[6]).css('background-color', 'green');
            //$($(this).find('td')[6]).css('color', 'white');

            $($(this).find('td')).css('display', 'none');
        } else {
            $($(this).find('td')).css('display', '');
        }
    });
}

function mostrarLinhas() {
    let lista = $('#plunder_list tr');

    $(lista).each(function (i) {
        $($(this).find('td')).css('display', '');
    });
}