jQuery(document).ready(function($) {
  $('.custom1').owlCarousel({
		items: 4,
		nav: true,
		dots: false,
		loop: true,
		margin: 30,
		stagePadding: 0,
		smartSpeed: 450,
		navText : ['<div class="special__left"></div>','<div class="special__right"></div>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                margin: 8,
                loop:false
            },
            576:{
                items:2,
                nav:true,
                margin: 8,
                loop:false
            },
            720:{
                items:3,
                nav:true,
                margin: 10
            },
            960:{
                items:3,
                nav:true
            },
            1200:{
                items:4,
                nav:true
            }
        }
	}),
  $('.custom2').owlCarousel({
	  animateOut: 'slideOutDown',
	  animateIn: 'flipInX',
	  items: 6,
	  dots: false,
	  nav: true,
	  loop: true,
	  margin: 30,
	  stagePadding: 0,
	  smartSpeed: 450,
	  navText : ['<div class="banner__left"></div>','<div class="banner__right"></div>'],
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          540:{
              items:2,
              nav:true
          },
          720:{
              items:3,
              nav:false
          },
          960:{
              items:4,
              nav:true,
              loop:false
          }
      }
	}),
  $('.custom3').owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      items: 4,
      nav: true,
      dots: false,
      loop: true,
      margin: 30,
      stagePadding: 0,
      smartSpeed: 450,
      navText : ['<div class="special__left"></div>','<div class="special__right"></div>'],
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true,
              margin: 8
          },
          576:{
              items:2,
              nav:true,
              margin: 8
          },
          720:{
              items:3,
              nav:true,
              margin: 10
          },
          960:{
              items:3,
              nav:true
          },
          1200:{
              items:4,
              nav:true,
              loop:false,
              touchDrag: false,
              mouseDrag: false
          }
      }
  });
});
// select2
$(document).ready(function() {
    $('#device').select2({
        placeholder: "Выберите тип устройств",
        minimumResultsForSearch: Infinity
    });
    $('#brend').select2({
        placeholder: "Производитель",
        minimumResultsForSearch: Infinity
    });
    $('#model').select2({
        placeholder: "Модель",
        minimumResultsForSearch: Infinity
    });
});

// header bottom menu
$(function() {

  var $nav = $('nav.greedy');
  var $btn = $('nav.greedy button');
  var $vlinks = $('nav.greedy .links');
  var $hlinks = $('nav.greedy .hidden-links');

  var numOfItems = 0;
  var totalSpace = 0;
  var breakWidths = [];

  // Get initial state
  $vlinks.children().outerWidth(function(i, w) {
    totalSpace += w;
    numOfItems += 1;
    breakWidths.push(totalSpace);
  });

  var availableSpace, numOfVisibleItems, requiredSpace;

  function check() {

    // Get instant state
    availableSpace = $vlinks.width() - 10;
    numOfVisibleItems = $vlinks.children().length;
    requiredSpace = breakWidths[numOfVisibleItems - 1];

    // There is not enought space
    if (requiredSpace > availableSpace) {
      $vlinks.children().last().prependTo($hlinks);
      numOfVisibleItems -= 1;
      check();
      // There is more than enough space
    } else if (availableSpace > breakWidths[numOfVisibleItems]) {
      $hlinks.children().first().appendTo($vlinks);
      numOfVisibleItems += 1;
    }
    // Update the button accordingly
    $btn.attr("count", numOfItems - numOfVisibleItems);
    if (numOfVisibleItems === numOfItems) {
      $btn.addClass('hidden');
    } else $btn.removeClass('hidden');
  }

  // Window listeners
  $(window).resize(function() {
    check();
  });

  $btn.on('click', function() {
    $hlinks.toggleClass('hidden');
  });

  check();

});
$('#menu').slinky({
    // auto resize height
    resize: true,
    // animation speed
    speed: 100,
    // theme CSS
    theme: 'slinky-theme-default',
    // shows title of sub menu
    title: false
});
$( document ).ready( function () {
    $( '.dropdown-menu a.dropdown-toggle' ).on( 'click', function ( e ) {
        var $el = $( this );
        var $parent = $( this ).offsetParent( ".dropdown-menu" );
        if ( !$( this ).next().hasClass( 'show' ) ) {
            $( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
        }
        var $subMenu = $( this ).next( ".dropdown-menu" );
        $subMenu.toggleClass( 'show' );

        $( this ).parent( "li" ).toggleClass( 'show' );

        $( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
            $( '.dropdown-menu .show' ).removeClass( "show" );
        } );

         if ( !$parent.parent().hasClass( 'navbar-nav' ) ) {
            $el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
        }

        return false;
    } );
} );

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  draggable: true,
  asNavFor: '.slider-nav'
});


$('.slider-nav').slick({
  slidesToShow: 4,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  vertical: true,
  arrows: false,
  infinite: false,
  draggable: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        draggable: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        draggable: true,
        asNavFor: false,
        vertical: false,
        asNavFor: false,
        arrows: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
