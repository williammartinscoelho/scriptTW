var listaLinhas = $('#plunder_list tr');
var listaGen = [];

$(listaLinhas).each(function (i) {
    var gen_total = $(this).find('.gen_total b');
    gen_total = $(gen_total).html();
    //gen_total = gen_total.replace( "(", '' );
    //gen_total = gen_total.replace( ")", '' );
    listaGen.push(gen_total);
});

$(listaGen).each(function (i) {
    if (i > 1) {
        listaGen[i] = parseInt(listaGen[i].replace('(', '').replace(')', ''));
    }
});


for (j = 0; j < 1000; j++) {
    for (i = 2; i < listaGen.length - 1; i++) {

        if (listaGen[i] < listaGen[i + 1]) {
            var temp = listaGen[i];
            listaGen[i] = listaGen[i + 1];
            listaGen[i + 1] = temp;

            var tempLinha = listaLinhas[i];
            listaLinhas[i] = listaLinhas[i + 1];
            listaLinhas[i + 1] = tempLinha;
        }
    }
}

$('#plunder_list tbody').empty();
$('#plunder_list tbody').append(listaLinhas);


