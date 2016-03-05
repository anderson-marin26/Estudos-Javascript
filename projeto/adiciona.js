var adiciona = document.querySelector("#adicionar-paciente");
adiciona.addEventListener("click",function(event){

								event.preventDefault();//previnindo ação padrão do form.

								var campoNome = document.querySelector("#campo-nome");
								var campoPeso = document.querySelector("#campo-peso");
								var campoAltura = document.querySelector("#campo-altura");

								var pacienteNovo = "<tr class='paciente'>"+
															"<td class='info-nome'>"+ campoNome.value +"</td>"+
															"<td class='info-peso'>"+ campoPeso.value +"</td>"+
															"<td class='info-altura'>"+ campoAltura.value +"</td>"+
															"<td class='info-imc'></td>"+
														"</tr>";

													//selecionando a tabela
								var tabela = document.querySelector("table");//pega somente o primeiro elemento.
								tabela.innerHTML = tabela.innerHTML + pacienteNovo;

								campoNome.value = "";
								campoPeso.value = "";
								campoAltura.value = "";
							});