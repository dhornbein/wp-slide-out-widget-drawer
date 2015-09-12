jQuery(document).ready(function($){

  var wrapper = '.slide-out-widget-wrapper',
      title = wrapper + '.closed .slide-out-widget:first-child .slide-out-widget-title';

  if( !$(title).length ){
    var defaultTitle = $(wrapper).data('default');
    $(wrapper).prepend('<div class="slide-out-widget"><h2 class="slide-out-widget-title">' + defaultTitle + '</h2></div>');
  }

  $(title).click(function(){
    $('.slide-out-widget-wrapper').toggleClass('open');
  });
});