// ==UserScript==
// @name         Farm W.M.Coelho
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       W.M.Coelho
// @match        https://*screen=am_farm*
// @include      https://*screen=am_farm*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var target_offset = $("#content_value > div:nth-child(5) > div > form:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(1) > a").offset();
    var target_top = target_offset.top;
    $('html, body').animate({ scrollTop: target_top }, 0);

    var verificarC = true;
    //true = verifica se tem tropas disponiveis no C, se nao tiver troca aldeia, nao verifica os spy

    var qtdAtks = 0;

    var listaDeLinhas = $('body').find('tr[id^=village_]');
    var tamanhoListaLinhas = listaDeLinhas.length;
    var indexListaLinhas = 0;

    var interval_farm = null;

    // Adicionar o total de recursos na lista do AS
    $(listaDeLinhas).each(function (i) {
        setTotalRecursos(this, getTotalResursos2(this));
    });


    $.ajax({
        async: true,
        type: 'GET',
        url: `${$('#menu_row2_village > a')[0].href}`,
        dataType: 'text',
        success: function (retorno) {
            let FarmAS = retorno.search('"name":"Farm AS","in_group":true');

            if (FarmAS == -1) {
                console.log('Não Pertence ao Grupo Farm AS');
                trocarAldeia();
            } else {
                console.log('Pertencente ao Grupo Farm AS');
                iniciarIntervalFarm();
            }
        },
        error: function (xhr) {
            console.log(xhr);
            alert("Erro!");
        }
    });

    function iniciarIntervalFarm() {
        interval_farm = setInterval(
            function () {
                //IDENTIFICAR ABA DO FARM
                $('title')[0].innerText = `FARM ${location.host.substring(0, 4).toUpperCase()}`;

                verificarCaptch();

                console.log('Linha: ', indexListaLinhas);

                if (tamanhoListaLinhas > 0) { // SE TIVER RELATORIO
                    farmar(listaDeLinhas[indexListaLinhas], indexListaLinhas);
                    //Nova lista de relatorios
                    listaDeLinhas = $('body').find('tr[id^=village_]');
                    //Novo tamanho de lista de relatorios
                    tamanhoListaLinhas = listaDeLinhas.length;

                    indexListaLinhas += 1;

                    if (indexListaLinhas >= tamanhoListaLinhas) {
                        //location.reload();
                        trocarAldeia();
                    }
                } else {
                    // Parar o farm se nao tiver relatorio no AS
                    clearInterval(interval_farm);

                    setTimeout(
                        function () {
                            location.reload();
                        }, 600000 //10 minutos
                    );
                }
            }, 275
        );
    }



    function farmar(tr, i) {
        setIndex(tr, i);

        if (qtdAtks >= 10 && $('#village_switch_right')[0] != undefined) {
            qtdAtks = 0;
            trocarAldeia();
        }

        let valDistanciaMax = 60;
        let valDistancia = getDistanciaAtk(tr);
        let valMuralha = getLvlMuralha(tr);
        let valRecursos = getTotalResursos2(tr);
        let tempAtk = getTimeAtk(tr);
        let atkVelho = calcularTempo(tempAtk, 7200);
        let tropasDiponivel = getQtdTropasDisponiveis();
        let qtdTropasAtk = calcularQtdTropasAtk(valRecursos, tropasDiponivel);


        if (tropasDiponivel.spy == 0) { //nao tem spy
            clearInterval(interval_farm);
            console.log('SEM SPY, TROCAR DE ALDEIA!');
            trocarAldeia();
        }
        else if ((tropasDiponivel.light < 5 && tropasDiponivel.marcher < 5) && verificarC == true) { //sem cl
            clearInterval(interval_farm);
            console.log('SEM CL, TROCAR DE ALDEIA!');
            trocarAldeia();
        }
        else if (valDistancia > valDistanciaMax) { //Atk muito longe
            clearInterval(interval_farm);
            console.log('DISTANCIA MUITO ALTA, TROCAR DE ALDEIA!');
            trocarAldeia();
        }
        else if (atkVelho) { //relatorio do atk antigo
            console.log(tempAtk, 'RELATORIO VELHO!');
            farmB(tr);
            qtdAtks += 1;
        }
        else if (/*valMuralha == 0 && valRecursos >= 900 && qtdTropasAtk != 0*/ false) {
            console.log('MURALHA ZERO, FARM N!');
            farmN(tr, qtdTropasAtk);
            //qtdAtks += 1;
        }
        else if (/*valMuralha >= 1 && (valRecursos >= (valMuralha * 1000) || valRecursos >= 5000) && (tropasDiponivel.light * 80) < valRecursos && qtdTropasAtk != 0 */ false) {
            console.log('SEM CVL, MUITOS RECURSOS, FARM N!');
            farmN(tr, qtdTropasAtk);
            //qtdAtks += 1;
        }
        else if (
            (valMuralha <= 1 && valRecursos >= (4 * 80) && (tropasDiponivel.light > 0 || tropasDiponivel.axe > 0 || tropasDiponivel.marcher > 0)) ||
            (valMuralha >= 2 && valRecursos >= 2000) && (tropasDiponivel.light > 0 || tropasDiponivel.axe > 0 || tropasDiponivel.marcher > 0)) {
            console.log('SEM TROPAS, MUITOS RECURSOS, FARM C!');
            farmC(tr);
            //qtdAtks += 1;
        }
    }


    function farmA(tr) {
        console.log("farmA", new Date().toString().substring(16, 24));
        let a = $(tr).find('a.farm_icon_a')[0];
        a.click();
    }

    function farmB(tr) {
        console.log("farmB", new Date().toString().substring(16, 24));
        let b = $(tr).find('a.farm_icon_b')[0];
        b.click();
    }

    function farmC(tr) {
        console.log("farmC", new Date().toString().substring(16, 24));
        let c = $(tr).find('a.farm_icon_c')[0];
        c.click();
    }

    function farmN(tr, qtdTropas, tempo = 450) {
        if (qtdTropas == 0) {
            console.log('SEM TROPAS SUFICIENTES PARA FARM N');
            return '';
        }

        //Abre o popup
        $($(tr).find('td')[11]).find('a')[0].click();

        // Espera um tempo até abrir o popup
        setTimeout(
            //Add as tropas nos input
            function () {
                $('#unit_input_spear').val(qtdTropas.spear);
                $('#unit_input_sword').val(qtdTropas.sword);
                $('#unit_input_archer').val(qtdTropas.archer);
                $('#unit_input_axe').val(qtdTropas.axe);
                $('#unit_input_spy').val(1);

                //Clica para confirmar o atk
                $('#target_attack')[0].click();

                //espera um tempo para confirmar
                setTimeout(
                    function () {
                        $('#troop_confirm_go')[0].click();
                    }, tempo
                );
            }, tempo
        );

    }


    function getLvlMuralha(tr) {
        let lvlMuralha = $($(tr).find('td')[6]).html();

        //Verifica se não tem informação do lvl da muralha
        if (lvlMuralha == '?') {
            return 20;
        } else {
            return parseInt(lvlMuralha);
        }

    }

    function getDistanciaAtk(tr) {
        let distancia = $($(tr).find('td')[7]).html();
        return parseFloat(distancia);
    }

    function getTotalResursos(tr) {
        let gen_total = $(tr).find('.gen_total b');
        gen_total = $(gen_total).html();

        if (gen_total != undefined) {
            gen_total = parseInt(gen_total.replace('(', '').replace(')', ''));
        }

        return gen_total;
    }

    function getTotalResursos2(tr) {
        try {
            let madeira = parseInt($($(tr).find('td')[5]).find('span.nowrap')[0].textContent.replace('.', ''));
            let argila = parseInt($($(tr).find('td')[5]).find('span.nowrap')[1].textContent.replace('.', ''));
            let ferro = parseInt($($(tr).find('td')[5]).find('span.nowrap')[2].textContent.replace('.', ''));
            let total = madeira + argila + ferro;

            return total;
        } catch (error) {
            return 0;
        }

    }

    function setIndex(tr, indice) {
        let td = $(tr).find('td')[1];
        $(td).append(indice);
        $(td).css('background-color', 'black');
        $(td).css('color', 'white');
    }

    function setTotalRecursos(tr, recursos) {
        let recursos2 = recursos.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        if (recursos >= 1000) {
            recursos2 = '<span style="color: green;">' + recursos2 + '</span>'
        }

        let html = `
            <span class="nowrap">
                <span class="icon header ressources"></span>
                <span class="res"><b>(${recursos2})</b></span>
            </span>`;

        $($(tr).find('td')[5]).append(html);
        $($(tr).find('td')[5]).css('text-align', 'right');
    }

    function getTimeAtk(tr) {
        let temp = $(tr).find('td')[4];
        temp = $(temp).text();
        let str1 = '';
        let str2 = '';
        let pos = 0;

        pos = temp.indexOf(":");
        str1 = temp.substring(pos, pos - 2);
        str2 = temp.substring(pos, pos + 6);

        temp = str1 + str2;
        return temp;
    }

    function getQtdTropasDisponiveis() {
        // Quantidade de tropas que devem ser deixadas na aldeias
        // e não enviadas para o farmN
        let qtdPraFicar = {
            'lanca': 1,
            'espada': 1,
            'arqueiro': 1
        };

        let totalDisponivel = {
            'spear': parseInt($('#spear').html()),
            'sword': parseInt($('#sword').html()),
            'axe': parseInt($('#axe').html()),
            'archer': parseInt($('#archer').html()),
            'spy': parseInt($('#spy').html()),
            'light': parseInt($('#light').html()),
            'marcher': parseInt($('#marcher').html()),
            'heavy': parseInt($('#heavy').html())
        };

        let qtdDisponivel = {
            'spear': (totalDisponivel.spear - qtdPraFicar.lanca) > 0 ? (totalDisponivel.spear - qtdPraFicar.lanca) : 0,
            'sword': (totalDisponivel.sword - qtdPraFicar.espada) > 0 ? (totalDisponivel.sword - qtdPraFicar.espada) : 0,
            'axe': totalDisponivel.axe,
            'archer': (totalDisponivel.archer - qtdPraFicar.arqueiro) > 0 ? (totalDisponivel.archer - qtdPraFicar.arqueiro) : 0,
            'spy': totalDisponivel.spy,
            'light': totalDisponivel.light,
            'marcher': totalDisponivel.marcher,
            'heavy': totalDisponivel.heavy
        };

        return qtdDisponivel;
    }

    function calcularTempo(atk, segDiferença) {
        let horaAtk = atk.substring(0, 2);
        let minutoAtk = atk.substring(3, 5);
        let segAtk = atk.substring(6, 8);

        let atual = new Date().toString().substring(16, 24);

        let calculada = atk;
        let horaCalculada = horaAtk;
        let minutoCalculada = minutoAtk;
        let segCalculada = segAtk;

        let cont = 0;
        while (calculada != atual) {
            cont += 1;

            segCalculada = parseInt(segCalculada) + 1;

            if (segCalculada > 59) {
                segCalculada = 0;
                minutoCalculada = parseInt(minutoCalculada) + 1;
            }

            if (minutoCalculada > 59) {
                minutoCalculada = 0;
                horaCalculada = parseInt(horaCalculada) + 1;
            }

            if (horaCalculada > 23) {
                horaCalculada = 0;
            }


            if (horaCalculada < 10) {
                horaCalculada = '0' + parseInt(horaCalculada);
            }

            if (minutoCalculada < 10) {
                minutoCalculada = '0' + parseInt(minutoCalculada);
            }

            if (segCalculada < 10) {
                segCalculada = '0' + parseInt(segCalculada);
            }

            calculada = `${horaCalculada}:${minutoCalculada}:${segCalculada}`;
            //console.log('ATUAL: ', atual);
            //console.log('CALCULADA: ', calculada);

            if (cont > segDiferença + 10) {
                break;
            }
        }

        //console.log('Hora do Atk: ', atk);
        //console.log('Hora Atual: ', atual);
        //console.log('Diferença em Seg: ', cont);

        return cont >= segDiferença;
    }

    function calcularQtdTropasAtk(saqueDisponivel, tropasDiponivel) {
        if (((tropasDiponivel.spear * 25) + (tropasDiponivel.sword * 15) + (tropasDiponivel.axe * 10) + (tropasDiponivel.archer * 10)) >= saqueDisponivel) {

            let saqueCalc = 0;
            let qtdL = 0;
            let qtdE = 0;
            let qtdA = 0;
            let qtdB = 0;

            while (saqueCalc < saqueDisponivel) {
                if (qtdL < tropasDiponivel.spear) {
                    qtdL += 1;
                }

                if (qtdE < tropasDiponivel.sword) {
                    qtdE += 1;
                }

                if (qtdA < tropasDiponivel.archer) {
                    qtdA += 1;
                }

                if (qtdB < tropasDiponivel.axe) {
                    qtdB += 1;
                }

                saqueCalc = (qtdL * 25) + (qtdE * 15) + (qtdA * 10) + (qtdB * 10);
            }

            return {
                'spear': qtdL,
                'sword': qtdE,
                'archer': qtdA,
                'axe': qtdB
            }
        } else {
            return 0;
        }
    }

    function trocarAldeia() {
        if ($('#village_switch_right')[0] == undefined) {
            location.reload();
        } else {
            $('#village_switch_right')[0].click();
        }
    }

    function verificarCaptch() {
        if ($('#bot_check')[0] != undefined) {
            console.log('RECAPTCHA ATIVO');
            //UI.ErrorMessage("RECAPTCHA ATIVO");
            //$("<audio id='audio' autoplay><source src='http://protettordelinks.com/wp-content/baixar/bomba_relogio_alerta_www.toquesengracadosmp3.com.mp3' type='audio/mp3' /></audio>").appendTo("body");
            clearInterval(interval_farm);
            console.log('FARM DESATIVADO!');
            //UI.SuccessMessage("FARM DESATIVADO!");

            //VERIFICAR SE TEM IMAGEM NO CAPTCHA APOS 3.5s
            /*
            setTimeout(
                function () {
                    if ($('.g-recaptcha-bubble-arrow')[0] == undefined) {
                        console.log('RELOAD EM 5 SEGUNDOS');
                        //UI.SuccessMessage("RELOAD EM 10 SEGUNDOS");
                        setTimeout(function () {
                            location.reload();
                        }, 10000);
                    } else {
                        console.log('IMAGEM');
                        $("<audio id='audio' autoplay><source src='http://protettordelinks.com/wp-content/baixar/bomba_relogio_alerta_www.toquesengracadosmp3.com.mp3' type='audio/mp3' /></audio>").appendTo("body");
                        //alert("IMAGEM");
                    }
                }, 3500
            );
            */
        }
    }
})();