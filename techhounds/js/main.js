 //For Fade animation
 AOS.init({
     duration: 800,
     easing: 'slide',
     once: true
 });

 jQuery(document).ready(function($) {

     "use strict";



     var siteMenuClone = function() {

         $('.js-clone-nav').each(function() {
             var $this = $(this);
             $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
         });


         setTimeout(function() {

             var counter = 0;
             $('.site-mobile-menu .has-children').each(function() {
                 var $this = $(this);

                 $this.prepend('<span class="arrow-collapse collapsed">');

                 $this.find('.arrow-collapse').attr({
                     'data-toggle': 'collapse',
                     'data-target': '#collapseItem' + counter,
                 });

                 $this.find('> ul').attr({
                     'class': 'collapse',
                     'id': 'collapseItem' + counter,
                 });

                 counter++;

             });

         }, 1000);

         $('body').on('click', '.arrow-collapse', function(e) {
             var $this = $(this);
             if ($this.closest('li').find('.collapse').hasClass('show')) {
                 $this.removeClass('active');
             } else {
                 $this.addClass('active');
             }
             e.preventDefault();

         });

         $(window).resize(function() {
             var $this = $(this),
                 w = $this.width();

             if (w > 768) {
                 if ($('body').hasClass('offcanvas-menu')) {
                     $('body').removeClass('offcanvas-menu');
                 }
             }
         })

         $('body').on('click', '.js-menu-toggle', function(e) {
             var $this = $(this);
             e.preventDefault();

             if ($('body').hasClass('offcanvas-menu')) {
                 $('body').removeClass('offcanvas-menu');
                 $this.removeClass('active');
             } else {
                 $('body').addClass('offcanvas-menu');
                 $this.addClass('active');
             }
         })

         // click outisde offcanvas
         $(document).mouseup(function(e) {
             var container = $(".site-mobile-menu");
             if (!container.is(e.target) && container.has(e.target).length === 0) {
                 if ($('body').hasClass('offcanvas-menu')) {
                     $('body').removeClass('offcanvas-menu');
                 }
             }
         });
     };
     siteMenuClone();


     var sitePlusMinus = function() {
         $('.js-btn-minus').on('click', function(e) {
             e.preventDefault();
             if ($(this).closest('.input-group').find('.form-control').val() != 0) {
                 $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
             } else {
                 $(this).closest('.input-group').find('.form-control').val(parseInt(0));
             }
         });
         $('.js-btn-plus').on('click', function(e) {
             e.preventDefault();
             $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
         });
     };
     // sitePlusMinus();


     var siteSliderRange = function() {
         $("#slider-range").slider({
             range: true,
             min: 0,
             max: 500,
             values: [75, 300],
             slide: function(event, ui) {
                 $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
             }
         });
         $("#amount").val("$" + $("#slider-range").slider("values", 0) +
             " - $" + $("#slider-range").slider("values", 1));
     };
     // siteSliderRange();


     var siteMagnificPopup = function() {
         $('.image-popup').magnificPopup({
             type: 'image',
             closeOnContentClick: true,
             closeBtnInside: false,
             fixedContentPos: true,
             mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
             gallery: {
                 enabled: true,
                 navigateByImgClick: true,
                 preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
             },
             image: {
                 verticalFit: true
             },
             zoom: {
                 enabled: true,
                 duration: 300 // don't foget to change the duration also in CSS
             }
         });

         $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
             disableOn: 700,
             type: 'iframe',
             mainClass: 'mfp-fade',
             removalDelay: 160,
             preloader: false,

             fixedContentPos: false
         });
     };
     siteMagnificPopup();


     var siteCarousel = function() {
         if ($('.nonloop-block-13').length > 0) {
             $('.nonloop-block-13').owlCarousel({
                 center: false,
                 items: 1,
                 loop: true,
                 stagePadding: 0,
                 autoplay: true,
                 margin: 20,
                 nav: false,
                 dots: true,
                 navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                 responsive: {
                     600: {
                         margin: 20,
                         stagePadding: 0,
                         items: 1
                     },
                     1000: {
                         margin: 20,
                         stagePadding: 0,
                         items: 2
                     },
                     1200: {
                         margin: 20,
                         stagePadding: 0,
                         items: 3
                     }
                 }
             });
         }

         if ($('.slide-one-item').length > 0) {
             $('.slide-one-item').owlCarousel({
                 center: false,
                 items: 1,
                 loop: true,
                 stagePadding: 0,
                 margin: 0,
                 autoplay: true,
                 pauseOnHover: false,
                 nav: true,
                 animateOut: 'fadeOut',
                 animateIn: 'fadeIn',
                 navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
             });
         }


         if ($('.nonloop-block-4').length > 0) {
             $('.nonloop-block-4').owlCarousel({
                 center: true,
                 items: 1,
                 loop: false,
                 margin: 10,
                 nav: true,
                 navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                 responsive: {
                     600: {
                         items: 1
                     }
                 }
             });
         }

     };
     siteCarousel();

     var siteStellar = function() {
         $(window).stellar({
             responsive: true,
             parallaxBackgrounds: true,
             parallaxElements: true,
             horizontalScrolling: false,
             hideDistantElements: false,
             scrollProperty: 'scroll'
         });
     };
     siteStellar();

     var siteCountDown = function() {

         if ($('#date-countdown').length > 0) {
             $('#date-countdown').countdown('2020/10/10', function(event) {
                 var $this = $(this).html(event.strftime('' +
                     '<span class="countdown-block"><span class="label">%w</span> weeks </span>' +
                     '<span class="countdown-block"><span class="label">%d</span> days </span>' +
                     '<span class="countdown-block"><span class="label">%H</span> hr </span>' +
                     '<span class="countdown-block"><span class="label">%M</span> min </span>' +
                     '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
             });
         }

     };
     siteCountDown();

     var siteDatePicker = function() {

         if ($('.datepicker').length > 0) {
             $('.datepicker').datepicker();
         }

     };
     siteDatePicker();
 });

 //for marquee
$(function () {
    $('.marquee').marquee({
        duration: 5000,
         duplicated: true,
         gap: 00, 
         direction: 'left',
         pauseOnHover: false
    });
});
 
//Media Javascript
function changeYear(year) {
	var newYear = document.getElementById(year);
	var oldYear = document.getElementsByClassName("activeYear")[0];
	var btnId = year + "Btn";
	var btn = document.getElementById(btnId);
	var dropdown = event.target;
	btn.click();
	oldYear.classList.remove("activeYear");
	oldYear.classList.add("notActive");
	newYear.classList.remove("notActive");
	newYear.classList.add("activeYear");
	dropdown.blur();
}

function changeTab(tab) {
	var oldTab = document.getElementsByClassName("tabActive")[0];
	var newTab = document.getElementById(tab);
	var newBtn = event.target;
	var oldBtn = document.getElementsByClassName("activeBtn")[0];
	oldBtn.classList.remove("activeBtn");
	newBtn.classList.add("activeBtn");
	oldTab.classList.remove("tabActive");
	oldTab.classList.add("notActive");
	newTab.classList.remove("notActive");
	newTab.classList.add("tabActive");
}

function changeTabDrop(tab) {
	var oldTab = document.getElementsByClassName("tabActive")[0];
	var newTab = document.getElementById(tab);
	oldTab.classList.remove("tabActive");
	oldTab.classList.add("notActive");
	newTab.classList.remove("notActive");
	newTab.classList.add("tabActive");
}
