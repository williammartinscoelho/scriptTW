var lista = $('#plunder_list tr');

$(lista).each(function (i) {
    let val = $($(this).find('td')[6]).html();

    if (val == 0) {
        //$($(this).find('td')[6]).css('background-color', 'green');
        //$($(this).find('td')[6]).css('color', 'white');

        $($(this).find('td')).css('background-color', 'green');
        $($(this).find('td')).css('color', 'white');
    }
});