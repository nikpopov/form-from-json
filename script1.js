$(document).ready(function(){

	$.getJSON('form.json', function(data) {
//		console.log(data);

		for(i=0; data.length; i++) {

			if(data[i].options) {
				data[i].options.forEach(function(item, j, arr) {
					$('<label>').attr('for', data[i].name).html(item).css({
						'display': 'inline-block',
						'width': '100px',
						'fontSize': '1.2em'
					}).appendTo('form');

					$('<input>').attr({
						'type': data[i].view,
						'name': data[i].name,
						'value': j
					}).css({
						'lineheight': '2',
						'margin': '10px 0 15px'
					}).appendTo('form')
				})
				$('<br>').appendTo('form');
			} else {
				$('<label>').attr('for', data[i].name).html(data[i].label).css({
					'display': 'inline-block',
					'width': '100px',
					'fontSize': '1.2em'
				}).appendTo('form');

				$('<input>').attr({
					'id':data[i].id,
					'type': data[i].view,
					'name': data[i].name,
					'placeholder': data[i].placeholder,
					'value': data[i].value
				}).css({
					'display': 'inline-block',
					'width': '100%',
					'fontSize': '1.5em',
					'borderRadius': '5px',
					'margin': '10px 0 15px'
				}).appendTo('form')
			}
		};
	});
});



