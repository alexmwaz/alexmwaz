var main = function () {
	
  $('.reveal').click(function() {
		$('.aside').animate({
      left: "-20.2em"
    }, 0);
		
		$(`.${this.id}`).animate({
      left: "0em"
    }, 200);
		
    $('.main').animate({
      left: $('.aside').width()
    }, 200);
  });

  $('.close').click(function() {
    $('.aside').animate({
      left: "-20.2em"
    }, 200);
		
    $('.main').animate({
      left: "0em"
    }, 200);
  });
};

$(document).ready(main);