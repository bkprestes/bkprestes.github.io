$(window).on('load', function(){
	var sinopse = $('.sinopse');
	var trailer = $('.trailer');
	var episodios = $('.episodios');
	var atores = $('.atores');

	$('#sinopse').click(function(){
		sinopse.addClass('show');
		sinopse.removeClass('hide');

		trailer.removeClass('show');
		trailer.addClass('hide');
	});

	
	$('#trailer').click(function(){
		trailer.addClass('show');
		trailer.removeClass('hide');

		sinopse.removeClass('show');
		sinopse.addClass('hide');
	});

	$('#episodios').click(function(){
		episodios.addClass('show');
		episodios.removeClass('hide');

		sinopse.removeClass('show');
		sinopse.addClass('hide');
		trailer.removeClass('show');
		trailer.addClass('hide');
	});

	$('#atores').click(function(){
		atores.addClass('show');
		atores.removeClass('hide');

		sinopse.removeClass('show');
		sinopse.addClass('hide');
		trailer.removeClass('show');
		trailer.addClass('hide');
		episodios.removeClass('show');
		episodios.addClass('hide');
	});


});