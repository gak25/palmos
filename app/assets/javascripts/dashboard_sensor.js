$('.sensor-nickname-form').submit(function(e) {
	var $form = $(this);
	$form.toggleClass('ignore');
	if ($form.hasClass('ignore')) {
		e.preventDefault();
		$form.find('input[type=text]').blur();
		setTimeout(function() {
			$form.submit();
		}, 0);
	}
});
