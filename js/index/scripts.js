(function($) {
    var vw = $(window),
        vd = $(document),
        vb = $('body'),
        vh = $('#headplusnav');

    var isMobile = {
        Android: function() {
            return navigator.userAgent.toLowerCase().match(/android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.toLowerCase().match(/blackberry/i);
        },
        iOS: function() {
            return navigator.userAgent.toLowerCase().match(/iphone|ipad|ipod/i);
        },
        Opera: function() {
            return navigator.userAgent.toLowerCase().match(/opera mini/i);
        },
        Windows: function() {
            return navigator.userAgent.toLowerCase().match(/iemobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    vd.ready(function (){
        if(isMobile.iOS()){
            vb.addClass('is-ios');
        };
        header_menu_toggle_init();
        header_menu_sticky_init();
        //custom_file_control_bung();
        //tabs_hash_toggle();
        //reg_form_init();
        //reg_test();
        //ajax_request();
        // input_tooltip_init();
//    popiver_init();
        //pagenav_init();
        //bx_slider_init();
        //feedback_form_init();
        //sharp_link_init();
        //sidebar_affix_init();
        //init_landing_countdown();
        //modal_youtube_init();
        //page_height_window_stretch();
        //vw.resize(function(){
            //page_height_window_stretch();
        //});
//    add_input_mask();
//    tooltip_init();
//    init_ekkolightbox();
//    bind_resize_video();
    });

// var br=this.getBoundingClientRect();
// var br=this.getOffset(elem)
// Top: br.top
// Left: br.left
// Right: br.right
// Bottom: br.bottom
    function getOffset(elem) {
        if (elem.getBoundingClientRect) {
            return getOffsetRect(elem);
        } else {
            return getOffsetSum(elem);
        }
        ;
    };
    function getOffsetSum(elem) {
        var top = 0, left = 0;
        while (elem) {
            top = top + parseInt(elem.offsetTop);
            left = left + parseInt(elem.offsetLeft);
            elem = elem.offsetParent;
        }
        ;
        return {top: top, left: left};
    };

    function getOffsetRect(elem) {
        var box = elem.getBoundingClientRect();
        var body = document.body;
        var docElem = document.documentElement;
        var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
        var clientTop = docElem.clientTop || body.clientTop || 0;
        var clientLeft = docElem.clientLeft || body.clientLeft || 0;
        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    };

    function header_menu_toggle_init() {
        var btnt = $('#menu-toggle, #menu-toggle-plus'),
            btnc = $('#menu-close');

        function header_menu_toggle(){
            if (!vh.hasClass('header-nav-in')){
                btnt.addClass('active');
                vh.addClass('header-nav-in');
            } else {
                btnt.removeClass('active');
                vh.removeClass('header-nav-in');
            };
        };

        btnt.on('click', function(){
            $(this).blur();
            header_menu_toggle();
        });
        btnc.on('click', function(){
            $(this).blur();
            header_menu_toggle()
        });

        var chink;
        vw.on('resize', function (){
            if ($('#container-header').length) {
                chink = getOffset($('#container-header')[0]);
                chink = chink.left + "px";
                $('#wrapper-navigation').css({
                    paddingLeft: chink
                });
            };
        });

        vw.trigger('resize');

        var navig = $('#menu-horr_menu');
        var navig_drop_list = navig.find('.dropdown');
        navig_drop_list.each(function () {
            var navig_drop = $(this);
            var navig_drop_menu = navig_drop.children('.sub-menu');
            var navig_drop_caret = $('<a href="javascript:void(0)"><span class="fas fa-angle-down"></span></a>');
            navig_drop_caret.on('click', function () {
                // console.info(navig_drop_menu);
                navig_drop_menu.slideToggle('normal');
            });
            navig_drop.children('a').after(navig_drop_caret);

        })

    };

    function header_menu_sticky_init() {
        vw.scroll(function () {
            if (vw.scrollTop() > 10) {
                if (!vh.hasClass('header-sticky')) {
                    vh.addClass('header-sticky');
                };
            } else {
                if (vh.hasClass('header-sticky')) {
                    vh.removeClass('header-sticky');
                };
            };
        });
        vw.trigger('scroll');
    };


})(jQuery)