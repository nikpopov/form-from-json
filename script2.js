$(window).on('load', function() {

	var int = setTimeout(function(){
		$('#4').prev('label').css('display', 'none');
		$('#4').attr('type', 'hidden');
		$('#5').prev('label').css('display', 'none');
		$('#5').attr('type', 'hidden');
	}, 100);

	var e = setTimeout(function() {
		$('input:radio').bind('change', function() {
			var value = $("form input[type='radio']:checked").val();

			switch (value) {
				case '0': {
					$('#4').prev('label').css('display', 'none');
					$('#4').attr('type', 'hidden');
					$('#5').attr('type', 'text');
					$('#5').prev('label').css('display', 'inline-block');
					}
					break;
				case '1': {
					$('#5').prev('label').css('display', 'none');
					$('#5').attr('type', 'hidden');
					$('#4').attr('type', 'text');
					$('#4').prev('label').css('display', 'inline-block');
					}
					break;
				default:
					console.log('Nothing selected')
			}
		});
	}, 100)
})