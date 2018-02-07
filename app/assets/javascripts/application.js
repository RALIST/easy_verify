// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require particles.min
//= require particles
//= require_tree .


$(document).on('turbolinks:load', function(){
  FontAwesome.dom.i2svg();
  $('#toggler').bigSlide({
    menu: '#leftbar',
    easyClose: true,
    push: '.push',
    menuWidth: '18em'
  });
});


$(document).on('turbolinks:load', function(){
  var top = $('#main-menu').offset().top;
  $(window).scroll(function(){
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= top){
      $('#main-menu').addClass('fixed-top bg-gradient-info');
      $('#main-menu .col-12').removeClass('py-3');
      $('#main-menu a').addClass('text-white');
    }else{
      $('#main-menu').removeClass('fixed-top bg-gradient-info');
      $('#main-menu a').removeClass('text-white');
      $('#main-menu .col-12').addClass('py-3');
    }
  })
})


$(document).on('turbolinks:load', function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#main-menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#main-menu ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
