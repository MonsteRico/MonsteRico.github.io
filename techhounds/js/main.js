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
        duration: 6500,
         duplicated: true,
         gap: 0, 
         direction: 'left',
         pauseOnHover: true
    });
});
 
//Media Javascript
function changeYear(year, dir) {
	var newYear = document.getElementById(year);
	var oldYear = document.getElementsByClassName("activeYear")[0];
	var btnId = year + "Btn";
	var btn = document.getElementById(btnId);
	btn.click();
	if (dir == "right") {
		newYear.classList.add("w3-animate-right");
	}
	else if (dir == "left") {
		newYear.classList.add("w3-animate-left");
	}
	oldYear.classList.remove("activeYear");
	oldYear.classList.add("notActive");
	newYear.classList.remove("notActive");
	newYear.classList.add("activeYear");
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
	newTab.classList.add("fadeIn");
	newBtn.blur();
}

function changeTabDrop(tab) {
	var oldTab = document.getElementsByClassName("tabActive")[0];
	var newTab = document.getElementById(tab);
	oldTab.classList.remove("tabActive");
	oldTab.classList.add("notActive");
	newTab.classList.remove("notActive");
	newTab.classList.add("tabActive");
	newTab.classList.add("fadeIn");
}

//About Javascript
function openAbout(){
	document.getElementById('about0').style.display = "";
	document.getElementById('about1').style.display = "none";
	document.getElementById('about2').style.display = "none";
	document.getElementById('about3').style.display = "none";
}

function openOutreach(){
	document.getElementById('about0').style.display = "none";
	document.getElementById('about1').style.display = "";
	document.getElementById('about2').style.display = "none";
	document.getElementById('about3').style.display = "none";
}

function openAwards(){
	document.getElementById('about0').style.display = "none";
	document.getElementById('about1').style.display = "none";
	document.getElementById('about2').style.display = "";
	document.getElementById('about3').style.display = "none";
}

function openDivisions(){
	document.getElementById('about0').style.display = "none";
	document.getElementById('about1').style.display = "none";
	document.getElementById('about2').style.display = "none";
	document.getElementById('about3').style.display = "";
}

//Outreach Javascript
function open2019(){
	document.getElementById('awards0').style.display = "";
	document.getElementById('awards1').style.display = "none";
	document.getElementById('awards2').style.display = "none";
	document.getElementById('awards3').style.display = "none";
	document.getElementById('awards4').style.display = "none";
	document.getElementById('awards5').style.display = "none";
	document.getElementById('awards6').style.display = "none";
	document.getElementById('awards7').style.display = "none";
	document.getElementById('awards8').style.display = "none";
	document.getElementById('awards9').style.display = "none";
	document.getElementById('awards10').style.display = "none";
	document.getElementById('awards11').style.display = "none";
	document.getElementById('awards12').style.display = "none";
	document.getElementById('awards13').style.display = "none";
	document.getElementById('awards14').style.display = "none";
	document.getElementById('awards15').style.display = "none";
	document.getElementById('awards16').style.display = "none";
}

function open2018(){
	document.getElementById('awards0').style.display = "none";
	document.getElementById('awards1').style.display = "";
	document.getElementById('awards2').style.display = "none";
	document.getElementById('awards3').style.display = "none";
	document.getElementById('awards4').style.display = "none";
	document.getElementById('awards5').style.display = "none";
	document.getElementById('awards6').style.display = "none";
	document.getElementById('awards7').style.display = "none";
	document.getElementById('awards8').style.display = "none";
	document.getElementById('awards9').style.display = "none";
	document.getElementById('awards10').style.display = "none";
	document.getElementById('awards11').style.display = "none";
	document.getElementById('awards12').style.display = "none";
	document.getElementById('awards13').style.display = "none";
	document.getElementById('awards14').style.display = "none";
	document.getElementById('awards15').style.display = "none";
	document.getElementById('awards16').style.display = "none";
}

function open2017(){
	document.getElementById('awards0').style.display = "none";
	document.getElementById('awards1').style.display = "none";
	document.getElementById('awards2').style.display = "";
	document.getElementById('awards3').style.display = "none";
	document.getElementById('awards4').style.display = "none";
	document.getElementById('awards5').style.display = "none";
	document.getElementById('awards6').style.display = "none";
	document.getElementById('awards7').style.display = "none";
	document.getElementById('awards8').style.display = "none";
	document.getElementById('awards9').style.display = "none";
	document.getElementById('awards10').style.display = "none";
	document.getElementById('awards11').style.display = "none";
	document.getElementById('awards12').style.display = "none";
	document.getElementById('awards13').style.display = "none";
	document.getElementById('awards14').style.display = "none";
	document.getElementById('awards15').style.display = "none";
	document.getElementById('awards16').style.display = "none";
}

function open2016(){
	document.getElementById('awards0').style.display = "none";
	document.getElementById('awards1').style.display = "none";
	document.getElementById('awards2').style.display = "none";
	document.getElementById('awards3').style.display = "";
	document.getElementById('awards4').style.display = "none";
	document.getElementById('awards5').style.display = "none";
	document.getElementById('awards6').style.display = "none";
	document.getElementById('awards7').style.display = "none";
	document.getElementById('awards8').style.display = "none";
	document.getElementById('awards9').style.display = "none";
	document.getElementById('awards10').style.display = "none";
	document.getElementById('awards11').style.display = "none";
	document.getElementById('awards12').style.display = "none";
	document.getElementById('awards13').style.display = "none";
	document.getElementById('awards14').style.display = "none";
	document.getElementById('awards15').style.display = "none";
	document.getElementById('awards16').style.display = "none";
}

function open2015(){
	document.getElementById('awards0').style.display = "none";
	document.getElementById('awards1').style.display = "none";
	document.getElementById('awards2').style.display = "none";
	document.getElementById('awards3').style.display = "none";
	document.getElementById('awards4').style.display = "";
	document.getElementById('awards5').style.display = "none";
	document.getElementById('awards6').style.display = "none";
	document.getElementById('awards7').style.display = "none";
	document.getElementById('awards8').style.display = "none";
	document.getElementById('awards9').style.display = "none";
	document.getElementById('awards10').style.display = "none";
	document.getElementById('awards11').style.display = "none";
	document.getElementById('awards12').style.display = "none";
	document.getElementById('awards13').style.display = "none";
	document.getElementById('awards14').style.display = "none";
	document.getElementById('awards15').style.display = "none";
	document.getElementById('awards16').style.display = "none";
}

function open2014(){
	document.getElementById('awards0').style.display = "none";
	document.getElementById('awards1').style.display = "none";
	document.getElementById('awards2').style.display = "none";
	document.getElementById('awards3').style.display = "none";
	document.getElementById('awards4').style.display = "none";
	document.getElementById('awards5').style.display = "";
	document.getElementById('awards6').style.display = "none";
	document.getElementById('awards7').style.display = "none";
	document.getElementById('awards8').style.display = "none";
	document.getElementById('awards9').style.display = "none";
	document.getElementById('awards10').style.display = "none";
	document.getElementById('awards11').style.display = "none";
	document.getElementById('awards12').style.display = "none";
	document.getElementById('awards13').style.display = "none";
	document.getElementById('awards14').style.display = "none";
	document.getElementById('awards15').style.display = "none";
	document.getElementById('awards16').style.display = "none";
}

function open2013(){
	document.getElementById('awards0').style.display = "none";
	document.getElementById('awards1').style.display = "none";
	document.getElementById('awards2').style.display = "none";
	document.getElementById('awards3').style.display = "none";
	document.getElementById('awards4').style.display = "none";
	document.getElementById('awards5').style.display = "none";
	document.getElementById('awards6').style.display = "";
	document.getElementById('awards7').style.display = "none";
	document.getElementById('awards8').style.display = "none";
	document.getElementById('awards9').style.display = "none";
	document.getElementById('awards10').style.display = "none";
	document.getElementById('awards11').style.display = "none";
	document.getElementById('awards12').style.display = "none";
	document.getElementById('awards13').style.display = "none";
	document.getElementById('awards14').style.display = "none";
	document.getElementById('awards15').style.display = "none";
	document.getElementById('awards16').style.display = "none";
}

function open2012(){
	document.getElementById('awards0').style.display = "none";
	document.getElementById('awards1').style.display = "none";
	document.getElementById('awards2').style.display = "none";
	document.getElementById('awards3').style.display = "none";
	document.getElementById('awards4').style.display = "none";
	document.getElementById('awards5').style.display = "none";
	document.getElementById('awards6').style.display = "none";
	document.getElementById('awards7').style.display = "";
	document.getElementById('awards8').style.display = "none";
	document.getElementById('awards9').style.display = "none";
	document.getElementById('awards10').style.display = "none";
	document.getElementById('awards11').style.display = "none";
	document.getElementById('awards12').style.display = "none";
	document.getElementById('awards13').style.display = "none";
	document.getElementById('awards14').style.display = "none";
	document.getElementById('awards15').style.display = "none";
	document.getElementById('awards16').style.display = "none";
}

function open2011(){
	document.getElementById('awards0').style.display = "none";
	document.getElementById('awards1').style.display = "none";
	document.getElementById('awards2').style.display = "none";
	document.getElementById('awards3').style.display = "none";
	document.getElementById('awards4').style.display = "none";
	document.getElementById('awards5').style.display = "none";
	document.getElementById('awards6').style.display = "none";
	document.getElementById('awards7').style.display = "none";
	document.getElementById('awards8').style.display = "";
	document.getElementById('awards9').style.display = "none";
	document.getElementById('awards10').style.display = "none";
	document.getElementById('awards11').style.display = "none";
	document.getElementById('awards12').style.display = "none";
	document.getElementById('awards13').style.display = "none";
	document.getElementById('awards14').style.display = "none";
	document.getElementById('awards15').style.display = "none";
	document.getElementById('awards16').style.display = "none";
}

function open2010(){
	document.getElementById('awards0').style.display = "none";
	document.getElementById('awards1').style.display = "none";
	document.getElementById('awards2').style.display = "none";
	document.getElementById('awards3').style.display = "none";
	document.getElementById('awards4').style.display = "none";
	document.getElementById('awards5').style.display = "none";
	document.getElementById('awards6').style.display = "none";
	document.getElementById('awards7').style.display = "none";
	document.getElementById('awards8').style.display = "none";
	document.getElementById('awards9').style.display = "";
	document.getElementById('awards10').style.display = "none";
	document.getElementById('awards11').style.display = "none";
	document.getElementById('awards12').style.display = "none";
	document.getElementById('awards13').style.display = "none";
	document.getElementById('awards14').style.display = "none";
	document.getElementById('awards15').style.display = "none";
	document.getElementById('awards16').style.display = "none";
}

function open2009(){
	document.getElementById('awards0').style.display = "none";
	document.getElementById('awards1').style.display = "none";
	document.getElementById('awards2').style.display = "none";
	document.getElementById('awards3').style.display = "none";
	document.getElementById('awards4').style.display = "none";
	document.getElementById('awards5').style.display = "none";
	document.getElementById('awards6').style.display = "none";
	document.getElementById('awards7').style.display = "none";
	document.getElementById('awards8').style.display = "none";
	document.getElementById('awards9').style.display = "none";
	document.getElementById('awards10').style.display = "";
	document.getElementById('awards11').style.display = "none";
	document.getElementById('awards12').style.display = "none";
	document.getElementById('awards13').style.display = "none";
	document.getElementById('awards14').style.display = "none";
	document.getElementById('awards15').style.display = "none";
	document.getElementById('awards16').style.display = "none";
}

function open2008(){
	document.getElementById('awards0').style.display = "none";
	document.getElementById('awards1').style.display = "none";
	document.getElementById('awards2').style.display = "none";
	document.getElementById('awards3').style.display = "none";
	document.getElementById('awards4').style.display = "none";
	document.getElementById('awards5').style.display = "none";
	document.getElementById('awards6').style.display = "none";
	document.getElementById('awards7').style.display = "none";
	document.getElementById('awards8').style.display = "none";
	document.getElementById('awards9').style.display = "none";
	document.getElementById('awards10').style.display = "none";
	document.getElementById('awards11').style.display = "";
	document.getElementById('awards12').style.display = "none";
	document.getElementById('awards13').style.display = "none";
	document.getElementById('awards14').style.display = "none";
	document.getElementById('awards15').style.display = "none";
	document.getElementById('awards16').style.display = "none";
}

function open2007(){
	document.getElementById('awards0').style.display = "none";
	document.getElementById('awards1').style.display = "none";
	document.getElementById('awards2').style.display = "none";
	document.getElementById('awards3').style.display = "none";
	document.getElementById('awards4').style.display = "none";
	document.getElementById('awards5').style.display = "none";
	document.getElementById('awards6').style.display = "none";
	document.getElementById('awards7').style.display = "none";
	document.getElementById('awards8').style.display = "none";
	document.getElementById('awards9').style.display = "none";
	document.getElementById('awards10').style.display = "none";
	document.getElementById('awards11').style.display = "none";
	document.getElementById('awards12').style.display = "";
	document.getElementById('awards13').style.display = "none";
	document.getElementById('awards14').style.display = "none";
	document.getElementById('awards15').style.display = "none";
	document.getElementById('awards16').style.display = "none";
}

function open2006(){
	document.getElementById('awards0').style.display = "none";
	document.getElementById('awards1').style.display = "none";
	document.getElementById('awards2').style.display = "none";
	document.getElementById('awards3').style.display = "none";
	document.getElementById('awards4').style.display = "none";
	document.getElementById('awards5').style.display = "none";
	document.getElementById('awards6').style.display = "none";
	document.getElementById('awards7').style.display = "none";
	document.getElementById('awards8').style.display = "none";
	document.getElementById('awards9').style.display = "none";
	document.getElementById('awards10').style.display = "none";
	document.getElementById('awards11').style.display = "none";
	document.getElementById('awards12').style.display = "none";
	document.getElementById('awards13').style.display = "";
	document.getElementById('awards14').style.display = "none";
	document.getElementById('awards15').style.display = "none";
	document.getElementById('awards16').style.display = "none";
}

function open2005(){
	document.getElementById('awards0').style.display = "none";
	document.getElementById('awards1').style.display = "none";
	document.getElementById('awards2').style.display = "none";
	document.getElementById('awards3').style.display = "none";
	document.getElementById('awards4').style.display = "none";
	document.getElementById('awards5').style.display = "none";
	document.getElementById('awards6').style.display = "none";
	document.getElementById('awards7').style.display = "none";
	document.getElementById('awards8').style.display = "none";
	document.getElementById('awards9').style.display = "none";
	document.getElementById('awards10').style.display = "none";
	document.getElementById('awards11').style.display = "none";
	document.getElementById('awards12').style.display = "none";
	document.getElementById('awards13').style.display = "none";
	document.getElementById('awards14').style.display = "";
	document.getElementById('awards15').style.display = "none";
	document.getElementById('awards16').style.display = "none";
}

function open2004(){
	document.getElementById('awards0').style.display = "none";
	document.getElementById('awards1').style.display = "none";
	document.getElementById('awards2').style.display = "none";
	document.getElementById('awards3').style.display = "none";
	document.getElementById('awards4').style.display = "none";
	document.getElementById('awards5').style.display = "none";
	document.getElementById('awards6').style.display = "none";
	document.getElementById('awards7').style.display = "none";
	document.getElementById('awards8').style.display = "none";
	document.getElementById('awards9').style.display = "none";
	document.getElementById('awards10').style.display = "none";
	document.getElementById('awards11').style.display = "none";
	document.getElementById('awards12').style.display = "none";
	document.getElementById('awards13').style.display = "none";
	document.getElementById('awards14').style.display = "none";
	document.getElementById('awards15').style.display = "";
	document.getElementById('awards16').style.display = "none";
}

function open2003(){
	document.getElementById('awards0').style.display = "none";
	document.getElementById('awards1').style.display = "none";
	document.getElementById('awards2').style.display = "none";
	document.getElementById('awards3').style.display = "none";
	document.getElementById('awards4').style.display = "none";
	document.getElementById('awards5').style.display = "none";
	document.getElementById('awards6').style.display = "none";
	document.getElementById('awards7').style.display = "none";
	document.getElementById('awards8').style.display = "none";
	document.getElementById('awards9').style.display = "none";
	document.getElementById('awards10').style.display = "none";
	document.getElementById('awards11').style.display = "none";
	document.getElementById('awards12').style.display = "none";
	document.getElementById('awards13').style.display = "none";
	document.getElementById('awards14').style.display = "none";
	document.getElementById('awards15').style.display = "none";
	document.getElementById('awards16').style.display = "";
}
