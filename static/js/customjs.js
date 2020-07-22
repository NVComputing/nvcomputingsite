//Anton Barchukov

window.onscroll = function() {
	navScroll();
};

window.onload = function() {
	this.urlRewrite();
	if (document.getElementById('carouselID') != null && document.getElementById('card-list') != null) {
		this.agenda();
	}
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

function agenda() {
	//New Cards Go On Top
	var cards = [
		{
			'title': 'Agenda 3/5',
			'description': 'New ACSL Topics',
			'img': 'agenda35',
			'link': 'https://docs.google.com/presentation/d/1hogqDJN_5mTzTrFMTVX4JdRHlQxV_jPulWBRo0Sk4zE/',
			'show': '',
		},
		{
			'title': 'Agenda 2/20',
			'description': 'ProCom Check-In',
			'img': 'agenda220',
			'link': 'https://docs.google.com/presentation/d/1z6WyAHx7AExBFo2W8fLttfUEl4Zzx6z3JMnYHFEBpRs/',
			'show': '',
		},
		{
			'title': 'Agenda 1/23',
			'description': 'List Processing Language',
			'img': 'agenda123',
			'link': 'https://docs.google.com/presentation/d/1N5v8Umz1VxszmMjQmnsaPPtpXPpUs5qyRP-tbPUrmp4/',
			'show': '',
		},
		{
			'title': 'Agenda 1/16',
			'description': 'Pre-fix/In-fix/Post-fix Notation',
			'img': 'agenda116',
			'link': 'https://docs.google.com/presentation/d/1SHTwNv2nw2fNBbM3sGG2Ny8vYHskap3NXILlJ5mykoI/',
			'show': '',
		},
		{
			'title': 'Agenda 1/9',
			'description': 'Bit-String Flicking',
			'img': 'agenda19',
			'link': 'https://docs.google.com/presentation/d/1A22RWND7cZupfLUT2pj7zA_szOaVkeFw3a9YXPfqewQ/',
			'show': '',
		},
		{
			'title': 'Agenda 12/5',
			'description': 'Short Answer Practice',
			'img': 'agenda1205',
			'link': 'https://docs.google.com/presentation/d/1YsrvSt0GDoGEx1wZHtn2zt5QNuvtrFf8lFl50w8S6nc/',
			'show': '',
		},
		{
			'title': 'Agenda 11/14',
			'description': 'Computer Number Systems',
			'img': 'agenda1114',
			'link': 'https://docs.google.com/presentation/d/1jiak1NpmuSD4k4votU-67mJtgWjQT0TkzMG2oScYCEc/',
			'show': '',
		},
		{
			'title': 'Agenda 11/7',
			'description': 'ArrayList Practice',
			'img': 'agenda1024', //same image
			'link': 'https://docs.google.com/presentation/d/1AqaTBw7ehM5uvPuY8MbrHNL_X2eOjJV8sHrWaFqN_cI/',
			'show': '',
		},
		{
			'title': 'Agenda 10/31',
			'description': 'Happy Halloween!',
			'img': 'agenda1031',
			'link': 'https://docs.google.com/presentation/d/1L279-PChPT2HgKsvQ5mDZQZtlRdsjb45gtBsddtrsv0/',
			'show': '',
		},
		{
			'title': 'Agenda 10/24',
			'description': 'Practice, Practice, Practice!',
			'img': 'agenda1024',
			'link': 'https://docs.google.com/presentation/d/1nYXbKczkPRNhWhTvazU1zncR1AaAJrzunw20wwNIl0I/',
			'show': '',
		},
		{
			'title': 'Agenda 10/17',
			'description': 'Fee Collection for Contest',
			'img': 'agenda926', //same image as 926
			'link': 'https://docs.google.com/presentation/d/1pIx1ggAZQN1aF9r97dwhCinaHcQitX-U296bjy2pSlk/',
			'show': '',
		},
		{
			'title': 'Agenda 10/10',
			'description': 'Codeforces Registration',
			'img': 'agenda926',
			'link': 'https://docs.google.com/presentation/d/1B7c5TFj5bM03UEm1P5HLDoj3gzWRtzcaWIc0hQiGEzo/',
			'show': '',
		},
		{
			'title': 'Agenda 9/19',
			'description': 'Registration and ACSL Team',
			'img': 'agenda912', //same image as 912
			'link': 'https://docs.google.com/presentation/d/1ZhoPvxPNKG2ctBEypKe5vpPQImJ-JNB6sBaPbIFoxp8/',
			'show': '',
		},
		{
			'title': 'Agenda 9/12',
			'description': 'First Meeting of the Year!',
			'img': 'agenda912',
			'link': 'https://docs.google.com/presentation/d/1fiZ_e-4rm9CuWl_9iG0qHq-YJpLc0lL_WHZmECFiNhY/',
			'show': '',
		},
	];

	cards.forEach(function(element) {
		if (element.img == '') {
			element.img = 'agendanone';
		}
		if (element.link == '') {
			element.link = 'https://drive.google.com/drive/folders/1JMPmSETWBihRM0-6KlEnV0D9FaqzaQ3I';
		}
		if (element.description == '') {
			element.description = 'Latest Agenda';
		}
		if (element.show != '') {
			element.show = 'display: none !important;';
		}
	});

	if (cards[0].show != '') {
		document.getElementById('carouselID').innerHTML += `
            <div class="carousel-item active">
                <a href="` + cards[1].link + `" target="__blank"><img class="d-block w-100" src="img/` + cards[1].img + `.png" alt="First Slide"></a>
                <div class="d-none d-md-block pt-2 carousel-caption-custom">
                <h3>` + cards[1].title + `</h3>
                <p>` + cards[1].description + `</p>
                </div>
            </div>
            <div class="carousel-item">
                <a href="` + cards[2].link + `" target="__blank"><img class="d-block w-100" src="img/` + cards[2].img + `.png" alt="Second Slide"></a>
                <div class="d-none d-md-block pt-2 carousel-caption-custom">
                <h3>` + cards[2].title + `</h3>
                <p>` + cards[2].description + `</p>
                </div>
            </div>
            <div class="carousel-item">
                <a href="` + cards[3].link + `" target="__blank"><img class="d-block w-100" src="img/` + cards[3].img + `.png" alt="Third Slide"></a>
                <div class="d-none d-md-block pt-2 carousel-caption-custom">
                <h3>` + cards[3].title + `</h3>
                <p>` + cards[3].description + `</p>
                </div>
            </div>
 `;
	} else {
		document.getElementById('carouselID').innerHTML += `
            <div class="carousel-item active">
                <a href="` + cards[0].link + `" target="__blank"><img class="d-block w-100" src="img/` + cards[0].img + `.png" alt="First Slide"></a>
                <div class="d-none d-md-block pt-2 carousel-caption-custom">
                <h3>` + cards[0].title + `</h3>
                <p>` + cards[0].description + `</p>
                </div>
            </div>
            <div class="carousel-item">
                <a href="` + cards[1].link + `" target="__blank"><img class="d-block w-100" src="img/` + cards[1].img + `.png" alt="Second Slide"></a>
                <div class="d-none d-md-block pt-2 carousel-caption-custom">
                <h3>` + cards[1].title + `</h3>
                <p>` + cards[1].description + `</p>
                </div>
            </div>
            <div class="carousel-item">
                <a href="` + cards[2].link + `" target="__blank"><img class="d-block w-100" src="img/` + cards[2].img + `.png" alt="Third Slide"></a>
                <div class="d-none d-md-block pt-2 carousel-caption-custom">
                <h3>` + cards[2].title + `</h3>
                <p>` + cards[2].description + `</p>
                </div>
            </div>
 `;
	}

	cards.forEach(function(element) {
		document.getElementById('card-list').innerHTML += `
    <div class="col-md-4 mt-2" style="` + element.show + `">
       <div class="card">
          <a href="` + element.link + `" target="__blank"><img class="card-img-top" src="img/` + element.img + `.png" alt="` + element.title + `"></a>
          <div class="card-body">
             <h5 class="card-title border-bottom pb-3">` + element.title + `</h5>
             <p class="card-text-custom">` + element.description + `</p>
             <a href="` + element.link + `" class="btn btn-md btn-info float-right" target="__blank">Read more</a>
          </div>
       </div>
    </div>`;
	});
}

function urlRewrite() {
	//URL Rewrite (GitHub Pages Special Fam)
	if (location.origin != 'file://') {
		//NAVBAR ITEMS
		document.getElementById('navimgref-sm').setAttribute('href', '/');
		document.getElementById('navimgref-lg').setAttribute('href', '/');
		document.getElementById('homeref').setAttribute('href', '/');
		document.getElementById('aboutref').setAttribute('href', 'about');
		document.getElementById('meetingsummariesref').setAttribute('href', 'meetingsummaries');
		document.getElementById('contactref').setAttribute('href', 'contact');
		//Other Items
		if (document.getElementById('beginbuttonref') != null) {
			document.getElementById('beginbuttonref').setAttribute('href', 'about');
		}
		if (document.getElementById('contactinforef') != null) {
			document.getElementById('contactinforef').setAttribute('href', 'contact');
		}
		if (document.getElementById('questionsref') != null) {
			document.getElementById('questionsref').setAttribute('href', 'contact');
		}
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

