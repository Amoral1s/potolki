$(document).ready(function ($) {

    if ($(window).width() < 992) {
        
         //Всплывающее меню
        $('.slide-menu').click(function(){
            $('.menu').slideToggle(200);
        });
    } else {
        //Всплывающее меню
        $('.slide-menu').hover(function(){
            $('.menu').slideDown(0);
        }, function(){
            $('.menu').slideUp(0);
        });
    }


    $('.overlay').on('click', function () { 
        $(this).fadeOut(200);
        $('.popup').fadeOut(200);
     });
    $('.close').on('click', function () { 
        $('.popup').fadeOut(200);
        $('.overlay').fadeOut(200);
     });
    $('.popup-gallery img').on('click', function () { 
        $('.popup').fadeOut(200);
        $('.overlay').fadeOut(200);
     });
    $('.call-size').on('click', function () { 
        $('.popup-size').fadeIn(200);
        $('.overlay').fadeIn(200);
     });

  
    const gallery = document.querySelector('.gallery'),
        galleryLink = document.querySelectorAll('.gallery-cats-item'),
        galleryWrap = document.querySelectorAll('.gallery-wrap'),
        galleryWrapMoar = document.querySelectorAll('.gallery-wrap .load-more-button'),
        galleryWrapImg = document.querySelectorAll('.gallery-wrap-item'),
        feedItem = document.querySelectorAll('.feed-wrap-item');

    if (feedItem.length > 0) {
        feedItem.forEach((elem) => {
            elem.addEventListener('click', () => {
                const img = elem.querySelector('.feed-img'),
                        frame = elem.querySelector('.feed-frame');
                img.style.display = 'none';
                frame.style.display = 'block';
                frame.src = elem.dataset.src;
                elem.classList.add('feed-wrap-item-active');


            });
        })
    }

    if (gallery) {

        galleryWrapImg.forEach((elem) => {
            elem.addEventListener('click', () => {
                $('.overlay').fadeIn(200);
                $('.popup-gallery').fadeIn(200);
                $('.popup-gallery img').attr('src', elem.children[0].dataset.src);
            }); 
        });

        


        galleryWrap.forEach((elem, i) => {
            if (i != 0) {
                elem.style.display = 'none';
            }
        });
        galleryWrapMoar.forEach((elem, i) => {
            elem.addEventListener('click', () => {
                elem.parentNode.parentNode.classList.add('active-gallery');
                elem.style.display = 'none';
            });
        });
        galleryLink.forEach((elem, i) => {
            elem.addEventListener('click', () => {
                galleryLink.forEach((e) => {
                    e.classList.remove('active-g');
                });
                elem.classList.add('active-g');
                galleryWrap.forEach((e) => {
                    e.style.display = 'none';
                });
                if (galleryWrap[i]) {
                    galleryWrap[i].style.display = 'flex';
                } else {
                    return;
                }
            });
        });
    }


    

    $('body').on('click', '.plus', function(e) {
        e.preventDefault();
        $input = $(this).prev('input');
        var val = parseInt($input.val());
        var step = $input.attr('step');
        step = 'undefined' !== typeof(step) ? parseInt(step) : 1;
        $input.val( val + step ).change();
    });
    
    $('body').on('click', '.minus', function(e) {
        e.preventDefault();
        
        $input = $(this).next('input');
        var val = parseInt($input.val());
        var step = $input.attr('step');
        step = 'undefined' !== typeof(step) ? parseInt(step) : 1;
        if (val > 0) {
            $input.val( val - step ).change();
        } 
    });


  /* $('select').addClass('select');

  $('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 150; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
  }); */
  //calc
  const calcRange = document.querySelector('#calc-range');

if (calcRange) {
    const calcRangeResult = document.querySelector('.calc-result span'),
            calcRadio = document.querySelectorAll('input[name="type"]');

    let radioVal = 1;

    calcRadio.forEach((elem) => {
        elem.addEventListener('click', () => {
            radioVal = +elem.value;
            calcFunc();
        });
    });

    calcRange.addEventListener('input', () => {
        calcRangeResult.textContent = calcRange.value;
        calcFunc();

    });

    const calcFunc = () => {
        
    }
}


    $(window).scroll(function() { 
        if ($(window).scrollTop() > 120) {
            
            $('body').find(".lazy-img").each(function() {   
                $(this).attr("src",$(this).attr("data-src"));
            });

            if ($(window).width() < 992) {
                $('.header').addClass('header-active');
            }
        } else {
            if ($(window).width() < 992) {
                $('.header').removeClass('header-active');
            }
        }
    });

    //cf7
  $(".wpcf7").on('wpcf7mailsent', function(event){
    //alert('GOOD');
    $('#thx').fadeIn(200);
    //Скрытие поп окна автоматически, через 5,5 секнд
    $('.overlay').fadeIn(300);

    setTimeout(function(){
      $('.overlay').fadeOut(300);
      $('.popup').fadeOut(300);
      $('#thx').fadeOut(200);
    },2500);  //3500 = 3,5 секунды
    
    setTimeout(function(){$('.popup').fadeOut(300);},2700); 
    setTimeout(function(){$('#calc').fadeOut(300);},2700); 
    
    setTimeout(function(){$('.overlay').fadeOut(300);},2700);
  });

  $(".wpcf7").on('wpcf7invalid', function(event){
    alert('Заполните поля правильно и повторите попытку!');
  });
  $(".wpcf7").on('wpcf7mailfailed', function(event){
    alert('Ошибка при отправке! Попробуйте отправить заявку еще раз!');
  });

  $('.burger').on('click', function () { 
    $(this).toggleClass('burger-active');
    $('.header-bot-link').fadeToggle(300);
    $('.header-bot-menu').slideToggle(200);
 });

 $('.vars-wrap-item').on('click', function() {
    

    $('.overlay').fadeIn(200);
    $('.popup-gallery').fadeIn(200);
    $('.popup-gallery img').attr('src', $(this).children('img').attr('src'));
 });


});