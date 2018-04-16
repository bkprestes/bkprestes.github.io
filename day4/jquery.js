$(function(){

	$('#preto').hover(function(){
		$(this).attr('src', 'imagens/pixi-preto2.jpg')
	},
	function(){
		$(this).attr('src', 'imagens/pixi-preto.jpg')
	});

	$('#branco').hover(function(){
		$(this).attr('src', 'imagens/pixi-branco2.jpg')
		$('.navbar').removeClass('bg-dark')
		$('.navbar').addClass('bg-light')
	},
	function(){
		$(this).attr('src', 'imagens/pixi-branco.jpg')
		$('.navbar').removeClass('bg-light')
		$('.navbar').addClass('bg-dark')
	});

	$('#vermelho').hover(function(){
		$(this).attr('src', 'imagens/pixi-vermelho2.jpg')
	},
	function(){
		$(this).attr('src', 'imagens/pixi-vermelho.jpg')
	});

	$('#azul').hover(function(){
		$(this).attr('src', 'imagens/pixi-azul2.jpg')
		$('.navbar').removeClass('bg-dark')
		$('.navbar').addClass('bg-primary')
	},
	function(){
		$(this).attr('src', 'imagens/pixi-azul.jpg')
		$('.navbar').removeClass('bg-primary')
		$('.navbar').addClass('bg-dark')
	});

	$('#todos').hover(function(){
		$(this).attr('src', 'imagens/pixi-lado.jpg')
	},
	function(){
		$(this).attr('src', 'imagens/pixi-todos.jpg')
	});
});