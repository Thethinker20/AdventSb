$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.navC').addClass('affixC');
        console.log("OK");
    } else {
        $('.navC').removeClass('affixC');
    }
});

$('.navTriggerC').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDivC").toggleClass("show_listC");
    $("#mainListDivC").fadeIn();

});