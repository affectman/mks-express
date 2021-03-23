$(document).ready(function() {

  var doFullpage = document.documentElement.clientWidth;
  if (doFullpage > 768) {
    $('.fullpage').fullpage({
      scrollOverflow: true,
      scrollOverflowOptions: {click: false},
      menu: '.menu',
      anchors:['firstPage', 'secondPage', 'thirdPage', 'lastPage'],
      /*anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],*/
      afterRender: function () {
        $('.projects__last').html($('.projects__slides').length);
      },
      afterSlideLoad: function (section, origin, destination) {
        $('.projects__first').html(++destination.index);
      }
    });
  }
  else{
    $.fn.fullpage(
        {
          scrollOverflow: true
        }
    );
    /*$('.fullpage').fullpage({
      scrollOverflow: true,
      resize : false,
      scrollOverflowOptions: {click: false},
      menu: '.menu',
      anchors:['firstPage', 'secondPage', 'thirdPage', 'lastPage'],
      /!*anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],*!/
      afterRender: function () {
        $('.projects__last').html($('.projects__slides').length);
      },
      afterSlideLoad: function (section, origin, destination) {
        $('.projects__first').html(++destination.index);
      }
    });*/
  }


  $(document).on('click', '.scroll-down', function () {
    fullpage_api.moveSectionDown();
  });

  $('.amoforms__submit-button').click(function () {
      ym(62140414,'reachGoal','Отправить');
      gtag('event', 'conversion', {
        'send_to': 'AW-647938872/9N52CPSs9s0BELiG-7QC',
        'transaction_id': ''
      });
      return true;
  });

  $(document).on('click', '.delivery__btn', btnChange);
  $(document).on('click', '.main-menu__btn', btnChange);
  $(document).on('click', '.delivery__hamburger', openMenu);
  $(document).on('click', '.main-menu__close', closeMenu);
  $(document).on('click', 'main-menu', closeMenu);
  $(document).on('click', '.projects__mini a', changeImg);
  $(document).on('input', '.calc', changeInput);
  $(document).mouseup(function(e) {
    var $target = $(e.target);
    if ($target.closest(".main-menu__close").length == 0) {
      $(".main-menu").removeClass("main-menu--active");
    }
  });

  $("#form").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
    e.preventDefault();
  });


  function changeImg(event) {
    event.preventDefault();
    $('.projects__big img').attr('src', $(this).attr('data-src'));
  }

  function changeInput(event) {
    event.preventDefault();
    $(this).find('.calc__range output').val($(this).find('.calc__range input').val());
  }

  function openMenu(event) {
    event.stopPropagation();
    $('.main-menu').addClass('main-menu--active');
  }

  function closeMenu(event) {

    $('.main-menu').removeClass('main-menu--active');
  }

  function btnChange(event) {
    event.preventDefault();
    $('#amoforms_action_btn').click();
  }


});
