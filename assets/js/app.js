//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function () {
  }
};
$("document").ready(function () {
  app.init();
  var activeItem = document.getElementsByClassName("carousel-item");
  var slideImage = document.getElementsByClassName("image-item");
  var slideWrapper = $('.carousel-inner');
  var index = 0;
  var overlay = $(".overlay");
  var prevButton = $(".carousel-control-prev");
  var nextButton = $( ".carousel-control-next" );
  var currentItemHeight = activeItem[index].offsetHeight

  slideWrapper.css('padding-top', currentItemHeight);
  overlay.css('height', currentItemHeight);

  console.log(slideImage)

  nextButton.click(function() {
    // if (index === 0 ) slideWrapper.css('padding-top', 0);
    slideWrapper.css('transform', 'translateY(' + (index * -150) + 'px)');
    activeItem[index].classList.remove("active")
    slideImage[index].classList.remove("active")
    if (index === activeItem.length - 1) {
      index = 0
      overlay.css('height', nextItemHeight);
      activeItem[index].classList.add("active")
      slideWrapper.css('transform', 'translateY(0px)');
      slideWrapper.css('padding-top', currentItemHeight);
    } else index = index + 1;
    var nextItemHeight = activeItem[index].offsetHeight
    overlay.css('height', nextItemHeight);
    activeItem[index].classList.add("active")
    slideImage[index].classList.add("active")
    if (index === 0 ) slideWrapper.css('padding-top', "150px")
    else slideWrapper.css('padding-top', "0")
  });

  prevButton.click(function() {
    activeItem[index].classList.remove("active")
    slideImage[index].classList.remove("active")
    if (index === 0 ) {
      index = activeItem.length - 1
      var nextItemHeight = activeItem[index].offsetHeight
      overlay.css('height', nextItemHeight);
      activeItem[index].classList.add("active")
      slideImage[index].classList.add("active")
      slideWrapper.css('transform', 'translateY(-450px)');
      slideWrapper.css('padding-top', "150px")
    }
    else {
      slideWrapper.css('padding-top', "150px")
      slideWrapper.css('transform', 'translateY(' + ((index - 1) * -150) + 'px)');
      index = index - 1;
      var nextItemHeight = activeItem[index].offsetHeight
      overlay.css('height', nextItemHeight);
      activeItem[index].classList.add("active")
      slideImage[index].classList.add("active")
    }
  })
});