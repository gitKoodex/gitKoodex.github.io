$(function (){

//منو سایت عناصر منو را گرفته و 6 تا 6 تا جدا میکنیم
if($('body').hasClass('home')) {
    $("nav.mycustomheader>ul>li.menu-item-has-children").hover(function (e) {
        if ($(".second>.inner>ul:nth-child(2)", this).length == 0) {
            var countOfMenu = $('.second .inner ul:first-child', this).children().length;
            var newMenu = document.createElement('ul');
            // console.log(countOfMenu);
            if (countOfMenu > 6) {
                var menuItems = [];
                var counter = 0;
                $(".second>.inner>ul", this).children().each(function (item, index) {
                    counter++;
                    if (counter > 6) {
                        $(newMenu).append(index);
                    }
                });
            }

            $(".second>.inner", this).append(newMenu);
        }
        if ($(".second>.inner>ul:nth-child(3)", this).length == 0) {
            var therdNavul = document.createElement('ul');
            var therdNavLi = document.createElement('li');
            var therdNavImg = document.createElement('img');
            $(therdNavImg).attr('src', '/wp-content/uploads/2021/06/active.jpg');
            $(therdNavLi).append(therdNavImg);
            $(therdNavul).append(therdNavLi);
            $(".second>.inner", this).append(therdNavul);
        }
    });

    var lastScrollTop = 0;
// هنگام سکرول شدن صفحه
    $(window).on('scroll', function () {
        // افکت مکعب اسلایدر صفحه اصلی
        $('.flip').each(function () {
            var scrollTop = $(window).scrollTop(),
                parentElementOffsetTop = $(this).parent().offset().top,
                parentDistanceTop = (parentElementOffsetTop - scrollTop);
            var elementHeight = $(this).height();
            var distanceBottom = (parentDistanceTop + elementHeight);
            var opacity = (distanceBottom / elementHeight);
            var rotateSpeed = ((parentDistanceTop / 8).toFixed(2) * -1);

            if (rotateSpeed <= 0) {
                rotateSpeed = 0;
            } else if (rotateSpeed >= 90) {
                rotateSpeed = 90;
            }
            $(this).find(".pixel-counter").html(distanceBottom + "px is the parents bottom-               distance to top of viewport");
            $(this).css({
                "transform": " translateY(0px)  rotateX(" + rotateSpeed + "deg)",
                "opacity": opacity
            });
        });
        // افکت منوی چسبان بعد از مقداری اسکرول رو به پایین
        if ($(window).scrollTop() > 140) {
            $("nav.mycustomheader").addClass('stick');
        } else {
            $("nav.mycustomheader").removeClass('stick');
        }
//سنجش اسکرول رو به بالا و پایین.
        var st = $(this).scrollTop();
        var galerry = $("#galerry");
        var paralex = $("#paralex");
        var footer = $("footer");
        var galerryPosition = parseInt(galerry.position().top) - 66;
        var paralexPosition = parseInt(paralex.position().top);
        var footerPosition = parseInt(footer.position().top) - 66;
        //تعیین فاصله ایی که هنگام اسکرول رو به پایین به گالری میچسبیم.
        var scrolTogalery = parseInt(galerryPosition) - 400;

        var scrolFromgalery = parseInt(galerryPosition) + 300;
        if (st > lastScrollTop) {
            // downscroll code
            //اسکرول رو به پایین
            //افکت بخش گالری هنگام اسکرول رو به پایین به لبه این بخش میچسبد.
            //
            // if (!$("#galerry").hasClass('scrolled')) {
            //     console.log('gallery');
            //     if ($(window).scrollTop() > scrolTogalery && $(window).scrollTop() < scrolFromgalery) {
            //         console.log('IFgallery');
            //         $(window).scrollTop(galerryPosition);
            //         $("#galerry").addClass('scrolled');
            //         setTimeout(footer, 3000);
            //     }
            // }
            //
            // function footer() {
            //     if ($("#galerry").hasClass('scrolled')) {
            //         if (!$("#paralex").hasClass('scrolled')) {
            //             console.log('paralex');
            //             if ($(window).scrollTop() >= galerryPosition && $(window).scrollTop() <= footerPosition) {
            //                 console.log('IFparalex');
            //                 $(window).scrollTop(paralexPosition);
            //                 $("#paralex").addClass('scrolled');
            //             }
            //         }
            //     }
            // }


            // console.log('down');
        } else {
            // console.log('up');
            // if ($("#galerry").hasClass('scrolled')) {
            //     $("#galerry").removeClass('scrolled');
            // }
            // if ($("#paralex").hasClass('scrolled')) {
            //     $("#paralex").removeClass('scrolled');
            // }
        }
        lastScrollTop = st;

        // var firstSampleRowPosition = $("#animation img").first();
        //
        // var position2 = firstSampleRowPosition.position();
        // console.log($(window).scrollTop());
        // console.log(firstSampleRowPosition);
        // var sec2position =position2.top - 700;
        // if($(window).scrollTop()>sec2position){
        //     // console.log(position2.top);
        //     if(!$("#animation img").hasClass('animate__animated animate__bounceInLeft animate__delay-1s active')) {
        //        $("#animation img").toggleClass('animate__animated animate__bounceInLeft animate__delay-1s active');
        //     }
        // }
    });
// اگر صفحه در حال اسکرول نبود. مکان فعلی اسکرول تعیین کننده جایگان منو است.
    if ($(window).scrollTop() > 140) {
        $("nav.mycustomheader").addClass('stick');
    }
// گالری صفحه اصلی با جی اس خام میتوان این بخش را با یک گالری آماده جایگزین کرد.
    $("#galerry .imgContainer").wrap("<div class='noborder galleryPad'>");
    container = document.getElementById('darkimageGalery')
    for (x = 0; x < container.children.length; x++) {
        container.children[x].addEventListener('click',
            function () {
                var childNum = Array.prototype.indexOf.call(container.children, this);
                childNum = parseInt(childNum) + 1;
                var theblackwraper = document.createElement("div");
                $(theblackwraper).addClass('theblackwraper');
                var galleryBox = document.createElement("div");
                $(galleryBox).addClass('gallerybox');
                var slideshowContainer = document.createElement("div");
                $(slideshowContainer).addClass('slideshow-container');
                var slides = document.getElementsByClassName('imgContainer');
                for (var i = 0; i < slides.length; i++) {
                    var text = slides[i].outerHTML;
                    // console.log(text);
                    text = String(text);
                    // console.log(text);
                    text = document.createRange().createContextualFragment(text);
                    // console.log(text);
                    var slidsContainer = document.createElement("div");
                    $(slidsContainer).addClass('mySlides fade');
                    $(slidsContainer).append(text);
                    $(slideshowContainer).append(slidsContainer);
                }
                $(slideshowContainer).append(slidsContainer);

                var next = document.createElement("a");
                $(next).addClass('next');
                $(next).attr('onclick', 'plusSlides(1)');
                var nextTxt = document.createTextNode(' ');
                next.appendChild(nextTxt);
                var prev = document.createElement("a");
                $(prev).addClass('prev');
                $(prev).attr('onclick', 'plusSlides(-1)');
                var prevTxt = document.createTextNode(" ");
                prev.appendChild(prevTxt);

                $(slideshowContainer).append(next);
                $(slideshowContainer).append(prev);

                var src = $("img", this).attr('src');
                theblackwraper.onclick = function () {
                    $(galleryBox).addClass('d-none');
                    $(theblackwraper).addClass('d-none');
                    $(galleryBox).remove();
                    $(theblackwraper).remove();
                }
                // // var flexContainer = document.createElement("div");
                // //  $(flexContainer).addClass('d-flex showGallery');
                // // var galleryImg = document.createElement("img");
                // // $(galleryImg).attr('src',src);
                // // $(galleryImg).css({'-webkit-box-flex': 0,'-ms-flex':'0 0 33.333333%','flex':'0 0 33.333333%','max-width':'33.333333%'});
                // // var galeryTxt= document.createElement("div");
                // // $(galeryTxt).addClass('textgalery');
                // //  $(galeryTxt).append($("#galerry .imgContainer .textgalery").html());
                // //  console.log(galeryTxt);
                // // flexContainer.append(galleryImg);
                // // flexContainer.append(galeryTxt);
                // // flexContainer.append(galleryImg);
                // // galleryBox.append(flexContainer);
                $(galleryBox).append(slideshowContainer);
                $('body').append(galleryBox);
                // theblackwraper.append(galleryBox);
                $('body').append(theblackwraper);
//slider ------------------------------------------------
                var slideIndex = childNum;
                showSlides(slideIndex);

// Next/previous controls
                function plusSlides(n) {
                    showSlides(slideIndex += n);
                }

// Thumbnail image controls
                function currentSlide(n) {
                    showSlides(slideIndex = n);
                }

                function showSlides(n) {
                    var i;
                    var slides = document.getElementsByClassName("mySlides");
                    // var dots = document.getElementsByClassName("dot");
                    if (n > slides.length) {
                        slideIndex = 1
                    }
                    if (n < 1) {
                        slideIndex = slides.length
                    }
                    for (i = 0; i < slides.length; i++) {
                        slides[i].style.display = "none";
                    }
                    // for (i = 0; i < dots.length; i++) {
                    //     dots[i].className = dots[i].className.replace(" active", "");
                    // }
                    slides[slideIndex - 1].style.display = "block";
                    // dots[slideIndex-1].className += " active";
                }

//END slider ------------------------------------------------
            });
    }
// گالری جی اس خام میتوان با یک گالری آماده جایگزین کرد.
// تکرار کد بالابرای کارکردن دکمههای عقب و جلو اسلایدر است.
    var slideIndex = 1;
    showSlides(slideIndex);

// Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

// Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        // var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        slides[slideIndex - 1].style.display = "block";
        // dots[slideIndex-1].className += " active";
    }


// $("#galerry .imgContainer").click(function (){
//    var theblackwraper =  document.createElement("div");
//    $(theblackwraper).addClass('theblackwraper');
//    var galleryBox = document.createElement("div");
//    $(galleryBox).addClass('gallerybox');
//    var slideshowContainer =  document.createElement("div");
//    $(slideshowContainer).addClass('slideshow-container');
//    var slides = document.getElementsByClassName('imgContainer');
//    for (var i = 0; i < slides.length; i++) {
//        var text= slides[i].outerHTML;
//        console.log(text);
//      text = String(text);
//        console.log(text);
//      text = document.createRange().createContextualFragment(text);
//        console.log(text);
//        var slidsContainer = document.createElement("div");
//        $(slidsContainer).addClass('mySlides fade');
//        $(slidsContainer).append(text);
//        $(slideshowContainer).append(slidsContainer);
//    }
//     $(slideshowContainer).append(slidsContainer);
//
//    var next = document.createElement("a");
//    $(next).addClass('next');
//    $(next).attr('onclick','plusSlides(1)');
//    var nextTxt = document.createTextNode(' ');
//    next.appendChild(nextTxt);
//    var prev = document.createElement("a");
//    $(prev).addClass('prev');
//    $(prev).attr('onclick','plusSlides(-1)');
//    var prevTxt = document.createTextNode(" ");
//    prev.appendChild(prevTxt);
//
//     $(slideshowContainer).append(next);
//     $(slideshowContainer).append(prev);
//
//    var src = $("img",this).attr('src');
//    theblackwraper.onclick = function () {
//        $(galleryBox).addClass('d-none');
//        $(theblackwraper).addClass('d-none');
//        $(galleryBox).remove();
//        $(theblackwraper).remove();
//    }
//    // // var flexContainer = document.createElement("div");
//    // //  $(flexContainer).addClass('d-flex showGallery');
//    // // var galleryImg = document.createElement("img");
//    // // $(galleryImg).attr('src',src);
//    // // $(galleryImg).css({'-webkit-box-flex': 0,'-ms-flex':'0 0 33.333333%','flex':'0 0 33.333333%','max-width':'33.333333%'});
//    // // var galeryTxt= document.createElement("div");
//    // // $(galeryTxt).addClass('textgalery');
//    // //  $(galeryTxt).append($("#galerry .imgContainer .textgalery").html());
//    // //  console.log(galeryTxt);
//    // // flexContainer.append(galleryImg);
//    // // flexContainer.append(galeryTxt);
//    // // flexContainer.append(galleryImg);
//    // // galleryBox.append(flexContainer);
//     $(galleryBox).append(slideshowContainer);
//     $('body').append(galleryBox);
//    // theblackwraper.append(galleryBox);
//    $('body').append(theblackwraper);
// //slider ------------------------------------------------
//     var slideIndex = 1;
//     showSlides(slideIndex);
//
// // Next/previous controls
//     function plusSlides(n) {
//         showSlides(slideIndex += n);
//     }
//
// // Thumbnail image controls
//     function currentSlide(n) {
//         showSlides(slideIndex = n);
//     }
//
//     function showSlides(n) {
//         var i;
//         var slides = document.getElementsByClassName("mySlides");
//         // var dots = document.getElementsByClassName("dot");
//         if (n > slides.length) {slideIndex = 1}
//         if (n < 1) {slideIndex = slides.length}
//         for (i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         // for (i = 0; i < dots.length; i++) {
//         //     dots[i].className = dots[i].className.replace(" active", "");
//         // }
//         slides[slideIndex-1].style.display = "block";
//         // dots[slideIndex-1].className += " active";
//     }
//END slider ------------------------------------------------
// });
//slider ------------------------------------------------


//END slider ------------------------------------------------
}

});