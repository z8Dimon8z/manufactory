$('.idea__slider-inner').slick({
  slidesToShow: 4, 
  slidesToScroll: 4,
  variableWidth: true, // изменине размеров слайда активного
  centerMode: true, // растягивание слайдера на весь экран
  swipe: false, // отключения пролиствования
  speed: 0, // отключение анимации
  focusOnSelect: true, // выбор слайда при нажатии на активный слайд
  prevArrow: '<button type="button" class="idea__slider-arrow idea__slider-prew"><img src="images/idea/slider-btn-left.svg"></button>',
  nextArrow: '<button type="button" class="idea__slider-arrow idea__slider-next"><img src="images/idea/slider-btn-right.svg"></button>',
  
});