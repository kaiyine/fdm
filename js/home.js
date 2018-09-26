$(function(){  
  //header
    $('header').append('<nav class="navbar navbar-expand-lg container"><a id="site-title" class="navbar-brand" href="fdm/">Foresta Di Memoria</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-bar" aria-controls="nav-bar" aria-expanded="false" aria-label="Toggle navigation"><span class="icon icon-menu" aria-hidden="true"></span></button><div class="collapse navbar-collapse justify-content-end" id="nav-bar"><ul class="navbar-nav mt-3 mt-sm-0"><li class="nav-item"><a class="nav-link home" href="index.html"><span class="icon-home3 icon"></span>&nbsp;Home</a></li><li class="nav-item"><a class="nav-link about" href="about.html"><span class="icon-stack icon"></span>&nbsp;About</a></li><li class="nav-item"><a class="nav-link profile" href="profile.html"><span class="icon-book icon"></span>&nbsp;Profile</a></li><li class="nav-item"><a class="nav-link gallery" href="gallery.html"><span class="icon-images icon"></span>&nbsp;Gallery</a></li></ul></div></nav>');
  
  //footer
    $('footer').append('<div class="container">©2005-2018 All rights reserved by Foresta Di Memoria</div>');
  
  //totop
	$('body').append('<div id="toTop"><i class="glyphicon glyphicon-chevron-up"></i></div>');
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 200) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function () {
		$("html, body").animate({
			scrollTop : 0
		}, 600);
		return false;
	});
  
    //nav
    $('.navbar-toggler').click(function () {
    if ($('.navbar-toggler span').hasClass('icon-menu')) {
      $('.navbar-toggler span').removeClass('icon-menu').addClass('icon-cross');
    } else if ($('.navbar-toggler span').hasClass('icon-cross')) {
      $('.navbar-toggler span').removeClass('icon-cross').addClass('icon-menu');
    }
  });
}); 
