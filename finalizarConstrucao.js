

var celula = $('.nowrap.lit-item')[0];



if (celula != undefined) {
    setInterval(
        function() {
            console.log(celula.textContent.trim());

            var valCelula = celula.textContent.trim();

            if (valCelula < '0:02:55') {
                console.log('CLICK');
                $('.order_feature.btn.btn-btr.btn-instant-free')[0].click();                
                
                setTimeout(
                    function() {
                        location.reload();
                    }, 1500
                );
            }
        }, 1000
    );
}