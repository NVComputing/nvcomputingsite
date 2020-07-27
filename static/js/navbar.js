//Anton Barchukov

window.onscroll = function() {
	navScroll();
};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navScroll() {
	// Get the navbar
	var navbar = document.getElementById('navbar');

	// Get the offset position of the navbar
	var sticky = navbar.offsetTop;
	if (window.pageYOffset > sticky) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}

// betternavbarjs
$(function() {
	function e() {
		s.addClass('overflow-hidden'), o.show(), setTimeout(function() {
			s.addClass('side-menu-visible'), d.fadeIn();
		}, 50);
	}

	function n() {
		s.removeClass('side-menu-visible'), d.fadeOut(), setTimeout(function() {
			o.hide(), s.removeClass('overflow-hidden');
		}, 400);
	}

	var s = $('body'), i = $('.navbar'), a = $('.navbar-collapse');
	s.append('<div class="side-menu-overlay"></div>');
	var d = $('.side-menu-overlay');
	s.append('<div id="side-menu"></div>');
	var o = $('#side-menu');
	o.append('<button class="close"><span aria-hidden="true">×</span></button>');
	var t = o.find('.close');
	o.append('<div class="contents"></div>');
	var l = o.find('.contents');
	i.hasClass('better-bootstrap-nav-left') && o.addClass('side-menu-left'), a.on('show.bs.collapse', function(n) {
		n.preventDefault();
		var s = $(this).html();
		l.html(s), e();
	}), t.on('click', function(e) {
		e.preventDefault(), n();
	}), d.on('click', function(e) {
		n();
	}), $(window).resize(function() {
		!a.is(':visible') && s.hasClass('side-menu-visible') ? (o.show(), d.show()) : (o.hide(), d.hide());
	});
});

