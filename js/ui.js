var app = (function(){
	var obj =  {
		init: function() {
			var s = document.createElement('p').style;
			obj.supportsTransitions = 'transition' in s ||
				'WebkitTransition' in s ||
				'MozTransition' in s ||
				'msTransition' in s ||
				'OTransition' in s;
		},
		onLoad: function() {
			obj.equalColHeight();
			obj.slider();
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
			var animate;
			if (obj.supportsTransitions) {
				animate = function() {
					slider.css({
						left: '-=' + elWidth + 'px'
					});
					setTimeout(animate, 3000);
				};
				slider.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
					if (slider.css('left') === -stopWidth + 'px') {
						slider.removeClass('transitioned');
						slider.css('left', '0');
						setTimeout(function() {
							slider.addClass('transitioned');
						}, 100);
					}
				});
			}
			else {
				animate = function() {
					slider.animate({
						left: '-=' + elWidth + 'px'
					}, 600, function() {
						if (slider.css('left') === -stopWidth + 'px') {
							slider.css('left', '0');
						}
					});
					setTimeout(animate, 3000);
				};
			}
			setTimeout(animate, 1000);
		}
	};
	return {
		init: obj.init,
		onLoad: obj.onLoad
	};
}());

app.init();
$(window).load(function() {
	app.onLoad();
});