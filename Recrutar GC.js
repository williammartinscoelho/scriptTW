// ==UserScript==
// @name         Recrutar GC
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*screen=am_troops*
// @include      https://*screen=am_troops*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var selecionarTodas = $('#content_value > form:nth-child(6) > div:nth-child(3) > table > thead > tr:nth-child(1) > th > input.selectAll');
    var salvar = $('#content_value > form:nth-child(6) > div:nth-child(3) > table > thead > tr:nth-child(1) > th > input:nth-child(3)');
    
    var listSelect = [];
    listSelect.push($('#content_value > form:nth-child(6) > div:nth-child(1) > div > select > option:nth-child(1)'));
    listSelect.push($('#content_value > form:nth-child(6) > div:nth-child(1) > div > select > option:nth-child(6)'));
    listSelect.push($('#content_value > form:nth-child(6) > div:nth-child(1) > div > select > option:nth-child(7)'));
    listSelect.push($('#content_value > form:nth-child(6) > div:nth-child(1) > div > select > option:nth-child(3)'));
    listSelect.push($('#content_value > form:nth-child(6) > div:nth-child(1) > div > select > option:nth-child(4)'));
    listSelect.push($('#content_value > form:nth-child(6) > div:nth-child(1) > div > select > option:nth-child(5)'));
    listSelect.push($('#content_value > form:nth-child(6) > div:nth-child(1) > div > select > option:nth-child(2)'));
    listSelect.push($('#content_value > form:nth-child(6) > div:nth-child(1) > div > select > option:nth-child(10)'));

    listSelect.push($('#content_value > form:nth-child(6) > div:nth-child(1) > div > select > option:nth-child(8)'));
    listSelect.push($('#content_value > form:nth-child(6) > div:nth-child(1) > div > select > option:nth-child(9)'));


    /*
    0 1 Modelo Vazio
    1 2 FULL CL
    2 3 GERAL
    3 4 ARQUEIROS
    4 5 DEMOLIÇÃO
    5 6 SEM ARQUEIROS
    6 7 COM ARQUEIROS
    7 8 RECRUTAMENTO RAPIDO
    8 9 SUPORTE
    9 10 EXPLORACAO
    */



    //$(opt[0]).prop("selected",true).change();


    var listLinkGrupo = $('[data-group-id]');

    var controle = {
        atual: 0,
        recrutar: false
    };



    function recrutar(index_select) {
        $(listSelect[index_select]).prop("selected", true).change();
        selecionarTodas.click();

        controle.atual += 1;
        controle.recrutar = false;
        sessionStorage.setItem('controle', JSON.stringify(controle));

        setTimeout(function() {
            salvar.click();
        }, 500);
    }


    function clickLinkGroup(index_link) {
        controle.recrutar = true;
        sessionStorage.setItem('controle', JSON.stringify(controle));
        console.log(listLinkGrupo[index_link]);
        listLinkGrupo[index_link].click();
    }


    if (sessionStorage.getItem('controle') == null) {
        sessionStorage.setItem('controle', JSON.stringify(controle));
        location.reload();
    } else {
        controle = JSON.parse(sessionStorage.getItem('controle'));

        if (controle.atual == 0) {
            controle.atual += 1;
            sessionStorage.setItem('controle', JSON.stringify(controle));
            location.reload();
        } else if (controle.atual < 8) {
            if (controle.recrutar) {
                recrutar(controle.atual);
            } else {
                clickLinkGroup(controle.atual);
            }
        } else if (controle.atual == 8) {
            sessionStorage.clear();
        }

    }


})();