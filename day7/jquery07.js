$(window).on('load', function(){
	var sinopse = $('.sinopse');
	var trailer = $('.trailer');
	var episodios = $('.episodios');
	var galeria = $('.galeria');

	$('#sinopse').click(function(){
		sinopse.addClass('show');
		sinopse.removeClass('hide');

		trailer.removeClass('show');
		trailer.addClass('hide');
		episodios.removeClass('show');
		episodios.addClass('hide');
		galeria.removeClass('show');
		galeria.addClass('hide');
	});

	
	$('#trailer').click(function(){
		trailer.addClass('show');
		trailer.removeClass('hide');

		sinopse.removeClass('show');
		sinopse.addClass('hide');
		episodios.removeClass('show');
		episodios.addClass('hide');
		galeria.removeClass('show');
		galeria.addClass('hide');
	});

	$('#episodios').click(function(){
		episodios.addClass('show');
		episodios.removeClass('hide');

		sinopse.removeClass('show');
		sinopse.addClass('hide');
		trailer.removeClass('show');
		trailer.addClass('hide');
		galeria.removeClass('show');
		galeria.addClass('hide');
	});

	$('#galeria').click(function(){
		galeria.addClass('show');
		galeria.removeClass('hide');

		sinopse.removeClass('show');
		sinopse.addClass('hide');
		trailer.removeClass('show');
		trailer.addClass('hide');
		episodios.removeClass('show');
		episodios.addClass('hide');
	});

	$('#titulo').click(function(){

		galeria.addClass('hide');
		galeria.removeClass('show');

		sinopse.removeClass('show');
		sinopse.addClass('hide');
		trailer.removeClass('show');
		trailer.addClass('hide');
		episodios.removeClass('show');
		episodios.addClass('hide');
	});


});