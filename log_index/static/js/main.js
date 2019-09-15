

var sections = $('section'), 
nav = $('nav'),
button = $('button');

$(function(){
   var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top ,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('span').removeClass('active');
      nav.find('span[id="sp'+$(this).attr('id')+'"]').addClass('active');

    }
  });
});

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top ,
        bottom = top + $(this).outerHeight() ,
        menu_bottom = $('#0').offset().top,
        menu_height = $('#0').outerHeight() ;
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('span').removeClass('active');
      nav.find('span[id="sp'+$(this).attr('id')+'"]').addClass('active');
    }

    if (cur_pos >= menu_bottom + menu_height) {
      $(".button-back").css( "opacity", "1" );
    }

    if (cur_pos < menu_bottom + menu_height) {
      $(".button-back").css( "opacity", "0" );
    }

  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href')
    , offset = $(id).offset()
    , height_nb = $('#none-block').outerHeight();
  
  $('html, body').animate({
    scrollTop: offset.top + height_nb
  }, 1400);
  
  return false;
});

$(function(){
  $(button).bind('click', function(){
    if($(this).hasClass("buttcont")){
       $('html, body').animate({
         scrollTop: $('#5').offset().top + $('#none-block').outerHeight()
       }, 1200);
    }

    if($(this).hasClass("button-back")){
       $('html, body').animate({
         scrollTop: $('#0').offset().top 
       }, 1400);
    }
  });
});


$( document ).ready(function(){
 $( "div" ).hover(function(){ // задаем функцию при наведении курсора на элемент 
   if($(this).hasClass("inst-block")){
      $(this).find('p').css( "color", "white" );
      $(this).find('i').css( "color", "white" )
    }
   }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента  
   if($(this).hasClass("inst-block")){
      $(this).find('p').css( "color", "#BCBCBC" );
      $(this).find('i').css( "color", "#BCBCBC" )
    }
  });
});

