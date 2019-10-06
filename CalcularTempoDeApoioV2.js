javascript: $(document).ready(function () {
    var html = `
<th style="text-align:center">
    Dist.
</th>

<th style="text-align:center">
    <a href="/game.php?village=25997&amp;screen=overview_villages&amp;&#10;&#9;&#9;&#9;&#9;page=-1&#10;&#9;&#9;&#9;&#9;&amp;order=spear&#10;&#9;&#9;&#9;&#9;&amp;dir=desc&amp;mode=combined&amp;group=0">
        <img src="https://dsbr.innogamescdn.com/asset/4cfd523b/graphic/unit/unit_spear.png" alt="" title="Lanceiro">
    </a>
</th>

<th style="text-align:center">
    <a href="/game.php?village=25997&amp;screen=overview_villages&amp;&#10;&#9;&#9;&#9;&#9;page=-1&#10;&#9;&#9;&#9;&#9;&amp;order=sword&#10;&#9;&#9;&#9;&#9;&amp;dir=desc&amp;mode=combined&amp;group=0">
        <img src="https://dsbr.innogamescdn.com/asset/4cfd523b/graphic/unit/unit_sword.png" alt="" title="Espadachim">
    </a>
</th>

<th style="text-align:center">
    <a href="/game.php?village=25997&amp;screen=overview_villages&amp;&#10;&#9;&#9;&#9;&#9;page=-1&#10;&#9;&#9;&#9;&#9;&amp;order=axe&#10;&#9;&#9;&#9;&#9;&amp;dir=desc&amp;mode=combined&amp;group=0">
        <img src="https://dsbr.innogamescdn.com/asset/4cfd523b/graphic/unit/unit_axe.png" alt="" title="Bárbaro">
    </a>
</th>

<th style="text-align:center">
    <a href="/game.php?village=25997&amp;screen=overview_villages&amp;&#10;&#9;&#9;&#9;&#9;page=-1&#10;&#9;&#9;&#9;&#9;&amp;order=archer&#10;&#9;&#9;&#9;&#9;&amp;dir=desc&amp;mode=combined&amp;group=0">
        <img src="https://dsbr.innogamescdn.com/asset/4cfd523b/graphic/unit/unit_archer.png" alt="" title="Arqueiro">
    </a>
</th>

<th style="text-align:center">
    <a href="/game.php?village=25997&amp;screen=overview_villages&amp;&#10;&#9;&#9;&#9;&#9;page=-1&#10;&#9;&#9;&#9;&#9;&amp;order=spy&#10;&#9;&#9;&#9;&#9;&amp;dir=desc&amp;mode=combined&amp;group=0">
        <img src="https://dsbr.innogamescdn.com/asset/4cfd523b/graphic/unit/unit_spy.png" alt="" title="Explorador">
    </a>
</th>

<th style="text-align:center">
    <a href="/game.php?village=25997&amp;screen=overview_villages&amp;&#10;&#9;&#9;&#9;&#9;page=-1&#10;&#9;&#9;&#9;&#9;&amp;order=light&#10;&#9;&#9;&#9;&#9;&amp;dir=desc&amp;mode=combined&amp;group=0">
        <img src="https://dsbr.innogamescdn.com/asset/4cfd523b/graphic/unit/unit_light.png" alt="" title="Cavalaria leve">
    </a>
</th>

<th style="text-align:center">
    <a href="/game.php?village=25997&amp;screen=overview_villages&amp;&#10;&#9;&#9;&#9;&#9;page=-1&#10;&#9;&#9;&#9;&#9;&amp;order=marcher&#10;&#9;&#9;&#9;&#9;&amp;dir=desc&amp;mode=combined&amp;group=0">
        <img src="https://dsbr.innogamescdn.com/asset/4cfd523b/graphic/unit/unit_marcher.png" alt="" title="Arqueiro a cavalo">
    </a>
</th>

<th style="text-align:center">
    <a href="/game.php?village=25997&amp;screen=overview_villages&amp;&#10;&#9;&#9;&#9;&#9;page=-1&#10;&#9;&#9;&#9;&#9;&amp;order=heavy&#10;&#9;&#9;&#9;&#9;&amp;dir=desc&amp;mode=combined&amp;group=0">
        <img src="https://dsbr.innogamescdn.com/asset/4cfd523b/graphic/unit/unit_heavy.png" alt="" title="Cavalaria pesada">
    </a>
</th>

<th style="text-align:center">
    <a href="/game.php?village=25997&amp;screen=overview_villages&amp;&#10;&#9;&#9;&#9;&#9;page=-1&#10;&#9;&#9;&#9;&#9;&amp;order=ram&#10;&#9;&#9;&#9;&#9;&amp;dir=desc&amp;mode=combined&amp;group=0">
        <img src="https://dsbr.innogamescdn.com/asset/4cfd523b/graphic/unit/unit_ram.png" alt="" title="Aríete">
    </a>
</th>

<th style="text-align:center">
    <a href="/game.php?village=25997&amp;screen=overview_villages&amp;&#10;&#9;&#9;&#9;&#9;page=-1&#10;&#9;&#9;&#9;&#9;&amp;order=catapult&#10;&#9;&#9;&#9;&#9;&amp;dir=desc&amp;mode=combined&amp;group=0">
        <img src="https://dsbr.innogamescdn.com/asset/4cfd523b/graphic/unit/unit_catapult.png" alt="" title="Catapulta">
    </a>
</th>

<th style="text-align:center">
    <a href="/game.php?village=25997&amp;screen=overview_villages&amp;&#10;&#9;&#9;&#9;&#9;page=-1&#10;&#9;&#9;&#9;&#9;&amp;order=knight&#10;&#9;&#9;&#9;&#9;&amp;dir=desc&amp;mode=combined&amp;group=0">
        <img src="https://dsbr.innogamescdn.com/asset/4cfd523b/graphic/unit/unit_knight.png" alt="" title="Paladino">
    </a>
</th>

<th>
    <a href="/game.php?village=25997&amp;screen=overview_villages&amp;&#10;&#9;&#9;&#9;&#9;page=-1&#10;&#9;&#9;&#9;&#9;&amp;order=snob&#10;&#9;&#9;&#9;&#9;&amp;dir=desc&amp;mode=combined&amp;group=0">
        <img src="https://dsbr.innogamescdn.com/asset/4cfd523b/graphic/unit/unit_snob.png" alt="" title="Nobre">
    </a>
</th>
`;

    //Coloca os icones das tropas no head
    $($('#combined_table tbody tr')[0]).append(html);


    var coord = prompt('Digite a coordenada da aldeia a ser apoiada:'); //
    //var coord = "428|679";
    var tempo = prompt('Em quanto tempo bate o atk?:');

    var xA = parseInt(coord.split('|')[0]);
    var yA = parseInt(coord.split('|')[1]);

    var listaDeAldeias = $('tr.nowrap');

    var tempo_tropas = {
        "Spears": 18,
        "Swords": 22,
        "Archers": 18,
        "Axes": 18,
        "Explorador": 09,
        "CavalariaLeve": 10,
        "MountedArcher": 10,
        "CavalariaPesada": 11,
        "Ariete": 30,
        "Catapulta": 30,
        "Paladino": 10,
        "Nobre": 35
    }

    $(listaDeAldeias).each(function (i) {
        //Coordenada da aldeia atual
        let coordenadaAtual = this.childNodes[3].innerText.substr(-15).trim().substring(1, 8);
        let xB = parseInt(coordenadaAtual.split('|')[0]);
        let yB = parseInt(coordenadaAtual.split('|')[1]);
        let distancia = Math.sqrt(Math.pow((xB - xA), 2) + Math.pow((yB - yA), 2)).toFixed(2);

        let td_distancia = `<td class="tempo">${distancia}</td>`;
        let td_spears = `<td class="tempo">${segundosParaHora(distancia * tempo_tropas.Spears)}</td>`;
        let td_Swords = `<td class="tempo">${segundosParaHora(distancia * tempo_tropas.Swords)}</td>`;
        let td_Archers = `<td class="tempo">${segundosParaHora(distancia * tempo_tropas.Archers)}</td>`;
        let td_Axes = `<td class="tempo">${segundosParaHora(distancia * tempo_tropas.Axes)}</td>`;
        let td_Explorador = `<td class="tempo">${segundosParaHora(distancia * tempo_tropas.Explorador)}</td>`;
        let td_CavalariaLeve = `<td class="tempo">${segundosParaHora(distancia * tempo_tropas.CavalariaLeve)}</td>`;
        let td_MountedArcher = `<td class="tempo">${segundosParaHora(distancia * tempo_tropas.MountedArcher)}</td>`;
        let td_CavalariaPesada = `<td class="tempo">${segundosParaHora(distancia * tempo_tropas.CavalariaPesada)}</td>`;
        let td_Ariete = `<td class="tempo">${segundosParaHora(distancia * tempo_tropas.Ariete)}</td>`;
        let td_Catapulta = `<td class="tempo">${segundosParaHora(distancia * tempo_tropas.Catapulta)}</td>`;
        let td_Paladino = `<td class="tempo">${segundosParaHora(distancia * tempo_tropas.Paladino)}</td>`;
        let td_Nobre = `<td class="tempo">${segundosParaHora(distancia * tempo_tropas.Nobre)}</td>`;

        $(this).append(td_distancia);
        $(this).append(td_spears);
        $(this).append(td_Swords);
        $(this).append(td_Archers);
        $(this).append(td_Axes);
        $(this).append(td_Explorador);
        $(this).append(td_CavalariaLeve);
        $(this).append(td_MountedArcher);
        $(this).append(td_CavalariaPesada);
        $(this).append(td_Ariete);
        $(this).append(td_Catapulta);
        $(this).append(td_Paladino);
        $(this).append(td_Nobre);
    });

    calcularTempo();

    function calcularTempo() {
        var listaNovaDeAldeias = $('tr.nowrap');

        $(listaNovaDeAldeias).each(function (i) {
            var celulas = $(this).find('.tempo');

            $(celulas).each(function (i) {
                if (this.innerText <= tempo) {
                    $(this).css('color', 'green');
                    $(this).css('font-weight', 'bold');
                } else {
                    $(this).css('color', 'red');
                }
            });
        });
    }


    function segundosParaHora(m) {
        var segundos = m * 60;
        var horas = segundos / 3600;
        var r_horas = horas - Math.floor(horas);
        var minutos = r_horas * 60;
        var r_minutos = minutos - Math.floor(minutos);
        var segundos = r_minutos * 60;

        horas = Math.floor(horas);
        minutos = Math.floor(minutos);
        segundos = Math.round(segundos);

        if (horas < 10) horas = "0" + horas;
        if (minutos < 10) minutos = "0" + minutos;
        if (segundos < 10) segundos = "0" + segundos;

        return `${horas}:${minutos}:${segundos}`
    }
});