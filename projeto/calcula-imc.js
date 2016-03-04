function calculaImc(paciente){
	if (paciente.altura != 0){
		var imc = paciente.peso / (paciente.altura * paciente.altura);
		return imc;
	} 
	else{
		console.log("Nao executei porque a altura eh igual a zero");
	}
}

//Pegando os valores da tr de classe paciente e jogando em um array de nome trsPacientes
var trsPacientes = document.getElementsByClassName("paciente"); 

for(var posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++){

	var pacienteTr = trsPacientes[posicaoAtual];
	// pegando os valores pela class do tr e salvando nas variaveis usando o pacienteTr pra saber a posicao
	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];


	//criando objeto
	var pacienteAtual = {"nome" : tdNome.textContent , "peso" : tdPeso.textContent , "altura" : tdAltura.textContent};

	var imc = calculaImc(pacienteAtual);

	//colocando o valor na variavel pra exibir no campo imc
	var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc;

		console.log(imc);
}
