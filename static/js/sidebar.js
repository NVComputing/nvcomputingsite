//Get Content Value from Markdown Files
let contentList = $("#contents").next("ul");

if (contentList[0] !== undefined) {
    $("#sidenav").html(contentList[0]);
    $("#contents").remove();
}

//Use Smooth Scrolling for Links within the Sidebar
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top - 70,
        },
        300,
        'linear'
    )
});
