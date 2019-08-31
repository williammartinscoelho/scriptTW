// ==UserScript==
// @name         BOT DE MERCADO CARAI
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://br91.tribalwars.com.br/game.php?village=21323&screen=market&order=distance&dir=ASC&target_id=0&mode=call
// @include      https://*&mode=call&group=95114*
// @include      https://*&mode=call&group=95112*
// @include      https://*&mode=call&group=95116*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var init_bot = confirm('Iniciar bot? ');

    if (init_bot) {
        console.log('INICAR>>>');


        var btn_submit = $('#content_value > table:nth-child(3) > tbody > tr > td:nth-child(2) > form:nth-child(9) > input:nth-child(3)');

        var mandar_este_recurso = '';
        //mandar_este_recurso = prompt('QUAL RECURSOS VC QUER RECEBER? ');

        var url = window.location.search;

        if (url.search('group=95112') > -1) {
            mandar_este_recurso = 'madeira';
        } else if (url.search('group=95114') > -1) {
            mandar_este_recurso = 'argila';
        } else if (url.search('group=95116') > -1) {
            mandar_este_recurso = 'ferro';
        }

        console.log('mandar_este_recurso =', mandar_este_recurso);

        var lista_de_linhas = $('.supply_location');

        //lista_de_linhas.length

        var cont_index = -1;

        var envio_de_recursos = setInterval(function () {
            cont_index = cont_index + 1;
            console.log("");
            console.log('INDEX =', cont_index);

            var td = $(lista_de_linhas[cont_index]).find('td:nth-child(1)');
            $(td).css('background-color', 'green');






            //==============================================================
            // INFORMAÇÕES DA ALDEIA
            //==============================================================
            let capacidade_armazem = get_capacidade_armazem();

            // RECURSOS ARMAZENADOS NA ALDEIA
            let ferro_na_aldeia = get_recursos_no_armazem('#iron');
            let argila_na_aldeia = get_recursos_no_armazem('#stone');
            let madeira_na_aldeia = get_recursos_no_armazem('#wood');

            // RECURSOS CHEGANDO PELO MERCADO
            let ferro_chegando = get_recursos_chegando('.res.iron');
            let argila_chegando = get_recursos_chegando('.res.stone');
            let madeira_chegando = get_recursos_chegando('.res.wood');

            // QUANTIDADE DE RECURSOS QUE POSSO RECEBER ATÈ ENCHER O ARMAZEM
            let receber_ferro = capacidade_armazem - (ferro_na_aldeia + ferro_chegando);
            let receber_argila = capacidade_armazem - (argila_na_aldeia + argila_chegando);
            let receber_madeira = capacidade_armazem - (madeira_na_aldeia + madeira_chegando);

            receber_madeira = receber_madeira - (receber_madeira % 1000);
            receber_argila = receber_argila - (receber_argila % 1000);
            receber_ferro = receber_ferro - (receber_ferro % 1000);

            let receber_max = 130000;

            if (receber_madeira > receber_max) {
                receber_madeira = receber_max;
            }

            if (receber_argila > receber_max) {
                receber_argila = receber_max;
            }

            if (receber_ferro > receber_max) {
                receber_ferro = receber_max;
            }
            //==============================================================
            //==============================================================
            //==============================================================


            //==============================================================
            // VERIFICAÇÕES PARA PAUSAR O BOT
            //==============================================================
            if (receber_madeira < 1000 && mandar_este_recurso === 'madeira') {
                clearInterval(envio_de_recursos);
                console.log('MADEIRA COMPLETO');
                return false;
            }

            if (receber_argila < 1000 && mandar_este_recurso === 'argila') {
                clearInterval(envio_de_recursos);
                console.log('ARGILA COMPLETO');
                return false;
            }

            if (receber_ferro < 1000 && mandar_este_recurso === 'ferro') {
                clearInterval(envio_de_recursos);
                console.log('FERRO COMPLETO');
                return false;
            }

            if (cont_index >= lista_de_linhas.length) {
                clearInterval(envio_de_recursos);
                console.log('FIM DA LISTA');
                return false;
            }

            // if (cont_index > 10) {
            //     clearInterval(envio_de_recursos);
            // }

            //==============================================================
            //==============================================================
            //==============================================================





            //==============================================================
            // INFORMAÇÕES DO MERCADO
            //==============================================================

            // RECURSOS DISPONIVEL PARA ENVIAR NO MERCADO
            let madeira_disponivel = get_recurso_disponivel_para_envio(lista_de_linhas[cont_index], 'td.wood');
            let argila_disponivel = get_recurso_disponivel_para_envio(lista_de_linhas[cont_index], 'td.stone');
            let ferro_disponivel = get_recurso_disponivel_para_envio(lista_de_linhas[cont_index], 'td.iron');

            // console.log('madeira_disponivel =', madeira_disponivel);
            // console.log('argila_disponivel =', argila_disponivel);
            // console.log('ferro_disponivel =', ferro_disponivel);


            let comerciante_disponivel = $(lista_de_linhas[cont_index]).find('.traders')[0].innerText;
            comerciante_disponivel = parseInt(comerciante_disponivel.split('/')[0]);

            console.log('comerciante_disponivel =', comerciante_disponivel);

            let checkbox = $(lista_de_linhas[cont_index]).find('[name=select-village]');
            //checkbox.click();

            let input_madeira = $(lista_de_linhas[cont_index]).find('.hide_toggle')[0];
            let input_argila = $(lista_de_linhas[cont_index]).find('.hide_toggle')[1];
            let input_ferro = $(lista_de_linhas[cont_index]).find('.hide_toggle')[2];

            let verificar_maior_qtd_recurso = false;
            let maior_qtd_recurso = get_mais_recursos(lista_de_linhas[cont_index]);
            console.log('maior_qtd_recurso =', maior_qtd_recurso);


            if (mandar_este_recurso === 'madeira') {
                // MANDAR MADEIRA
                console.log('MANDAR MADEIRA');
                console.log('madeira_disponivel =', madeira_disponivel);

                let o = {
                    'recurso_disponivel': madeira_disponivel,
                    'receber_recurso': receber_madeira,
                    'input_recurso': input_madeira,
                    comerciante_disponivel,
                    checkbox,
                    btn_submit
                }

                analisar_envio_de_recursos(o);

            } else if (mandar_este_recurso === 'argila') {
                // MANDAR ARGILA
                console.log('MANDAR ARGILA');
                console.log('argila_disponivel =', argila_disponivel);

                let o = {
                    'recurso_disponivel': argila_disponivel,
                    'receber_recurso': receber_argila,
                    'input_recurso': input_argila,
                    comerciante_disponivel,
                    checkbox,
                    btn_submit
                }

                analisar_envio_de_recursos(o);

            } else if (mandar_este_recurso === 'ferro') {
                // MANDAR FERRO
                console.log('MANDAR FERRO');
                console.log('ferro_disponivel =', ferro_disponivel);

                let o = {
                    'recurso_disponivel': ferro_disponivel,
                    'receber_recurso': receber_ferro,
                    'input_recurso': input_ferro,
                    comerciante_disponivel,
                    checkbox,
                    btn_submit
                }

                analisar_envio_de_recursos(o);
            }
        }, 850);


        function analisar_envio_de_recursos(o) {
            if (o.recurso_disponivel > o.comerciante_disponivel * 1000) {
                console.log('MUITO RECURSOS DISPONIVEL, POUCO COMERCIANTE DISPONIVEL');

                if (o.comerciante_disponivel * 1000 <= o.receber_recurso) {
                    console.log('MANDAR TODOS COMERCIANTES, NAO VAI ENCHER O ARMAZEM');
                    o.checkbox.click();
                    $(o.input_recurso).val(o.comerciante_disponivel * 1000);
                    o.btn_submit.click();
                }
                else if (o.comerciante_disponivel * 1000 > o.receber_recurso) {
                    console.log('NÃO MANDAR TODOS COMERCIANTES SE NÃO VAI ENCHAR O ARMAZEM, MANDAR A QUANTIDADE QUE PRECISA RECEBER');
                    o.checkbox.click();
                    $(o.input_recurso).val(o.receber_recurso);
                    o.btn_submit.click();
                }
            }
            else if (o.comerciante_disponivel * 1000 > o.recurso_disponivel) {
                console.log('MUITO COMERCIANTE DISPONIVEL, NAO MARDAR TODOS COMERCIANTES');

                if (o.recurso_disponivel <= o.receber_recurso) {
                    console.log('MANDAR TUDO QUE TEM DISPONIVEL, NAO VAI ENCHAR O ARMAZEM');
                    o.checkbox.click();
                    $(o.input_recurso).val(o.recurso_disponivel);
                    o.btn_submit.click();
                }
                else if (o.recurso_disponivel > o.receber_recurso) {
                    console.log('NÃO MANDAR TUDO QUE TEM DISPONIVEL, VAI ENCHER O ARMAZEM');
                    o.checkbox.click();
                    $(o.input_recurso).val(o.receber_recurso);
                    o.btn_submit.click();
                }
            }
        }


        function get_capacidade_armazem() {
            let capacidade_armazem = parseInt($('#storage')[0].innerText);

            if (capacidade_armazem > 150000) {
                capacidade_armazem = 150000;
            } else {
                capacidade_armazem = capacidade_armazem - 10000;
            }

            return capacidade_armazem;
        }


        // #iron | #stone | #wood
        function get_recursos_no_armazem(class_name) {
            let recursos_no_armazem = parseInt($(class_name)[0].innerText);
            return recursos_no_armazem;
        }

        // .res.iron | .res.stone | .res.wood
        function get_recursos_chegando(class_name) {
            let recursos_chegando = parseInt($(class_name)[0].innerText.replace('.', ''));
            return recursos_chegando;
        }


        function get_recurso_disponivel_para_envio(tr, classe_name) {
            let recurso_disponivel_para_envio = parseInt($(tr).find(classe_name).text().trim().replace('.', ''));

            //Tirar as centenas, unidades e dezenas
            recurso_disponivel_para_envio = recurso_disponivel_para_envio - (recurso_disponivel_para_envio % 1000);

            // menor que 90.000 = aldeia full
            if (recurso_disponivel_para_envio < 100000) {
                recurso_disponivel_para_envio = recurso_disponivel_para_envio - 20000;
            }
            // maior que 100.000 = aldeia full ou nao full com muito recurso
            else if (recurso_disponivel_para_envio > 100000) {
                recurso_disponivel_para_envio = recurso_disponivel_para_envio - 90000;
            }

            if (recurso_disponivel_para_envio < 1000) {
                recurso_disponivel_para_envio = 0;
            }

            return recurso_disponivel_para_envio;
        }

        function get_mais_recursos(tr) {
            let madeira = parseInt($(tr).find('td.wood').text().trim().replace('.', ''));
            let argila = parseInt($(tr).find('td.stone').text().trim().replace('.', ''));
            let ferro = parseInt($(tr).find('td.iron').text().trim().replace('.', ''));


            if (madeira > argila && madeira > ferro) {
                return 'madeira'
            } else if (argila > madeira && argila > ferro) {
                return 'argila'
            } else {
                return 'ferro'
            }
        }
    }
})();