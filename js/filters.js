$( document ).ready(function() {
	var $btns = $('.bttn').click(function() {
	  if (this.id == 'all') {
	    $('#content-blog > div').fadeIn(450);
	  } else {
	    var $el = $('.' + this.id).fadeIn(450);
	    $('#content-blog > div').not($el).hide();
	  }
	  $btns.removeClass('active');
	  $(this).addClass('active');
	});
});