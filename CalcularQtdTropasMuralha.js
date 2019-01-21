// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*screen=place*
// @include      https://*screen=place*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    $('[name=luck]').val('-25');

    if (sessionStorage.getItem('muralhaAtual') == undefined) {
        sessionStorage.setItem('muralhaAtual', 0);
    }




    if (sessionStorage.getItem('lancaAtual') == undefined) {
        sessionStorage.setItem('lancaAtual', 1);
    }

    if (sessionStorage.getItem('espadaAtual') == undefined) {
        sessionStorage.setItem('espadaAtual', 1);
    }

    if (sessionStorage.getItem('bbAtual') == undefined) {
        sessionStorage.setItem('bbAtual', 1);
    }

    if (sessionStorage.getItem('cvlAtual') == undefined) {
        sessionStorage.setItem('cvlAtual', 1);
    }





    if (sessionStorage.getItem('qtdLanca') == undefined) {
        calcularLanca();
    } else if (sessionStorage.getItem('qtdEspada') == undefined) {
        calcularEspada();
    } else if (sessionStorage.getItem('qtdBB') == undefined) {
        calcularBB();
    } else if (sessionStorage.getItem('qtdCvl') == undefined) {
        calcularCvl();
    }




    function calcularLanca() {
        let qtdLancaEnviada = parseInt($('.unit-item-spear')[0].textContent);
        let qtdLancaPerdida = parseInt($('.unit-item-spear')[1].textContent);
        let qtdPopulacaoEnv = parseInt($('#simulation_result tbody td')[20].textContent);


        if (qtdLancaEnviada > 0 && qtdLancaPerdida == 0 && qtdPopulacaoEnv > 0) {
            alert('LANCA CALCULADA');
            sessionStorage.setItem('qtdLanca', qtdLancaEnviada);
            location.reload();
            return true;
        }

        $('[name=att_spear]').val(sessionStorage.getItem('lancaAtual'));
        $('[name=def_wall]').val(sessionStorage.getItem('muralhaAtual'));

        sessionStorage.setItem('lancaAtual', parseInt(sessionStorage.getItem('lancaAtual')) + 1);
        $('.btn')[4].click();
    }



    function calcularEspada() {
        let qtdEspadaEnviada = parseInt($('.unit-item-sword')[0].textContent);
        let qtdEspadaPerdida = parseInt($('.unit-item-sword')[1].textContent);
        let qtdPopulacaoEnv = parseInt($('#simulation_result tbody td')[20].textContent);

        if (qtdEspadaEnviada > 0 && qtdEspadaPerdida == 0 && qtdPopulacaoEnv != 0) {
            alert('ESPADA CALCULADA');
            sessionStorage.setItem('qtdEspada', qtdEspadaEnviada);
            location.reload();
            return true;
        }

        $('[name=att_spear]').val(0);

        $('[name=att_sword]').val(sessionStorage.getItem('espadaAtual'));
        $('[name=def_wall]').val(sessionStorage.getItem('muralhaAtual'));

        sessionStorage.setItem('espadaAtual', parseInt(sessionStorage.getItem('espadaAtual')) + 1);
        $('.btn')[4].click();
    }

    function calcularBB() {
        let qtdBbEnviada = parseInt($('.unit-item-axe')[0].textContent);
        let qtdBbPerdida = parseInt($('.unit-item-axe')[1].textContent);
        let qtdPopulacaoEnv = parseInt($('#simulation_result tbody td')[20].textContent);

        if (qtdBbEnviada > 0 && qtdBbPerdida == 0 && qtdPopulacaoEnv != 0) {
            alert('BB CALCULADA');
            sessionStorage.setItem('qtdBB', qtdBbEnviada);
            location.reload();
            return true;
        }

        $('[name=att_sword]').val(0);

        $('[name=att_axe]').val(sessionStorage.getItem('bbAtual'));
        $('[name=def_wall]').val(sessionStorage.getItem('muralhaAtual'));

        sessionStorage.setItem('bbAtual', parseInt(sessionStorage.getItem('bbAtual')) + 1);
        $('.btn')[4].click();
    }

    function calcularCvl() {
        let qtdCvlEnviada = parseInt($('.unit-item-light')[0].textContent);
        let qtdCvlPerdida = parseInt($('.unit-item-light')[1].textContent);
        let qtdPopulacaoEnv = parseInt($('#simulation_result tbody td')[20].textContent);

        if (qtdCvlEnviada > 0 && qtdCvlPerdida == 0 && qtdPopulacaoEnv != 0) {
            alert('CVL CALCULADA');
            sessionStorage.setItem('qtdCvl', qtdCvlEnviada);
            location.reload();
            return true;
        }

        $('[name=att_axe]').val(0);

        $('[name=att_light]').val(sessionStorage.getItem('cvlAtual'));
        $('[name=def_wall]').val(sessionStorage.getItem('muralhaAtual'));

        sessionStorage.setItem('cvlAtual', parseInt(sessionStorage.getItem('cvlAtual')) + 1);
        $('.btn')[4].click();
    }


})();