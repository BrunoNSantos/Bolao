$(document).ready(function(){

	//GET Clubes
	var getClubes = $.getJSON("http://bolao-server.no-ip.org:8080/bolaoShow/service/clubes", function(data) {
			// para ver cada item do array de json
			//alert("Usuários: " + data[1].clube);
			
			$.each(data, function() {
  				$.each(this, function(name, value) {
    				$("#tabela_clubes").append('<tr><td>'+ value.clube +'</td><td>'+ value.nome +'</td></tr>');
  				});
			});
	});
	console.log(getClubes);
	//GET Usuario
	var getUsuario = $.getJSON("http://bolao-server.no-ip.org:8080/bolaoShow/service/usuarios", function(data) {			
			$.each(data, function() {
  				$.each(this, function(name, value) {  					
  					
    				$("#table_usuario").append('<tr><td>'+ value.usuario +'</td><td>'+ value.nome +'</td></tr>');
  				});
			});
	});
	console.log(getUsuario);
	//GET Campeonato
	var getCampeonato = $.getJSON("http://bolao-server.no-ip.org:8080/bolaoShow/service/campeonatos", function(data) {			
			$.each(data, function() {
  				$.each(this, function(name, value) {  					  					
    				$("#table_campeonato").append('<tr><td>'+value.campeonato+'</td><td>'+
    					value.nome+'</td><td>'+value.ano+'</td><td>'+value.descricao+'</td></tr>');    				
  				});
			});
	});
	console.log(getCampeonato);
	
	
		//TESTE POST
		
		var json = {nome: "Campeonato Kawe", ano: "2013"};
		var funcaoPost = $.ajax({
    		type: "POST",
    		url: "http://bolao-server.no-ip.org:8080/bolaoShow/service/campeonatos",
    		data: JSON.stringify(json),
    		Accept : "application/json",
    		contentType: "application/json",
    		dataType: "jsonp"
    	});
	
		console.log(funcaoPost);
		

	var codID = 3;

	
		
		var mensagem1 = $('.mensagem1');
		var mensagem2 = $('.mensagem2');

		var funcao1 = mensagem1.fadeOut(3000, function(){
			mensagem2.fadeIn(1000).delay(3000).fadeOut(1000);
			mensagem1.delay(5000).fadeIn(3000).fadeOut(1000);
			mensagem2.delay(5000).fadeIn(3000).fadeOut(1000);
			mensagem1.delay(7000).fadeIn(3000).fadeOut(1000);
			mensagem2.delay(9000).fadeIn(3000).fadeOut(1000);
			mensagem1.delay(7000).fadeIn(3000).fadeOut(1000);
			mensagem2.delay(7000).fadeIn(3000).fadeOut(1000);
			mensagem1.delay(7000).fadeIn(3000).fadeOut(1000);
			mensagem2.delay(7000).fadeIn(3000).fadeOut(1000);
			mensagem1.delay(7000).fadeIn(3000);
		});
		

		var imagem1 = $('.img1');
		var imagem2 = $('.img2');
		var imagem3 = $('.img3');

		var funcao2 = imagem1.fadeIn(5000).fadeOut(1000, function(){
			imagem2.delay(1000).fadeIn(3000).fadeOut(2000);
			imagem3.delay(6000).fadeIn(3000).fadeOut(2000);
			imagem1.delay(11000).fadeIn(3000).fadeOut(2000);
			imagem2.delay(11000).fadeIn(3000).fadeOut(2000);
			imagem3.delay(11000).fadeIn(3000);
		});


	$('#cadastrar').mouseenter(function(){
		codID++;
		var nome = document.form_cadastro.nome.value;
		var email = document.form_cadastro.email.value;
		var rg = document.form_cadastro.rg.value;
		var cpf = document.form_cadastro.cpf.value;
		
		var tabela = $('#table_apostador');

		tabela.append('<tr><td id="nome'+codID+'">'+nome+'</td><td id="email'+codID+'">'+email+'</td><td id="rg'+codID+'">'+rg+'</td><td id="cpf'+codID+'">'+cpf+'</td><td><a title="Editar" onClick="editarApostador('+codID+')"><img class="icon-edit"></td><td> <a title="Remover" onClick="removerApostador(this)">  <img  class="icon-remove"></a> </td>  </tr>');

	});

	$('.icon-edit').click(function(){
		window.alert($('#nome1').value);
	})


});

function removerApostador(codigo){

	document.getElementById("table_apostador").deleteRow(codigo.parentNode.parentNode.rowIndex);
}
