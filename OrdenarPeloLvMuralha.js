//$.getScript('https://code.jquery.com/jquery-3.3.1.js');

let listaTh = [];
let listaLv0 = [];
let listaLv1 = [];
let listaLv2 = [];
let listaLv3 = [];


let lista = $('#plunder_list tr');

$(lista).each(function (i) {
    let val = $($(this).find('td')[6]).html();

    if (i == 0 || i == 1) {
        listaTh.push(this);
    }
    
    if (val == 0) {
        listaLv0.push(this);
    }

    if (val == 1) {
        listaLv1.push(this);
    }

    if (val == 2) {
        listaLv2.push(this);
    }

    if (val == 3) {
        listaLv3.push(this);
    }
});

$('#plunder_list tbody').empty();

$(listaTh).each(function (i) {
    $('#plunder_list tbody').append(this);
});

$(listaLv0).each(function (i) {
    $('#plunder_list tbody').append(this);
});

$(listaLv1).each(function (i) {
    $('#plunder_list tbody').append(this);
});

$(listaLv2).each(function (i) {
    $('#plunder_list tbody').append(this);
});

$(listaLv3).each(function (i) {
    $('#plunder_list tbody').append(this);
});

