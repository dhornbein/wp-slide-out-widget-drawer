jQuery(document).ready(function($){
    $('.slide-out-widget-wrapper.closed .slide-out-widget:first-child .slide-out-widget-title').click(function(){
      $('.slide-out-widget-wrapper').toggleClass('open');
    });
});