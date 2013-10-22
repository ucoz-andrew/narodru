var app = (function(){
	return {
		init: function() {},
		onLoad: function() {
			this.equalColHeight();
			this.slider();
		},
		equalColHeight: function() {
			var maxHeight = 0, columns = $('footer').find('.f-column');
			columns.each(function() {
				maxHeight = $(this).height() > maxHeight ? $(this).height() : maxHeight;
			});
			columns.height(maxHeight);
		},
		slider: function() {
			var slider = $('#slider'), els = slider.find('li'), elWidth = els.eq(0).outerWidth();
			var stopWidth = els.length * elWidth;
			slider.html(slider.html() + slider.html());
			var animate = function() {
				slider.animate({
					left: '-=' + elWidth + 'px'
				}, 500, function() {
					if (slider.css('left') === -stopWidth + 'px') {
						slider.css('left', '0');
					}
				});
				setTimeout(animate, 3000);
			};
			setTimeout(animate, 1000);
		}
	}
}());

$(window).load(function() {
	app.onLoad();
});