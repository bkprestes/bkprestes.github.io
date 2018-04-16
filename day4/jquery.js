$(function(){
	$('#preto').click(function(){
		$(this).attr('src', 'imagens/pixi-preto2.jpg')
	}).hover(function(){
		$(this).attr('src', 'imagens/pixi-preto2.jpg')
	},
	function(){
		$(this).attr('src', 'imagens/pixi-preto.jpg')
	});
});