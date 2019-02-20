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


var coord = prompt('Digite a coordenada da aldeia a ser apoiada:'); //420|631
var tempo = prompt('Em quanto tempo bate o atk?:');

var listaDeAldeias = $('tr.nowrap');

$(listaDeAldeias).each(function (i) {
    //Coordenada da aldeia atual
    let minhaCoordenada = this.childNodes[3].innerText.substr(-15).trim().substring(1, 8);

    $.ajax({
        type: 'GET',
        url: `https://cors.io/?http://br.twstats.com/br91/ajax.php?mode=dcalc&o=${minhaCoordenada}&t=${coord}`,
        dataType: 'text',
        beforeSend: function () {
        },
        success: function (retorno) {
            let linhaComTempos = $(retorno).find('tr td');

            $(linhaComTempos).each(function (j) {
                $(this).addClass('tempo');
                listaDeAldeias[i].append(this);
            });

            calcularTempo();
        },
        error: function (xhr) {
            console.log(xhr);
            alert("Erro!");
        }
    });
});



function calcularTempo() {
    var listaNovaDeAldeias = $('tr.nowrap');

    $(listaNovaDeAldeias).each(function (i) {
        var celulas = $(this).find('.tempo');

        $(celulas).each(function(i){
            if (this.innerText <= tempo) {
                $(this).css('color','green'); 
                $(this).css('font-weight','bold');
            } else {
                $(this).css('color','red');
            }
        });
    });
}