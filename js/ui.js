var app = (function(){
	return {
		init: function() {},
		onLoad: function() {
			var maxHeight = 0, columns = $('footer').find('.f-column');
			columns.each(function() {
				maxHeight = $(this).height() > maxHeight ? $(this).height() : maxHeight;
			});
			columns.height(maxHeight);
		}
	}
}());

$(window).load(function() {
	app.onLoad();
});