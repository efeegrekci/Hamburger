$(document).ready(function () {

    // Resize Page Refresh
    $(window).bind('resize', function (e) {
        if (window.RT) clearTimeout(window.RT);
        window.RT = setTimeout(function () {
            this.location.reload(false);
        }, 100);
    });
    // Resize Page Refresh

    // Hamburger Click
    $('.hamburgerMenuButton').click(function () {
        $(".hamburgerMenuList").addClass("active")
    });
    $('.closeButton').click(function () {
        $(".hamburgerMenuList").removeClass("active")
    });
    // Hamburger Click

});