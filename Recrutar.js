var qtdDeCada = prompt("Quantidade de cada tropa: ", 10);
var qtdVezes = prompt("Quantas vezes recrutar: ", 5);

var indice = 0;

var IntervalRecruit = setInterval(function () {
    $('[name=spear]').val(qtdDeCada);
    $('[name=sword]').val(qtdDeCada);
    $('.btn.btn-recruit').click();

    indice += 1;

    if (indice == qtdVezes) clearInterval(IntervalRecruit);
}, 1500);