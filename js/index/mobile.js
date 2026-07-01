var buyPage = '';

var direction = "rtl" == $("body").data("direction") ? !0 : !1,
    ieVersion = getInternetExplorerVersion(),
    debugSite = window.debugSite || !1,
    mobile = detectMobile();
	
$(window).scroll(function() {
    topMenuStick("scroll");
    if ($("body").hasClass("mobile-menu-on")) {
        var c = $("body").scrollTop(),
            b = $("#mobileMenu"),
            d = b.position().top + b.outerHeight(!0);
        (c > d + 40 || c < b.position().top - 100) && $("body").removeClass("mobile-menu-on")
    }
});


function topMenuStick(c) {
    var b = $(".js-sticToolbar"),
        d = $(".page-header").height(),
        a = b.data("blockheight") || 90,
        b = $(window).scrollTop(),
        d = d - a;
    "scroll" == c && $("body").addClass("stick-anim");
    b > d ? $("body").addClass("stick-toolbar") : $("body").removeClass("stick-toolbar")
}

function getInternetExplorerVersion() {
    var c = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (c = parseFloat(RegExp.$1));
    return c
}





function setLocation(c) {
    window.location = c
}

function detectMobile() {
    return 640 >= window.innerWidth ? !0 : !1
}

function detectSafari() {
    var c = navigator.appVersion;
    return -1 != c.indexOf("Safari") && -1 == c.indexOf("Chrome") ? !0 : !1
}

function imageTopAlignment(c) {
    c.find("img").not(".show-m").each(function(b, c) {
        var a = $(this).parent(),
            f = $(this).height();
        0 == f && (f = $(this).attr("height"));
        a = 1 == a.next().length ? a.next().outerHeight() : a.prev().outerHeight();
        $(this).css("margin-top", (a - f) / 2)
    })
}

function resizeSwitchLanguage() {
    var c = $(window).outerHeight(),
        b = $("#height").outerHeight();
    $("#switchLanguageCon").css({
        "max-height": c - b - 60,
        "overflow-y": "auto"
    })
}

function colAlignment() {
    var c = [];
    $(".js-colAlignment .js-colAlignmentItem").css("height", "");
    $(".js-colAlignment .js-colAlignmentItem").each(function(b, a) {
        var f = $(this).height();
        c.push(f)
    });
    var b = Math.max.apply(Math, c);
    $(".js-colAlignment .js-colAlignmentItem").height(b)
}
function colAlignment2(c, b) {
    var d = b || "js-colAlignmentItem";
    c.each(function(a, b) {
        var c = [],
            h = $(this).find("." + d);
        h.css("height", "");
        h.each(function(a, b) {
            var d = $(this).height();
            c.push(d)
        });
        var k = Math.max.apply(Math, c);
        h.height(k)
    })
}
$(document).ready(function() {
    function c() {
        var a = $(".js-nojailInfoBar");
        null === readCookie("nojailInfoBar") && a.show();
        a.on("click", ".js-close", function(b) {
            b.preventDefault();
            a.hide();
            createCookie("nojailInfoBar", "1")
        })
    }

    function b(a) {
        var b = a.replace("#tab-", "");
        $(".js-tab a").each(function(b, c) {
            $(this).attr("href") == a ? $(this).addClass("on") : $(this).removeClass("on")
        });
        $("[data-tab]").each(function(a, c) {
            $(this).data("tab") == b ? $(this).addClass("on") : $(this).removeClass("on")
        })
    }

    function d(a) {
        var b = a.replace("#tab-",
            "");
        $(".js-buyTab a").each(function(b, c) {
            $(this).attr("href") == a ? $(this).addClass("on") : $(this).removeClass("on")
        });
        $(".js-buyPack").each(function(a, c) {
            $(this).data("id") == b ? $(this).addClass("on") : $(this).removeClass("on")
        });
        var c = [],
            d = "";
        $(".js-buyNoteBlock").each(function(a, b) {
            c.push($(this).data("id"))
        });
        d = $.inArray(b, c);
        d = -1 != d ? c[d] : c[0];
        $(".js-buyNoteBlock").removeClass("on");
        $('.js-buyNoteBlock[data-id="' + d + '"]').addClass("on")
    }

    function a(a, b) {
        var c = $('.js-buyPcol[data-product="' + a + '"]').find(".js-buyPcolW").html();
        b.find(".js-buyPcolW").html(c);
        b.find(".js-moveBuyColTitle").length && (c = b.find(".js-moveBuyColTitle").val(), b.find(".js-buyPcolW .js-title").text(c))
    }

    function f(a, b) {
        var c = $('.js-buyPcol[data-product="' + a + '"]').find(".js-buyList").html();
        b.append(c);
        if (b.find(".js-moveBuyColTitle").length) {
            var c = b.find('.js-moveBuyColTitle[data-product="' + a + '"]').val(),
                d = b.attr("class").split(" ")[0];
            b.prepend('<h3 class="' + d + '__t">' + c + "</h3>")
        }
    }
    topMenuStick("load");
    detectSafari() && $("body").addClass("br-safari");
    $(".js-nojailInfoBar").length && c();

    $(".js-tab").on("click", "a", function() {
        b($(this).attr("href"))
    });
    if (0 != $(".js-tab").length) {
        var g = [],
            h = window.location.hash;
        $(".js-tab a").each(function(a, b) {
            g.push($(this).attr("href"))
        });
        h = -1 != $.inArray(h, g) ? h : g[0];
        b(h)
    }
    initHomeImg("ready"); - 1 != location.href.indexOf(buyPage.split(".")[0]) && $("a").each(function() {
        var a = $(this).attr("href");
        /*a = (void 0 == a ? "" : a).toString(); - 1 === a.indexOf(location.pathname) && -1 !== a.indexOf(location.hostname) && $(this).attr("target", "_blank")*/
    });

    $(".js-openWindowPopup").on("click", function(a) {
        a.preventDefault();
        a = $(this).attr("href");
        var b = $(this).data("width") || 750,
            c = $(this).data("height") || 700;
        window.open(a, "", "scrollbars=1, width=" + b + ", height=" +
            c)
    });
    $(".js-headTool").on("click", ".js-headToolItem", function(a) {
        a.preventDefault();
        $(this).parents(".js-headTool").find(".js-headToolItem").removeClass("on");
        $(this).addClass("on")
    });
    $(".js-headTool").on("click", ".js-headToolItem.on", function(a) {
        a.preventDefault();
        $(this).removeClass("on")
    });
    $("body").on("click", function() {
        $(".js-headTool .js-headToolItem").removeClass("on")
    });
    $(".js-headToolItem").next().on("click", function(a) {
        a.stopPropagation()
    });
    $(".js-headTool").on("click", function(a) {
        a.stopPropagation()
    });
    resizeSwitchLanguage();
    $(".js-headMenuSub").each(function(a, b) {
        subMenuInnert($(this));
        subMenuActive($(this))
    });
    imageTopAlignment($("#featureImageBlock"));
    $(".js-ratingHover").length && $(".js-ratingHover").rating({
        callback: function(a) {
            $(this).closest(".js-ratingHoverBlock").find(".js-ratingHoverVal").val(a)
        }
    });
    $(".js-toolTip").length && $(".js-toolTip").each(function(a, b) {
        var c = $(this).data("tooltip");
        void 0 != c && $(this).append('&nbsp;<i class="tooltip"><div class="tooltip__wrap"><span class="tooltip__c">' +
            c + "</span></div></i>")
    });

    $("#toogleMenuBtn").on("click", function(a) {
        a.preventDefault();
        $("body").toggleClass("mobile-menu-on");
        a = 0;
        var b = $("body").scrollTop(),
            c = $("#mobileMenu"),
            d = c.outerHeight(!0);
        $("body").outerHeight(!0) < b + d ? (a = b - d, $("body").add("html").animate({
            scrollTop: b - d
        }, 200)) : a = b;
        c.css("top", a);
        $(".js-headMenuSub a").each(function(a,
                                             b) {
            var c = $(this).data("mobile");
            "" != c && $(this).text(c)
        })
    });
    $(document).on("click", ".mobile-menu-on #mainBlock", function(a) {
        $("body").removeClass("mobile-menu-on")
    });
    $(".js-buyListShow").on("click", function(a) {
        a.preventDefault();
        $(this).toggleClass("on");
        $(this).parents(".js-buyPcolW").find(".js-buyList").toggleClass("mobile-on")
    });
    $("#mobileSelectLanguage").change(function() {
        var a = $(this).val();
        window.location.href = a
    });
    $(".js-mobileLoginIn").on("click", function(a) {
        a.preventDefault();
        $(this).parent().nextAll(".js-mobileLoginInForm").slideToggle(300)
    });

    colAlignment();
    var m = $("#textSpoiler");
    m.on("click", ".js-textSpoilerTitle",
        function() {
            m.toggleClass("on")
        });

    $("#overlay").on("click", function() {
        modalOnDisable()
    });

    0 != $(".js-buyTab").length && (g = [], h = window.location.hash, $(".js-buyTab a").each(function(a, b) {
        g.push($(this).attr("href"))
    }), h = -1 != $.inArray(h, g) ? h : g[0], d(h));
    colAlignment2($(".js-alignmentBuy"), "js-buyList");
    a("phone-Premium", $(".js-moveBuyCol").eq(0));
    a("desktop-Basic", $(".js-moveBuyCol").eq(1));
    $(document).on({
        mouseenter: function() {
            $(".js-moveBuyCol").addClass("on")
        },
        mouseleave: function() {
            $(".js-moveBuyCol").removeClass("on")
        }
    }, ".js-showBundleCol");
    $(document).on("click", ".js-showBundleCol", function(a) {
        a.preventDefault()
    });
    f("phone-Premium", $('.js-moveBuyColList[data-product="phone-Premium"]'));
    f("desktop-Basic", $('.js-moveBuyColList[data-product="desktop-Basic"]'));
    colAlignment2($(".js-alignmentBuy"), "js-buyPack");
    colAlignment2($(".js-buyNoteBlockAlignment"));
    (function() {
        if ($("#paymentP").length) {
            var a = getUrlVars()["var"],
                b = 15,
                c = {
                    5: "ALL5OFF",
                    15: "PM15FD",
                    30: "ALL30OFF"
                };
            $.each({
                5: "8e3e7d69058f547f74e72dc6ae891528",
                15: "a1115ebe265fd646920bcd557vc15b520",
                30: "49805a5015a9409b40fd3595430d48be"
            }, function(c, d) {
                a == d && (b = parseInt(c))
            });


            d.addDiscountToTitle();
            d.addDiscountToRadionList()
        }
    })();


    debugSite && $(".js-gaFaq").length && ($(".js-gaFaq").each(function(a, b) {
        var c = $(this).position().top;
        $(this).before('<button class="js-faqToogleAll" style="position: absolute; right: 0; top: ' + c + '">Toggle all</button>')
    }), $(document).on("click", ".js-faqToogleAll", function(a) {
        a.preventDefault();
        $(this).nextAll(".js-gaFaq").find(".js-text").toggle()
    }));
    $("#notificalWarningJs").length && $("#notificalWarningJs").remove()
});

$(window).scroll(function() {
    topMenuStick("scroll");
    if ($("body").hasClass("mobile-menu-on")) {
        var c = $("body").scrollTop(),
            b = $("#mobileMenu"),
            d = b.position().top + b.outerHeight(!0);
        (c > d + 40 || c < b.position().top - 100) && $("body").removeClass("mobile-menu-on")
    }
});
function initHomeImg(c) {
    var b = $("#homeImage"),
        d = readCookie("homeImageStatus");
    0 !== b.length && ("ready" == c && null === d && (createCookie("homeImageStatus", 1, 7), b.addClass("home-animate")), "load" == c && b.addClass("home-load"))
}
window.addEventListener("orientationchange", function() {
    setTimeout(function() {
        topMenuStick("load");
        colAlignment();
        pageHeadFlex()
    }, 500)
}, !1);


function subMenuInnert(c) {
    var b = c.parent().position().left;
    $(".wrapper").width();
    var d = 0,
        a = "margin-left";
    direction && (b = $(document).width() - b - c.parent().width(), a = "margin-right");
    7 >= ieVersion && -1 != ieVersion && (a = direction ? "right" : "left");
    c.find(".main-menu__i").each(function(a, b) {
        d += $(this).width()
    });
    c.children().css(a, b)
}

function subMenuActive(c) {
    0 != c.parents(".__active").length && $("body").addClass("__active-sub-menu")
}

function resizeSwitchLanguage() {
    var c = $(window).outerHeight(),
        b = $("#height").outerHeight();
    $("#switchLanguageCon").css({
        "max-height": c - b - 60,
        "overflow-y": "auto"
    })
}

function createCookie(c, b, d) {
    if (d) {
        var a = new Date;
        a.setTime(a.getTime() + 864E5 * d);
        d = "; expires=" + a.toGMTString()
    } else d = "";
    document.cookie = c + "=" + b + d + "; path=/"
}

function readCookie(c) {
    c += "=";
    for (var b = document.cookie.split(";"), d = 0; d < b.length; d++) {
        for (var a = b[d];
             " " == a.charAt(0);) a = a.substring(1, a.length);
        if (0 == a.indexOf(c)) return a.substring(c.length, a.length)
    }
    return null
}
function compareVersions(c, b, d) {
    b = "=" == b ? "==" : b;
    c = c.split(".");
    d = d.split(".");
    for (var a = Math.max(c.length, d.length), f, g, h = 0, k = 0; k < a && !h; k++) f = parseInt(c[k], 10) || 0, g = parseInt(d[k], 10) || 0, f < g && (h = 1), f > g && (h = -1);
    return eval("0" + b + h)
}
var pageAlias = location.pathname;
pageAlias && "/" !== pageAlias && "/home2.html" !== pageAlias || (pageAlias = "home");
$(document).ready(function() {
    $("a.btn, .js-buyBtn").on("click", function() {
        if (-1 != $(this).attr("href").indexOf(buyPage)) {
            var b = $(this).data("ga");
            void 0 != b && "" != b ? SendInfoGA(clearHref(pageAlias), b) : SendInfoGA("BuyNow", clearHref(pageAlias))
        }
    });
    $(".js-headLogoGA").on("click", function() {
        SendInfoGA("Logo", pageAlias)
    });
    window.addEventListener("orientationchange", function() {
        var b = window.orientation;
        "90" != b && "-90" != b || SendInfoGA("Mobile", "Landscape", "Orientation")
    }, !1);
    $(".js-formLogin").on("click", ".btn",
        function() {
            SendInfoGA("Login", clearHref(pageAlias))
        });
    $(".js-forgoPassword").on("click", function() {
        SendInfoGA("forgoPassword", clearHref(pageAlias))
    });
    $(".js-videoMobal").on("click", function() {
        SendInfoGA("playVideo", clearHref(pageAlias))
    });
    $("#switchLanguageCon").on("click", "a", function() {
        var b = $(this).text();
        SendInfoGA("LanguageSelect", b, clearHref(pageAlias))
    });
    $("#mobileSelectLanguage").change(function() {
        var b = $(this).children("option:selected").text();
        SendInfoGA("LanguageSelect", b, clearHref(pageAlias))
    });
 });


function initHomeImg(c) {
    var b = $("#homeImage"),
        d = readCookie("homeImageStatus");
    0 !== b.length && ("ready" == c && null === d && (createCookie("homeImageStatus", 1, 7), b.addClass("home-animate")), "load" == c && b.addClass("home-load"))
}
$(document).ready(function() {
    $("#header a").removeAttr("target");
    // watchOnline();
});
