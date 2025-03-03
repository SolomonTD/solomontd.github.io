$(document).ready(function () {
    $("#slides").superslides({
        animation: 'fade',
        play: 5000
    });


    var typed = new Typed(".typed", {
        strings: ["Full-Stack Developer", "Desktop App Developer", "Graduate in CS"],
        typeSpeed: 60,
        loop: true,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        item: 4,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            967: {
                items: 4
            }
        }
    });

    var topOffset = $('.skill-section').offset().top;
    $(window).scroll(function () {
        if (window.pageYOffset > topOffset - $(window).height() + 200) {
            $(".chart").easyPieChart({
                easing: 'easeinout',
                barColor: '#2163e8',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

    var $grid = $('.items').isotope({
        itemSelector: '.grid-item'
    });
    $("#filters button").on("click", function () {
        var value = $(this).attr('data-name');
        $grid.isotope({
            filter: value
        });
    });

    $("#navigation li a").click(function (e) {
        e.preventDefault();
        var targetEl = $(this).attr("href");
        var targetPos = $(targetEl).offset().top;
        $("html,body").animate({
            scrollTop: targetPos - 50
        }, "slow");
    });

    const nav = $("#navigation");
    const nabTop = nav.offset().top;
    $(window).on("scroll", stickyNv);

    function stickyNv() {
        var body = $("body");
        if ($(window).scrollTop() >= nabTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }
});
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});