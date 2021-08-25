
var $window = $j(window);		//Window object
var scrollTime = 0.5;			//Scroll time
var scrollDistance = 150;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

mobile_ie = -1 !== navigator.userAgent.indexOf("IEMobile");

function smoothScrollListener(event){
    event.preventDefault();

    var delta = event.wheelDelta / 120 || -event.detail / 3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta * scrollDistance);

    TweenLite.to($window, scrollTime, {
        scrollTo: {
            y: finalScroll, autoKill: !0
        },
        ease: Power1.easeOut,
        autoKill: !0,
        overwrite: 5
    });

}

if (!$j('html').hasClass('touch') && !mobile_ie) {

    //$window.on("mousewheel DOMMouseScroll", function (event) {
    //
    //    event.preventDefault();
    //
    //    var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
    //    var scrollTop = $window.scrollTop();
    //    var finalScroll = scrollTop - parseInt(delta * scrollDistance);
    //
    //    TweenLite.to($window, scrollTime, {
    //        scrollTo: {
    //            y: finalScroll, autoKill: !0
    //        },
    //        ease: Power1.easeOut,
    //        autoKill: !0,
    //        overwrite: 5
    //    });
    //
    //});

    if (window.addEventListener) {
        window.addEventListener('mousewheel', smoothScrollListener, false);
        window.addEventListener('DOMMouseScroll', smoothScrollListener, false);
    }

}
	
