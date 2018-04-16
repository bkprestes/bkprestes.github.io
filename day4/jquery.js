$(function(){

	$('#preto').hover(function(){
		$(this).attr('src', 'imagens/pixi-preto2.jpg')
	},
	function(){
		$(this).attr('src', 'imagens/pixi-preto.jpg')
	});

	$('#branco').hover(function(){
		$(this).attr('src', 'imagens/pixi-branco2.jpg')
	},
	function(){
		$(this).attr('src', 'imagens/pixi-branco.jpg')
	});

	$('#vermelho').hover(function(){
		$(this).attr('src', 'imagens/pixi-vermelho2.jpg')
	},
	function(){
		$(this).attr('src', 'imagens/pixi-vermelho.jpg')
	});

	$('#azul').hover(function(){
		$(this).attr('src', 'imagens/pixi-azul2.jpg')
	},
	function(){
		$(this).attr('src', 'imagens/pixi-azul.jpg')
	});

	$('#todos').hover(function(){
		$(this).attr('src', 'imagens/pixi-lado.jpg')
	},
	function(){
		$(this).attr('src', 'imagens/pixi-todos.jpg')
	});
});