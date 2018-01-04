// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$('form').on('focus', 'input[type=number]', function(e) {
	$(this).on('mousewheel.disableScroll', function(e) {
		e.preventDefault();
	});
});
$('form').on('blur', 'input[type=number]', function(e) {
	$(this).off('mousewheel.disableScroll');
});
