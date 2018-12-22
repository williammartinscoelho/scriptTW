//$.getScript('https://code.jquery.com/jquery-3.3.1.js');

var html = `
    <div style="float: left; width: 100%; margin-top: 15px;">
        <fieldset>
            <legend>Filtrar Muralha</legend>

            <div style="max-width: 25%; display: inline-block; margin-right: 25px;">
                <label>Mostrar Somente Lv: </label><br>
                <input type="number" id="mostrarSomente" min="0" max="20" step="1"/>
            </div>

            <div style="max-width: 25%; display: inline-block; margin-right: 25px;">
                <label>Esconder Somente Lv: </label><br>
                <input type="number" id="esconderSomente" min="0" max="20" step="1"/>
            </div>

            <div style="max-width: 25%; display: inline-block; margin-right: 25px;">
                <label>Mostrar Lv > que: </label><br>
                <input type="number" id="lvMaiorQue" min="0" max="20" step="1"/>
            </div>

            <div style="max-width: 25%; display: inline-block; margin-right: 25px;">
                <label>Mostrar Lv < que: </label><br>
                <input type="number" id="lvMenorQue" min="0" max="20" step="1"/>
            </div>
        </fieldset>
    </div>
`;

$('#plunder_list_filters').append(html);

$("#mostrarSomente").keyup(function () {
    let valorInput = $('#mostrarSomente').val();

    $('#esconderSomente').val('');
    $('#lvMaiorQue').val('');
    $('#lvMenorQue').val('');

    if (valorInput != "") {
        mostrarSomente(valorInput);
    } else {
        mostrarLinhas();
    }
});

$("#esconderSomente").keyup(function () {
    let valorInput = $('#esconderSomente').val();

    $('#lvMaiorQue').val('');
    $('#lvMenorQue').val('');
    $('#mostrarSomente').val('');

    if (valorInput != "") {
        esconderSomente(valorInput);
    } else {
        mostrarLinhas();
    }
});

$("#lvMaiorQue").keyup(function () {
    let valorInput = $('#lvMaiorQue').val();

    $('#lvMenorQue').val('');
    $('#mostrarSomente').val('');
    $('#esconderSomente').val('');

    if (valorInput != "") {
        lvMaiorQue(valorInput);
    } else {
        mostrarLinhas();
    }
});

$("#lvMenorQue").keyup(function () {
    let valorInput = $('#lvMenorQue').val();

    $('#mostrarSomente').val('');
    $('#esconderSomente').val('');
    $('#lvMaiorQue').val('');

    if (valorInput != "") {
        lvMenorQue(valorInput);
    } else {
        mostrarLinhas();
    }
});



function mostrarSomente(lvMuralha) {
    let listaLinhas = $('#plunder_list tr');

    $(listaLinhas).each(function (i) {
        let valMuralha = $($(this).find('td')[6]).html();
        valMuralha = parseInt(valMuralha);

        if (lvMuralha != valMuralha) {
            $($(this).find('td')).css('display', 'none');
        } else {
            $($(this).find('td')).css('display', '');
        }
    });
}

function esconderSomente(lvMuralha) {
    let listaLinhas = $('#plunder_list tr');

    $(listaLinhas).each(function (i) {
        let valMuralha = $($(this).find('td')[6]).html();
        valMuralha = parseInt(valMuralha);

        if (lvMuralha == valMuralha) {
            $($(this).find('td')).css('display', 'none');
        } else {
            $($(this).find('td')).css('display', '');
        }
    });
} 


function lvMaiorQue(lvMuralha) {
    let listaLinhas = $('#plunder_list tr');

    $(listaLinhas).each(function (i) {
        let valMuralha = $($(this).find('td')[6]).html();
        valMuralha = parseInt(valMuralha);

        if (valMuralha > lvMuralha) {
            $($(this).find('td')).css('display', '');
        } else {
            $($(this).find('td')).css('display', 'none');
        }
    });
}

function lvMenorQue(lvMuralha) {
    let listaLinhas = $('#plunder_list tr');

    $(listaLinhas).each(function (i) {
        let valMuralha = $($(this).find('td')[6]).html();
        valMuralha = parseInt(valMuralha);

        if (valMuralha < lvMuralha) {
            $($(this).find('td')).css('display', '');
        } else {
            $($(this).find('td')).css('display', 'none');
        }
    });
} 


function mostrarLinhas() {
    let lista = $('#plunder_list tr');

    $(lista).each(function (i) {
        $($(this).find('td')).css('display', '');
    });
}