/*
==================================
       Preloader Style
==================================
*/

 $(window).on('load', function () {
      $("#status").delay(1000).fadeOut();
    $("#preloader").delay(1000).fadeOut();
 });

 /*
==================================
       Team Members
==================================
*/

/*$(function(){
$('.owl-carousel').owlCarousel({
    items:2,
    margin:10,
    loop:true,
    autoplay:true,
    autoHeight:true
});
});*/

$(function(){
$('.team-members').owlCarousel({
    items:2,
    margin:10,
    loop:true,
    autoplay:true,
    autoHeight:true
});
});

/*
==================================
       Team Members
==================================
*/

$(function(){
$('#progress-elements').waypoint(function(){
$('.progress-bar').each(function() {
$(this).animate({
width: $(this).attr("aria-valuenow") + "%"
}, 1000);

});
this.destroy();
},{offset:'bottom-in-view'});
});

/*
==================================
       responsive-tabs
==================================
*/

$( function(){

$('#services-tabs').responsiveTabs({
   animation: 'slide'
});

});


/*
==================================
           Portfolio
==================================
*/


 $(window).on('load', function () {
   $("#isotope-container").isotope({
});

// filter items on button click

$("#isotope-filters").on('click','button', function() {

  /* Act on the event */
   var filtervalue = $(this).attr('data-filter');
   /*filter your data*/
    $("#isotope-container").isotope({
          filter:filtervalue
     });
    //ative button
    $("#isotope-filters").find('.active').removeClass('active');
    $(this).addClass('active');
});

 });

 /*
==================================
           Magnify
==================================
*/

$( function() {

  $('#portfolio-wrapper').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
      enabled: true
    }
  // other options
  });

});

/*
==================================
        Portfolio
==================================
*/


$(function(){

       $('#testimonial-slider').owlCarousel({
           items:1,
           margin:10,
           loop:true,
           autoplay:false,
           autoHeight:true
       });
 });
       