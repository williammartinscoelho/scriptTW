





javascript: $(document).ready(function () {
    var linhas = $('tr.nowrap');


    for (let i = 0; i < linhas.length; i++) {
        for (let j = 1; j < linhas.length; j++) {
            //$(a).find('td')[22].innerText.replace(',','.')

            let a = parseFloat($(linhas[j - 1]).find('td')[22].innerText.replace(',', '.'));
            let b = parseFloat($(linhas[j]).find('td')[22].innerText.replace(',', '.'));

            if (a > b) {
                let aux = linhas[j - 1];
                linhas[j - 1] = linhas[j];
                linhas[j] = aux;
            }

        }
    }


    $('tbody tr.nowrap').remove();


    $('#combined_table > tbody').append(linhas);
});