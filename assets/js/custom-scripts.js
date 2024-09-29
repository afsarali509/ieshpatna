$(document).ready(function() {
    "use strict";
    var s = $("nav > div ul ul li");
    $("nav > div ul ul").each(function() {
        var o = 50;
        $(this).find(s).each(function() {
            $(this).css({
                transitionDelay: o + "ms"
            }), o += 50
        })
    });
    var o = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $("nav ul li a").each(function() {
        ($(this).attr("href") == o || "" == $(this).attr("href")) && $(this).parent("li").addClass("active").parent().parent().addClass("active").parent().parent().addClass("active")
    });
    var o = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $(".menu-wrap ul li a").each(function() {
        ($(this).attr("href") == o || "" == $(this).attr("href")) && $(this).parent("li").addClass("active").parent().parent().addClass("active-parent").parent().parent().addClass("active-parent")
    });
    var e = window.innerWidth;
    $(".wow").length > 0 && new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0
    }).init(), $(".rspn-mnu-btn").on("click", function() {
        return $(".rsnp-mnu").addClass("slidein"), !1
    }), $(".rspn-mnu-cls").on("click", function() {
        $(".rsnp-mnu").removeClass("slidein")
    }), $(".rsnp-mnu li.menu-item-has-children > a").on("click", function() {
        return $(this).parent().siblings("li").children("ul").slideUp(), $(this).parent().siblings("li").removeClass("active"), $(this).parent().children("ul").slideToggle(), $(this).parent().toggleClass("active"), !1
    }), $(".slc-wrp > select").length > 0 && $(".slc-wrp > select").selectpicker(), $(".qty").length > 0 && $(".qty").TouchSpin(), e > 851 && $(".post-detail-wrap > div.row > div").length > 0 && $(".post-detail-wrap > div.row > div").theiaStickySidebar({
        additionalMarginTop: 40,
        additionalMarginBottom: 40
    }), $(".toggle").length > 0 && $(function() {
        $("#toggle .toggle-content").hide(), $("#toggle h4:first").next().slideDown(500).parent().addClass("active"), $("#toggle h4").on("click", function() {
            $(this).next().is(":hidden") && ($("#toggle h4").next().slideUp(500).parent().removeClass("active"), $(this).next().slideDown(500).parent().toggleClass("active"))
        })
    }), $.isFunction($.fn.counterUp) && $(".counter").counterUp({
        delay: 10,
        time: 2e3
    }), $.isFunction($.fn.fancybox) && $('[data-fancybox],[data-fancybox="gallery"]').fancybox({}), $("#email-form").length && $("#submit").on("click", function() {
        var s = $("#email-form .fname").val(),
            o = $("#email-form .email").val();
        if ("" == s || "" == o) return $("#email-form .response").html('<div class="failed alert alert-warning">Please fill the required fields.</div>'), !1;
        $.ajax({
            url: "sendemail.php",
            method: "POST",
            data: $("#email-form").serialize(),
            beforeSend: function() {
                $("#email-form .response").html('<div class="text-info"><img src="assets/images/preloader.gif"> Loading...</div>')
            },
            success: function(s) {
                $("form").trigger("reset"), $("#email-form .response").fadeIn().html(s), setTimeout(function() {
                    $("#email-form .response").fadeOut("slow")
                }, 5e3)
            },
            error: function() {
                $("#email-form .response").fadeIn().html(data)
            }
        })
    }), e < 851 && ($(".rsnp-mnu").length > 0 && new PerfectScrollbar(".rsnp-mnu"), $.isFunction($.fn.slick) && ($(".res-caro").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: !0,
        arrows: !1,
        centerPadding: "0",
        focusOnSelect: !0,
        responsive: [{
            breakpoint: 851,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: !0,
                arrows: !1
            }
        }, {
            breakpoint: 771,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: !0,
                arrows: !1
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                centerMode: !0,
                arrows: !1,
                dots: !1
            }
        }]
    }), $(".res-caro2").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: !0,
        arrows: !1,
        centerPadding: "0",
        focusOnSelect: !0,
        responsive: [{
            breakpoint: 851,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: !0,
                arrows: !1
            }
        }, {
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: !0,
                arrows: !1
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                centerMode: !0,
                arrows: !1,
                dots: !1
            }
        }]
    }))), $.isFunction($.fn.slick) && ($(".feat-caro").slick({
        arrows: !0,
        initialSlide: 0,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: !0,
        autoplay: !1,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 5e3,
        draggable: !0,
        dots: !1,
        pauseOnDotsHover: !0,
        pauseOnFocus: !1,
        pauseOnHover: !1,
        prevArrow: "<button type='button' class='slick-prev'><i class='flaticon-back'></i></button>",
        nextArrow: "<button type='button' class='slick-next'><i class='flaticon-next'></i></button>",
        responsive: [{
            breakpoint: 981,
            settings: {
                autoplay: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !0,
                dots: !1
            }
        }, {
            breakpoint: 851,
            settings: {
                autoplay: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !0,
                dots: !1
            }
        }, {
            breakpoint: 770,
            settings: {
                autoplay: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                dots: !0
            }
        }, {
            breakpoint: 576,
            settings: {
                autoplay: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                dots: !0
            }
        }]
    }), $(".testi-caro").slick({
        arrows: !1,
        initialSlide: 0,
        infinite: !0,
        slidesToShow: 2,
        slidesToScroll: 1,
        fade: !1,
        autoplay: !1,
        autoplaySpeed: 5e3,
        speed: 1e3,
        draggable: !0,
        dots: !0,
        pauseOnDotsHover: !0,
        pauseOnFocus: !1,
        pauseOnHover: !1,
        responsive: [{
            breakpoint: 981,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 851,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $(".proj-caro").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false, // Globally set arrows to false
    centerPadding: "0",
    autoplay: true,
    focusOnSelect: true,
    vertical: false,
    // prevArrow: "<button type='button' class='slick-prev'><i class='flaticon-arrow-pointing-to-left'></i></button>",
    // nextArrow: "<button type='button' class='slick-next'><i class='flaticon-arrow-pointing-to-right'></i></button>",
    responsive: [
        {
            breakpoint: 1605,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1370,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 981,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 851,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
            },
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            },
        },
    ],
}),
 $(".proj-caro2").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: !1,
        arrows: !0,
        centerPadding: "0",
        focusOnSelect: !0,
        vertical: !1,
        prevArrow: "<button type='button' class='slick-prev'><i class='flaticon-arrow-pointing-to-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next'><i class='flaticon-arrow-pointing-to-right'></i></button>",
        responsive: [{
            breakpoint: 981,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: !0
            }
        }, {
            breakpoint: 851,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: !0,
                dots: !1
            }
        }, {
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: !0,
                dots: !1
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                dots: !1
            }
        }]
    }), $(".team-caro").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: !1,
        arrows: !0,
        autoplay: !0,
        speed: 2e3,
        centerPadding: "0",
        focusOnSelect: !0,
        vertical: !1,
        prevArrow: "<button type='button' class='slick-prev'><i class='flaticon-arrow-pointing-to-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next'><i class='flaticon-arrow-pointing-to-right'></i></button>",
        responsive: [{
            breakpoint: 1605,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                arrows: !0
            }
        }, {
            breakpoint: 1370,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                arrows: !0
            }
        }, {
            breakpoint: 1030,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: !0
            }
        }, {
            breakpoint: 981,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: !0
            }
        }, {
            breakpoint: 851,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: !0
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: !1,
                dots: !1
            }
        }]
    }), $(".team-caro2").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: !1,
        arrows: !0,
        margin: 30,
        autoplay: !0,
        autoplaySpeed: 2e3,
        speed: 2e3,
        centerPadding: "0",
        focusOnSelect: !0,
        vertical: !1,
        prevArrow: "<button type='button' class='slick-prev'><i class='flaticon-arrow-pointing-to-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next'><i class='flaticon-arrow-pointing-to-right'></i></button>",
        responsive: [{
            breakpoint: 1605,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: !0
            }
        }, {
            breakpoint: 1370,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: !0
            }
        }, {
            breakpoint: 1030,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: !0
            }
        }, {
            breakpoint: 981,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: !0
            }
        }, {
            breakpoint: 851,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: !0
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: !1,
                dots: !1
            }
        }]
    }), $(".shop-detail-caro").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !1,
        asNavFor: ".shop-detail-nav-caro"
    }), $(".shop-detail-nav-caro").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".shop-detail-caro",
        dots: !1,
        arrows: !0,
        centerMode: !1,
        vertical: !0,
        centerPadding: "0px",
        focusOnSelect: !0,
        prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-up'></i></button>",
        nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-down'></i></button>",
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: !0
            }
        }, {
            breakpoint: 850,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: !1,
                vertical: !1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: !1
            }
        }]
    }), $(".post-caro").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: !1,
        arrows: !0,
        centerPadding: "0",
        focusOnSelect: !0,
        vertical: !1,
        prevArrow: "<button type='button' class='slick-prev'><i class='flaticon-arrow-pointing-to-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next'><i class='flaticon-arrow-pointing-to-right'></i></button>",
        responsive: [{
            breakpoint: 1605,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: !0
            }
        }, {
            breakpoint: 981,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: !0
            }
        }, {
            breakpoint: 851,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: !0
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                dots: !1
            }
        }]
    }))
}), $(window).on("scroll", function() {
    "use strict";
    var s = $("header").innerHeight();
    $(window).scrollTop() >= s ? $("body").addClass("sticky") : $("body").removeClass("sticky")
});