// ==UserScript==
// @name         COLETA WILL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       William M. Coelho
// @match        https://br91.tribalwars.com.br/game.php?village=21166&screen=place&mode=scavenge
// @include      https://*mode=scavenge*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    /*/
    $.ajax({
        async: true,
        type: 'GET',
        url: `${$('#menu_row2_village > a')[0].href}`,
        dataType: 'text',
        success: function (retorno) {
            let FarmAS = retorno.search(`Coleta `);
            //console.log(retorno)

            if (FarmAS == -1) {
                console.log('Não Pertence ao Grupo COLETA');
                altAldeia();
            } else {
                console.log('Pertencente ao Grupo COLETA');
                iniciar();
            }
        },
        error: function (xhr) {
            console.log(xhr);
            alert("Erro!");
        }
    });
    */

    $.ajax({
        async: true,
        type: 'GET',
        url: `${$('#menu_row2_village > a')[0].href}`,
        dataType: 'text',
        success: function (retorno) {
            let FarmAS = retorno.search('"name":"Farm AS","in_group":true');

            if (FarmAS == -1) {
                console.log('Não Pertence ao Grupo Farm AS');
                altAldeia();
            } else {
                console.log('Pertencente ao Grupo Farm AS');
                iniciar();
            }
        },
        error: function (xhr) {
            console.log(xhr);
            //alert("Erro!");
        }
    });

    // Coleta a quantidade de tropas disponivel na aldeia
    var tropas_disponivel = [
        get_qtd_tropa('spear'),
        get_qtd_tropa('sword'),
        get_qtd_tropa('axe'),
        get_qtd_tropa('archer'),
        get_qtd_tropa('light'),
        get_qtd_tropa('marcher'),
        get_qtd_tropa('heavy'),
    ]

    var qtd_btn_comecar = $('a.btn.btn-default.free_send_button:not(.btn-disabled)').length;

    function get_qtd_tropa(data_unit) {
        return parseInt($(`a.units-entry-all[data-unit=${data_unit}]`)[0].innerText.replace('(', '').replace(')', ''));
    }


    function calcular_tropas_coleta(tropas_disponivel, qtd_btn_comecar) {
        console.log('Calculando tropas...');

        var lista_pequena = [];
        var lista_media = [];
        var lista_grande = [];
        var lista_extrema = [];

        if (qtd_btn_comecar === 1) {

        } else if (qtd_btn_comecar === 2) {
            $(tropas_disponivel).each(function (i) {
                var num = this;
                var peq = num / 1.4;
                var med = num - peq;
                lista_pequena.push(parseInt(peq));
                lista_media.push(parseInt(med));
            });
        } else if (qtd_btn_comecar === 3) {
            $(tropas_disponivel).each(function (i) {
                var num = this;
                var peq = num / 1.6;
                var med = peq / 2.5;
                var gra = peq / 5;
                lista_pequena.push(parseInt(peq));
                lista_media.push(parseInt(med));
                lista_grande.push(parseInt(gra));
            });
        } else if (qtd_btn_comecar === 4) {
            $(tropas_disponivel).each(function (i) {
                var num = this;
                var peq = num / 1.7334;
                var med = peq / 2.5;
                var gra = peq / 5;
                var ext = peq / 7.5;
                lista_pequena.push(parseInt(peq));
                lista_media.push(parseInt(med));
                lista_grande.push(parseInt(gra));
                lista_extrema.push(parseInt(ext));
            });
        }

        var coletas = [
            lista_pequena,
            lista_media,
            lista_grande,
            lista_extrema
        ]

        return coletas;
    }


    function add_tropas_input(input, qtd_tropa) {
        input.value = qtd_tropa;
        input.dispatchEvent(new KeyboardEvent('keyup', { 'key': '0' }));
    }

    function enviar_coleta(coletas) {
        var lista_input = $('.unitsInput');
        var lista_btn_comecar = $('a.btn.btn-default.free_send_button:not(.btn-disabled)');

        var i = 0;

        var interval_enviar_coleta = setInterval(function () {

            $(coletas[i]).each(function (j) {
                add_tropas_input(lista_input[j], this);
            });

            try {
                lista_btn_comecar[i].click();
            } catch (error) {
                console.log(error);
            }

            i++;
            console.log(`VARIAVEL i = ${i}`);

            if (i > qtd_btn_comecar) {
                clearInterval(interval_enviar_coleta);
                altAldeia();
            }
        }, 1000);

    }

    function tratar_tropas(tropas_disponivel) {
        //COMENTE AS LINHAS DAS UNIDADES QUE VC QUER ENVIAR

        //tropas_disponivel[0] = 0; //LANCA
        //tropas_disponivel[1] = 0; //ESPADA
        //tropas_disponivel[2] = 0; //MACHADO
        //tropas_disponivel[3] = 0; //ARCO
        tropas_disponivel[4] = (tropas_disponivel[4] >= 1000) ? tropas_disponivel[4] : 0; //CAVALO LEVE
        //tropas_disponivel[5] = 0; //CAVALO ARCO
        //tropas_disponivel[6] = 0; //CAVALO PESADO
        tropas_disponivel[7] = 0; //PALADINO

        return tropas_disponivel;
    }

    function iniciar() {
        enviar_coleta(calcular_tropas_coleta(tratar_tropas(tropas_disponivel), qtd_btn_comecar));
    }

    function altAldeia() {
        $('.arrowRight').click();
        $('.groupRight').click();
    }

    //iniciar();
})();