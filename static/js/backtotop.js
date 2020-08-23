//Back to Top Button
if($('#pageContent').length) {
    $('#back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: $('#pageContent').offset().top - 58
        }, '300');
    });
} else {
    $('#back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });
}