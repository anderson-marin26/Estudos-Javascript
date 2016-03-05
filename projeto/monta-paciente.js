function montaPaciente(pacienteTr){
	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

	//criando objeto
	var pacienteAtual = {"nome" : tdNome.textContent ,
						 "peso" : tdPeso.textContent ,
						 "altura" : tdAltura.textContent,
						 "pegaImc" : function(){//criando função anonima
						 	if (this.altura != 0){
								var imc = this.peso / (this.altura * this.altura);
								return imc;
							} 
							else{
								console.log("Nao executei porque a altura eh igual a zero");
							}
						 }};

	var imc = pacienteAtual.pegaImc();

	//colocando o valor na variavel pra exibir no campo imc
	var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc;

		console.log(imc);
}