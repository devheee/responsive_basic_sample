$(function () {
    // top_banner
    function top_bannerClose() {
        $('.top_banner').addClass('on')
    }
    $('.top_banner i').on('click', top_bannerClose)

    $('.main_slide .itm01').addClass('on');
    // mainSlide
    var mainSlideOption = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
    }


    var mainSlide = $('.main_slide').slick({ ...mainSlideOption, autoplaySpeed: 4000 })

    function mainSlideEvent(e, s, c) {
        const current = $('.main_slide .slick-current')
        //console.log(e, s, c)
        current.addClass('on').siblings().removeClass('on')
        $('.mainVisual .main_slide_num span').text(c + 1);
        $('.mainVisual .main_slide_num strong').text(s.slideCount);
    }

    mainSlide.on('afterChange', mainSlideEvent);

    const slideLeftArrow = $('.mainVisual .left_arrow');
    const slideRightArrow = $('.mainVisual .right_arrow');

    slideLeftArrow.on('click', () => { mainSlide.slick('slickPrev') })
    slideRightArrow.on('click', () => { mainSlide.slick('slickNext') })

    const slideDots = $('.mainVisual .main_slide_dots li button');

    function slideDotsLink() {
        const idx = $(this).parent().index();
        mainSlide.slick('slickGoTo', idx)
    }

    slideDots.on('click', slideDotsLink);









})