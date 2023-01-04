$(function () {
    // top_banner
    function top_bannerClose() {
        $('.top_banner').addClass('on')
    }
    $('.top_banner i').on('click', top_bannerClose)

    $('.main_slide .itm01').addClass('on');

    // mainSlide
    $('.main_slide').on('init afterChange', function (e, s, c) {
        // c = 0,1,2
        var current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainVisual .main_slide_num span').text(c ? (c + 1) : 1);
        $('.mainVisual .main_slide_num strong').text(s.slideCount);
        $('.mainVisual .main_slide_dots li').removeClass('on')
        $('.mainVisual .main_slide_dots li').eq(c ? c : 0).addClass('on')

        $('.mainVisual .main_slide_pic').css({ background: 'url(./img/lesedilarona0' + (c ? (c + 1) : 1) + '.jpg) no-repeat center center/cover' })
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    })

    $('.mainVisual .main_slide_arrows button:first-child').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.mainVisual .main_slide_arrows button:last-child').on('click', function () {
        $('.main_slide').slick('slickNext')
    });


    $('.mainVisual .main_slide_play button:first-child').on('click', function () {
        $('.main_slide').slick('slickPlay')
    });
    $('.mainVisual .main_slide_play button:last-child').on('click', function () {
        $('.main_slide').slick('slickPause')
    });

    $('.mainVisual .main_slide_dots button').on('click', function () {
        var idx = $(this).parent().index();
        $('.main_slide').slick('slickGoTo', idx);
    });

    $('.mainVisual .main_slide_dots li').on('click', function () {
        // var idx = $(this).index(); // 0, 1 ,2
        // eq(0) = nth-child(1)
        $('.mainVisual .main_slide_dots li').removeClass('on')
        $(this).addClass('on')
    })

    $('.mainPromotion .promotion_play button:first-child').on('click', function () {
        $('.mainPromotion video').trigger('play')
    });
    $('.mainPromotion .promotion_play button:last-child').on('click', function () {
        $('.mainPromotion video').trigger('pause')
    });


    $("#bgndVideo").YTPlayer({
        videoURL: 'egqvF0lTuTg',
        containment: '.mainYoutubeBg',
        autoPlay: true,
        mute: true,
        showControls: false,
        playOnlyIfVisible: true,
    });


    $('.mainYoutubeBg .play').on('click', function () {
        $("#bgndVideo").YTPPlay();
    })
    $('.mainYoutubeBg .pause').on('click', function () {
        $("#bgndVideo").YTPPause();
    })


    $('.product_slide').slick({
        slidesToShow: 5,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $('.product_slide_controller>button:first-child').on('click', function () {
        $('.product_slide').slick('slickPrev')
    });

    $('.product_slide_controller>button:last-child').on('click', function () {
        $('.product_slide').slick('slickNext')
    });

    $('.product_slide_controller ul button').on('click', function () {
        var idx = $(this).parent().index();
        $('.product_slide').slick('slickGoTo', idx)
    })


    $('.mainCustomer .main_tab_menu>li button').on('click', function () {
        var idx = $(this).parent().index();
        $('.mainCustomer .main_tab_content>li').removeClass('on');
        $('.mainCustomer .main_tab_content>li').eq(idx).addClass('on');

        $('.mainCustomer .main_tab_menu>li').removeClass('on');
        $(this).parent().addClass('on');
    })


    $('#f_link select').on('change', function () {
        var lnk = $(this).val();
        lnk && window.open(lnk);

        // value 값이 있으면 새창 띄워라
        // if (lnk) {
        //     window.open(lnk);
        // }

    })


    $('.m_open').on('click', function () {
        $('.header').toggleClass('on')
        $('.m_btn').toggleClass('on')
    })

    $('.header').on('scroll wheel', function () {
        if ($(this).hasClass('on')) {
            return false;
        }

    })

    // to top button

    $(window).on('scroll', function () {
        //스크롤양 구함
        var sct = $(window).scrollTop();
        console.log(sct)
        if (sct > 1000) {
            $('.to_top').addClass('on');
        } else {
            $('.to_top').removeClass('on');
        }

        //fadeIn() , fadeOut(), ...제이쿼리 애니메이션이라서 javascript, react, vue 에서 사용불가
        // if (sct > 1000) {
        //     $('.to_top').fadeIn();
        // } else {
        //     $('.to_top').fadeOut();
        // }

    })

    $('.to_top').on('click', function () {
        $('html, body').stop().animate({ scrollTop: 0 }, 600)
    })


    $('.header .search_toggle button').on('click', function () {
        // $('.header .search').slideToggle();
        $('.header .search').toggleClass('on');
    })



})