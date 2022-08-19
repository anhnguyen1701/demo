/*global $, jQuery, document, window*/
/* ==========================================================================
Document Ready Function
========================================================================== */
jQuery(document).ready(function ($) {

    'use strict';

    var onMobile, slider, slider2, readyHeight, windowWidth, formInput, sformInput;


    /* ==========================================================================
    on mobile?
    ========================================================================== */
    onMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) { onMobile = true; }


    /* ==========================================================================
    ToolTip
    ========================================================================== */
    $('#dot-menu a[data-rel="tooltip"]').tooltip({container: 'body'});
  

    var linkvideo = $('.home_section_video').data('id_video_youtube');
    var linkimage = $('.home_section_video').data('id_image_links_for_other_device');
  
    if (onMobile === true) {
        $('.home_section_video').css({background: 'url('+linkimage+') center center'});
        //$('.home-blog-section_video').css({background: 'url(images/background/1-1920x1200.jpg) center center'});
    } else {
        /* ==========================================================================
       Tubular
        ========================================================================== */

        $(function () {
            $('.home_section_video').tubular({
                videoId: linkvideo,
                repeat: false,
                start: 0
            });
        });
       /* $(function () {
            $('.home-blog-section_video').tubular({
                videoId: '5BfaKvFBtLM',
                repeat: true,
                start: 0
            });
        });*/
    }


    /* ==========================================================================
    ScrollTo
    ========================================================================== */
    $('a.scrollto').click(function (event) {
        $('html, body').scrollTo(this.hash, this.hash, {gap: {y: 2}, animation:  {easing: 'easeInOutCubic', duration: 800}});
        event.preventDefault();
	});


    /* ==========================================================================
    Feature Tabs
    ========================================================================== */
    slider = $("div#WorksTabs").sliderTabs({
        autoplay: false,
        panelArrows: true,
        position: 'top',
        tabArrows: false,
        defaultTab: 2
    });


    /* ==========================================================================
    Member Tabs
    ========================================================================== */
    slider2 = $("div#TeamTabs").sliderTabs({
        autoplay: 10000,
        panelArrows: false,
        tabArrows: false,
        position: 'top',
        indicators: true
    });


    /* ==========================================================================
    Portfolio
    ========================================================================== */
    var carousel_columns = $(".owl-portfolio").data('carousel_columns');
    var autoplay = $(".owl-portfolio").data('autoplay');
    var pagination = $(".owl-portfolio").data('pagination');
    
    if(autoplay != 'false'){
        var auto_slider = 'true';
        var duration = autoplay;
    }else{
        var auto_slider = 'false';
        var duration = '3000';
    }
    $(".owl-portfolio").owlCarousel({
        autoplay: auto_slider,
        autoplayTimeout: duration,
        dots: pagination,
        loop: true,
        responsive: {
            0:    {items: 1},
            479:  {items: 1},
            768:  {items: 1},
            991:  {items: 1},
            1024: {items: carousel_columns}
        }

    });



    /* ==========================================================================
    Fancy Box
    ========================================================================== */
    $(".fancybox").fancybox({
        helpers : {
            overlay : {
                speedOut : 0,
                locked: false
            }
        }
    });

    /* Home */
    $(".owl-home").owlCarousel({
        autoplay: true,
        pagination : true,
        navigation : false,
        responsive: {
            0:    {items: 1},
            479:  {items: 1},
            768:  {items: 1},
            991:  {items: 1},
            1024: {items: 1}
        }
    });


    /* ==========================================================================
    Magnify
    ========================================================================== */
    $("#magnify-image").mlens({
		imgSrc: $("#magnify-image").attr("data-big"),
		lensShape: "circle",
		lensSize: 180,
		borderSize: 4,
		borderColor: "#000000",
		borderRadius: 0
	});


    /* ==========================================================================
    Feature Image Height
    ========================================================================== */
    windowWidth = $(window).width();
    if (windowWidth >= 991) {
        $('#ready-section .feature-image').css({minHeight: '480px'});
        readyHeight = $('.col-md-6.readyHeights').height() + 40;
        $('#ready-section .feature-image').css({height: readyHeight});
    } else {
        $('#ready-section .feature-image').css({height: '480px'});
    }


    /* ==========================================================================
    FAQ Tabs
    ========================================================================== */
    $(function () {
         $(".faq-tabs > ul li:first-child a").data('idfirst');
         var id_first = $(".faq-tabs > ul li:first-child a").data('idfirst');
        $('.faq-tabs > ul li:first-child a').addClass('active');

        $('#'+id_first+'Containt').siblings().hide();
        $('.faq-tabs > ul li a').click(function (event) {
            var faq = this.hash;
            $('.faq-tabs > ul li a').removeClass('active');
            $(this).addClass('active');
            $(faq + 'Containt').siblings().slideUp(0);
            $(faq + 'Containt').slideDown(0);
            event.preventDefault();
        });
    });


    /* ==========================================================================
    Clients
    ========================================================================== */

    

    var carousel_columns = $(".owl-clients").data('carousel_columns');
    var autoplay = $(".owl-clients").data('autoplay');
    var pagination = $(".owl-clients").data('pagination');

    if(autoplay != 'false'){
        var auto_slider = 'true';
        var duration = autoplay;
    }else{
        var auto_slider = 'false';
        var duration = '3000';
    }


    $(".owl-clients").owlCarousel({
        autoplay: auto_slider,
        autoplayTimeout: duration,
        loop: true,
        nav : pagination,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0:    {items: 1},
            479:  {items: 1},
            768:  {items: 1},
            991:  {items: 1},
            1024: {items: carousel_columns}
        }
    });

   



    

    /* ==========================================================================
    MoreApps Slider
    ========================================================================== */
    var carousel_columns = $("#owl-apps").data('carousel_columns');
    var autoplay = $("#owl-apps").data('autoplay');
    var pagination = $("#owl-apps").data('pagination');

    if(autoplay != 'false'){
        var auto_slider = 'true';
        var duration = autoplay;
    }else{
        var auto_slider = 'false';
        var duration = '3000';
    }

    $('#owl-apps').owlCarousel({
        autoplay: auto_slider,
        autoplayTimeout: duration,
        loop: true,
        nav : pagination,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0:    {items: 1},
            479:  {items: 1},
            768:  {items: 1},
            991:  {items: 1},
            1024: {items: carousel_columns}
        }
    });


    /* ==========================================================================
    SideBar Menu
    ========================================================================== */
    $('a.sidebar-btn').on('click', function (e) { 
        e.preventDefault(); 
        $('#sidebar-wrapper').toggleClass('openclose');
        $('#sidebar-overlayer').toggleClass('openclose');
    });
    $('#sidebar-overlayer').on('click', function (e) {
        e.preventDefault();
        $('#sidebar-wrapper').removeClass('openclose');
        $('#sidebar-overlayer').toggleClass('openclose');
    });

    $('#sidebar-container a.scrollto').click(function (event) {
        $('html, body').scrollTo(this.hash, this.hash, {gap: {y: 2}, animation:  {easing: 'easeInOutCubic', duration: 800}});
        event.preventDefault();
        $('#sidebar-wrapper').removeClass('openclose');
        $('#sidebar-overlayer').removeClass('openclose');
	});

    $('#works-section .ui-slider-tab-content').css({width: $('#works-section .col-md-12').width()});
    $('.ui-slider-tabs-content-container').css({height: $('.ui-slider-tab-content.selected').height()});


    /* ==========================================================================
    FitVids
    ========================================================================== */
    $('.videos').fitVids();


    /* ==========================================================================
    Flickr Feed
    ========================================================================== */
    $('#flickr-feed').jflickrfeed({
        limit: 6,
        qstrings: {
            id: '25461271@N07'
        },
        itemTemplate: '<li>' + '<a href="{{image_b}}" class="fancybox" data-fancybox-group="gall1" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /></a>' + '</li>'
    });

    // jQuery(function ($) {

        if($('.home-section').length > 0){
            $('#supersized').css({height: $('.home-section').height()});
            //var aaaaa = $('.home-section').height();
            var i ;
            var image_link_split = '' ;
            var final_image_link = '';

            var slide_interval = $('.home-section').data('slide_interval');
            var transition = $('.home-section').data('transition');
            var transition_speed = $('.home-section').data('transition_speed');

            var link_image = $('.home-section').data('link_image');

           var array_link = link_image.split(",");
           
           for (i = 0; i < array_link.length; i++) {
                    image_link_split += "{image :'"+ array_link[i]+"', title : '"+''+"', thumb : '"+''+"', url : '"+''+"'},";
            }

            final_image_link += image_link_split;

            var slidesObj = [];
            $.each( array_link, function( key, value ) {
                var slide = new Object;         
                slide = {image:value };  
                slidesObj.push(slide);
            });
          

            $('.home-section').supersized({
                slide_interval : slide_interval, // Length between transitions
                transition : transition, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
                transition_speed : transition_speed, // Speed of transition
                slide_links : '0' , // Individual links for each slide (Options: false, 'num', 'name', 'blank')
                slides : slidesObj,
              
            });    
        }
       

    // });

    if ($('#sidebar-menu.sticky')) {
        var header = $('#sidebar-menu.sticky');
        var refresh = function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 99 || $('#sidebar-menu.fixedmenu').length > 0) {
                header.addClass('shrink');
            } else {
                
                    header.removeClass('shrink');    
                
                
            }
        };


        $(window).load(function () { refresh(); });
        $(window).scroll(function () { refresh(); });
        $(window).on('touchstart',function(){ refresh(); });
        $(window).on('scrollstart',function(){ refresh(); });
        $(window).on('scrollstop',function(){ refresh(); });
        $(window).on('touchmove',function(){ refresh(); });
    }
    
  
    


 $("#dot-menu .icon_home a").addClass('remove_indenti');
    var selector = '#sidebar-menu li ';
    var selectora = '#sidebar-menu li ';
    $(selector).on('click', function(){
        $(selector).removeClass('active');
        $(this).addClass('active');
    });




}); 
// JavaScript Document




/* ==========================================================================
Window Resize
========================================================================== */
jQuery(window).resize(function () {

    'use strict';

    var magnifyWidth, windowWidth, readyHeight;

    /* ==========================================================================
    Magnify Width
    ========================================================================== */
    magnifyWidth = jQuery('#magnify-container').width();
    jQuery('#mlens_wrapper_0').css({width: magnifyWidth});


    /* ==========================================================================
    Feature Image Height
    ========================================================================== */
    windowWidth = jQuery(window).width();
    if (windowWidth >= 991) {
        jQuery('#ready-section .feature-image').css({minHeight: '480px'});
        readyHeight = jQuery('.col-md-6.readyHeights').height() + 40;
        jQuery('#ready-section .feature-image').css({height: readyHeight});
    } else {
        jQuery('#ready-section .feature-image').css({height: '480px'});
    }

    jQuery('#supersized').css({height: jQuery('.home-section').height()});


});

/*  Create slide menu */
   jQuery(window).scroll(function () {

        var i,j;
        var idArray1 = [];
        var idArray = [];
        var idArraytop = [];
        var k;
        var removeItem = '';
        var AddActive  = jQuery(document).scrollTop();
        jQuery(".container_boxed > div ").each(function(){ idArray.push(this.id); });
        // tim href cua menu de lam id cho section
        //alert(idArray.length);
        idArray = jQuery.grep(idArray, function(value) {
          return value != removeItem;
        });
       idArray.push('footer-section');

       if (idArray.length >0   ) {
                for (i = 0; i < idArray.length; i++) {
                idArraytop[i] = jQuery("#"+idArray[i]).offset().top;
                
                }
        }
 

        //$('#dot-menu ul li a').addClass('active');
        for (var k = 0; k < idArraytop.length; k++){
          //  for (var d = 0; d < idArraytop.length; d++){
                
                
                 if (k==idArraytop.length-1) {

                    if(AddActive >= idArraytop[k-1]){
                        jQuery('#dot-menu ul li a').removeClass('active');
                        jQuery('#dot-menu ul li a[href$="#'+idArray[k]+'"] ').addClass('active');
                    }

                }
                else{

                    if(AddActive >= idArraytop[k] && AddActive < idArraytop[k+1]){
                         jQuery('#dot-menu ul li a').removeClass('active');
                
                        jQuery('#dot-menu ul li a[href$="#'+idArray[k]+'"]').addClass('active');
                    }
                };
            
        }
        

 
   
    });



/* ==========================================================================
Window Load
========================================================================== */
jQuery(window).load(function () {

    'use strict';

    var LoaderDelay, LoaderFadeOutTime;

    /* ==============================================
    Loader
    =============================================== */
    LoaderDelay = 350;
    LoaderFadeOutTime = 800;

    function hideLoader() {
        var loadingLoader = jQuery('#Loader');
        loadingLoader.fadeOut();
    }
    hideLoader();


    jQuery('#works-section .ui-slider-tab-content').css({width: jQuery('#works-section .col-md-12').width()});
    jQuery('.ui-slider-tabs-content-container').css({height: jQuery('.ui-slider-tab-content.selected').height()});
    if(jQuery('.home-section').length > 0){
        jQuery('#supersized').css({height: jQuery('.home-section').height()});    
    }
    

});




