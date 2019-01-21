// ==UserScript==
// @name         Farm W.M.Coelho 2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       W.M.Coelho
// @match        https://*screen=am_farm*
// @include      https://*screen=am_farm*

// ==/UserScript==

$.getScript('https://cdn.jsdelivr.net/gh/williammartinscoelho/scriptTW/assistente02.js');

var listaDeLinhas = $('#plunder_list tr');
var tamanhoListaLinhas = listaDeLinhas.length;
var indexListaLinhas = 0;

var html = `
        <div style="float: left; width: 100%; margin-top: 15px;">
            <fieldset>
                <legend>Configurar Farm</legend>

                <div style="width: 100%; display: block;">
                    <p>*As verificações de condições são feitas em ordem (A, B, C)</p>
                    <p>*Para desligar o bot, clique em "Parar". Somente fechar o navegador/aba não para o bot!</p>
                </div>

                <div style="width: 100%; display: block;">
                    <p>
                        Enviar <b>(A)</b> em aldeias com muralha
                        <select id="expresaoMuralhaA">
                            <option value="==">igual á</option>
                            <option value="!=">diferente de</option>
                            <option value=">">maior que</option>
                            <option value="<">menor que</option>
                        </select>
                        
                        <select id="lvlMuralhaA">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        e quantidade de recursos
                        <select id="expresaoRecursosA">
                            <option value=">">maior que</option>
                            <option value="<">menor que</option>
                        </select>
                        
                        <input type="number" id="qtdRecursosA" min="0" step="1" value="0"/>
                    </p>
                </div>

                <div style="width: 100%; display: block;">
                    <p>
                        Enviar <b>(B)</b> em aldeias com muralha 
                        <select id="expresaoMuralhaB">
                            <option value="==">igual á</option>
                            <option value="!=">diferente de</option>
                            <option value=">">maior que</option>
                            <option value="<">menor que</option>
                        </select>
                        
                        <select id="lvlMuralhaB">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        e quantidade de recursos
                        <select id="expresaoRecursosB">
                            <option value=">">maior que</option>
                            <option value="<">menor que</option>
                        </select>
                        
                        <input type="number" id="qtdRecursosB" min="0" step="1" value="0"/>
                    </p>
                </div>
                
                <div style="width: 100%; display: block;">
                    <p>
                        Enviar <b>(C)</b> em aldeias com muralha 
                        <select id="expresaoMuralhaC">
                            <option value="==">igual á</option>
                            <option value="!=">diferente de</option>
                            <option value=">">maior que</option>
                            <option value="<">menor que</option>
                        </select>
                        
                        <select id="lvlMuralhaC">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        e quantidade de recursos
                        <select id="expresaoRecursosC">
                            <option value=">">maior que</option>
                            <option value="<">menor que</option>
                        </select>
                        
                        <input type="number" id="qtdRecursosC" min="0" step="1" value="0"/>
                    </p>
                </div>
                
                <div style="width: 100%; display: block;">
                    <button id="btnConf" onclick="configurar()">Configurar</button>
                    
                    <button id="btnIniciar" onclick="iniciar()">Iniciar</button>
                    
                    <button id="btnParar" onclick="parar()" style="display: ">Parar</button>
                </div>
            </fieldset>
        </div>`;

$('#plunder_list_filters').append(html);


setInterval(
    function () {
        //console.log(listaDeLinhas[indexListaLinhas]);
        indexListaLinhas += 1;
        let tempo = Math.floor((Math.random() * 1000) + 500);
        //console.log('Tempo: ', tempo)
        //console.log('Linha: ', indexListaLinhas)

        setTimeout(
            function () {
                //farmar(listaDeLinhas[indexListaLinhas]);
            }, tempo
        );

        if (indexListaLinhas > tamanhoListaLinhas) {
            indexListaLinhas = 0;
            //location.reload();
        }
    }, 1000
);

function configurar() {
    let expresaoMuralhaA = $('#expresaoMuralhaA').children("option:selected").val();
    let expresaoMuralhaB = $('#expresaoMuralhaB').children("option:selected").val();
    let expresaoMuralhaC = $('#expresaoMuralhaC').children("option:selected").val();

    let lvlMuralhaA = $('#lvlMuralhaA').children("option:selected").val();
    let lvlMuralhaB = $('#lvlMuralhaB').children("option:selected").val();
    let lvlMuralhaC = $('#lvlMuralhaC').children("option:selected").val();

    let expresaoRecursosA = $('#expresaoRecursosA').children("option:selected").val();
    let expresaoRecursosB = $('#expresaoRecursosB').children("option:selected").val();
    let expresaoRecursosC = $('#expresaoRecursosC').children("option:selected").val();

    let qtdRecursosA = $('#qtdRecursosA').val();
    let qtdRecursosB = $('#qtdRecursosB').val();
    let qtdRecursosC = $('#qtdRecursosC').val();

    let strA = `valMuralha ${expresaoMuralhaA} ${lvlMuralhaA} && valRecursos ${expresaoRecursosA} ${qtdRecursosA}`;
    let strB = `valMuralha ${expresaoMuralhaB} ${lvlMuralhaB} && valRecursos ${expresaoRecursosB} ${qtdRecursosB}`;
    let strC = `valMuralha ${expresaoMuralhaC} ${lvlMuralhaC} && valRecursos ${expresaoRecursosC} ${qtdRecursosC}`;

    localStorage.setItem('w@strA', strA);
    localStorage.setItem('w@strB', strB);
    localStorage.setItem('w@strC', strC);
}

function farmar(tr) {
    let valMuralha = getLvlMuralha(tr);
    let valRecursos = getTotalResursos(tr);

    if (valMuralha == 0 && valRecursos > 800) {
        farmA(tr);
    } else if (valMuralha == 1 && valRecursos > 800) {
        farmC(tr);
    } else if (valMuralha >= 2) {
        farmB(tr);
    }
}


function farmA(tr) {
    console.log("farmA");
    let a = $(tr).find('a.farm_icon_a')[0];
    a.click();
}

function farmB(tr) {
    console.log("farmB");
    let b = $(tr).find('a.farm_icon_b')[0];
    b.click();
}

function farmC(tr) {
    console.log("farmC");
    let c = $(tr).find('a.farm_icon_c')[0];
    c.click();
}


function getLvlMuralha(tr) {
    let lvlMuralha = $($(tr).find('td')[6]).html();

    //Verifica se não tem informação do lvl da muralha
    if (lvlMuralha == '?') {
        return 10;
    } else {
        return parseInt(lvlMuralha);
    }

}

function getTotalResursos(tr) {
    let gen_total = $(tr).find('.gen_total b');
    gen_total = $(gen_total).html();

    if (gen_total != undefined) {
        gen_total = parseInt(gen_total.replace('(', '').replace(')', ''));
    }

    return gen_total;
}
