//Pegando os valores da tr de classe paciente e jogando em um array de nome trsPacientes
var trsPacientes = document.getElementsByClassName("paciente"); 

percorreArray(trsPacientes, function (pacienteTr){
								// pegando os valores pela class do tr e salvando nas variaveis usando o pacienteTr pra saber a posicao
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

							console.log(pacienteAtual.nome);						 


						});


