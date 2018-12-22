function calcularQtdTropasAtk() {
	let listaLinhas = $('#plunder_list tr');
	let listaGen = [];

	$(listaLinhas).each(function (i) {
	    let gen_total = $(this).find('.gen_total b');
	    gen_total = $(gen_total).html();
	    listaGen.push(gen_total);
	});

	//tirar os parenteses e converter pra numero
	$(listaGen).each(function (i) {
	    if (i > 1) {
	        listaGen[i] = parseInt(listaGen[i].replace('(', '').replace(')', ''));
	    }
	});


	let espada = 25;
	let lanca = 15;

	$(listaGen).each(function(i) {
		let qtdTropas = 0;
		let saque = 0;
		let saqueTotal = listaGen[i];

		while(saque < saqueTotal) {
			qtdTropas = qtdTropas + 1;
			saque = saque + espada + lanca;
		}

		let strTropasSaque = `(T:${qtdTropas}/S:${saque})`;

		let td = $($(listaLinhas[i]).find('td')[5]);
		td.append(`<br><span><b>${strTropasSaque}</b></span>`);
	});

}

calcularQtdTropasAtk();