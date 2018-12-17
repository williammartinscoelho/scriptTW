//$.getScript('https://code.jquery.com/jquery-3.3.1.js');


$($('#plunder_list tbody tr th')[6]).append('<input type="number" id="lvMuralha" min="0" max="15" step="1">');

$("#lvMuralha").keyup(function () {
    let val = $('#lvMuralha').val();

    if (val != "") {
        esconderLinhas(val);
    } else {
        mostrarLinhas();
    }
});

function esconderLinhas(muralha = 0) {
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

function mostrarLinhas() {
    let lista = $('#plunder_list tr');

    $(lista).each(function (i) {
        $($(this).find('td')).css('display', '');
    });
}