// ==UserScript==
// @name         Desabilitar checkbox market
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://*&mode=call*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    if ($('#checkbox_wood')[0].checked) {
        $('#checkbox_wood')[0].click();
    }

    if ($('#checkbox_iron')[0].checked) {
        $('#checkbox_iron')[0].click();
    }

    if ($('#checkbox_stone')[0].checked) {
        $('#checkbox_stone')[0].click();
    }

    function addPonto(recursos) {
        return recursos.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }


    var capacidadeArmazem = parseInt($('#storage')[0].innerText)

    var qtdFerro = parseInt($('#iron')[0].innerText)
    var qtdArgila = parseInt($('#stone')[0].innerText)
    var qtdMadeira = parseInt($('#wood')[0].innerText)

    var qtdFerroChegando = parseInt($('.res.iron')[0].innerText.replace('.', ''))
    var qtdArgilaChegando = parseInt($('.res.stone')[0].innerText.replace('.', ''))
    var qtdMadeiraChegando = parseInt($('.res.wood')[0].innerText.replace('.', ''))

    var receberFerro = capacidadeArmazem - (qtdFerro + qtdFerroChegando)
    var receberArgila = capacidadeArmazem - (qtdArgila + qtdArgilaChegando)
    var receberMadeira = capacidadeArmazem - (qtdMadeira + qtdMadeiraChegando)

    receberMadeira = receberMadeira - (receberMadeira % 1000)
    receberArgila = receberArgila - (receberArgila % 1000)
    receberFerro = receberFerro - (receberFerro % 1000)

    var html = `
    <table id="res_sum" class="vis overview_table" width="250px">
        <thead>
            <tr>
                <th colspan="3">Recursos a receber</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td id="total_wood"><span class="res wood">${addPonto(receberMadeira)}</span></td>
                <td id="total_stone"><span class="res stone">${addPonto(receberArgila)}</span></td>
                <td id="total_iron"><span class="res iron">${addPonto(receberFerro)}</span></td>
            </tr>
        </tbody>
    </table>
`

    $($('#content_value > table:nth-child(3) > tbody > tr > td:nth-child(2) > div:nth-child(3)')).append(html);
})();