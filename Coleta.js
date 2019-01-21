
var trTropas = $($('.candidate-squad-widget')[0]).find('tr')[1];

var qtdLanca = $($('[data-unit="spear"]')[1]).text().replace('(', '').replace(')', '');
var qtdEspada = $($('[data-unit="sword"]')[1]).text().replace('(', '').replace(')', '');
var qtdBarbaro = $($('[data-unit="axe"]')[1]).text().replace('(', '').replace(')', '');
var qtdArqueiro = $($('[data-unit="archer"]')[1]).text().replace('(', '').replace(')', '');
var qtdCvLeve = $($('[data-unit="light"]')[1]).text().replace('(', '').replace(')', '');


var a0 = $($(".options-container").find('.scavenge-option')[0]).find('.free_send_button');
var a1 = $($(".options-container").find('.scavenge-option')[1]).find('.free_send_button');
var a2 = $($(".options-container").find('.scavenge-option')[2]).find('.free_send_button');
var a3 = $($(".options-container").find('.scavenge-option')[3]).find('.free_send_button');

var inputLanca = $('[name="spear"]');
var inputEspada = $('[name="sword"]');
var inputBarbaro = $('[name="axe"]');
var inputArqueiro = $('[name="archer"]');
var inputCvLeve = $('[name="light"]');

$(inputLanca).focus(function () {
    inputLanca.val(10);
});

function calcularTropas(qtdTropas) {
    var lancaCalculada = [];

    var tropasCalculadas = 0;
    var pequena = 0;
    var media = 0;
    var grande = 0;
    var extrema = 0;

    while (tropasCalculadas < qtdTropas) {
        pequena += 1;
        media = pequena / 2.5;
        grande = pequena / 5;
        extrema = pequena / 7.5;
        tropasCalculadas = grande + media + pequena + extrema;
    }

    lancaCalculada.push(pequena);
    lancaCalculada.push(media);
    lancaCalculada.push(grande);
    lancaCalculada.push(extrema);

    return lancaCalculada;
}