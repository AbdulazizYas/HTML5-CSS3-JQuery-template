
$(function () {

 //declaration variables
  const header = $('header'),
        slider = $('.slider');
        //Adjust Header Height
  header.height($(window).innerHeight());
  $(window).resize(() =>{
    header.height($(window).innerHeight());
    slider.each(function () {
      $(this).css('padding-top',($(window).height() - $('.slider div').height()) / 2);
    });
  });
  //Add Active class to Links
  $('.links li a').click(function (){
    $(this).parent().addClass('active').siblings().removeClass('active');
  });
  //Make A Slider

  slider.bxSlider({pager:false});


  slider.each(function () {
    $(this).css('padding-top',($(window).height() - $('.slider div').height()) / 2);
  });

  // Scroll Smoothly
  $('.links li a').click(function () {
    $('html,body').animate({
      scrollTop: $(`#${$(this).data('value')}`).offset().top
    },1000);
  });

  // Make Qoutes Auto slider
 (function autoSlider() {

   $('.t-slider .shown').each(function () {

     if(!$(this).is(':last-child')){

       $(this).delay(3000).fadeOut(500,function () {

         $(this).removeClass('shown').next().addClass('shown').fadeIn();
          autoSlider();
       });

     }else{

       $(this).delay(3000).fadeOut(500,function () {
         $(this).removeClass('shown');
         $('.t-slider div').eq(0).addClass('shown').fadeIn();
          autoSlider();
       });
     }

   });
 })();



 // Trigger mixitup
 $('#Container').mixItUp();

 // Switch selected category

 $('.shuffle li').click(function () {
   $(this).addClass('selected').siblings().removeClass('selected');
 });
 //Trigger Nice Scroll Plugin
 let mainColor = getComputedStyle(document.documentElement).getPropertyValue('--mainColor');
 console.log(mainColor);
 $('html,body').niceScroll();

});
