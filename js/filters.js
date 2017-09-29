$( document ).ready(function() {
	var $btns1 = $('.bttn-blog').click(function() {
	  if (this.id == 'all-blog') {
	    $('#content-blog > div').fadeIn(450);
	  } else {
	    var $el = $('.' + this.id).fadeIn(450);
	    $('#content-blog > div').not($el).hide();
	  }
	  $btns.removeClass('active');
	  $(this).addClass('active');
	});

	var $btns2 = $('.bttn-projects').click(function() {
	  if (this.id == 'all-projects') {
	    $('#content-projects > div').fadeIn(450);
	  } else {
	    var $el = $('.' + this.id).fadeIn(450);
	    $('#content-projects > div').not($el).hide();
	  }
	  $btns.removeClass('active');
	  $(this).addClass('active');
	});
});