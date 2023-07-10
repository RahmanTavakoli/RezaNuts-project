jQuery(document).ready(function ($) {
	var $lateral_menu_trigger = $('#cd-menu-trigger'),
		$content_wrapper = $('.cd-main-content'),
		$navigation = $('header');

	//open-close lateral menu clicking on the menu icon
	$lateral_menu_trigger.on('click', function (event) {
		event.preventDefault();

		$lateral_menu_trigger.toggleClass('is-clicked');
		$navigation.toggleClass('lateral-menu-is-open');
		$content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
			// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
			$('body').toggleClass('overflow-hidden');
		});
		$('#cd-lateral-nav').toggleClass('lateral-menu-is-open');

		//check if transitions are not supported - i.e. in IE9
		if ($('html').hasClass('no-csstransitions')) {
			$('body').toggleClass('overflow-hidden');
		}
	});

	//close lateral menu clicking outside the menu itself
	$content_wrapper.on('click', function (event) {
		if (!$(event.target).is('#cd-menu-trigger, #cd-menu-trigger span')) {
			$lateral_menu_trigger.removeClass('is-clicked');
			$navigation.removeClass('lateral-menu-is-open');
			$content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
				$('body').removeClass('overflow-hidden');
			});
			$('#cd-lateral-nav').removeClass('lateral-menu-is-open');
			//check if transitions are not supported
			if ($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('overflow-hidden');
			}

		}
	});

	//open (or close) submenu items in the lateral menu. Close all the other open submenu items.
	$('.item-has-children').children('a').on('click', function (event) {
		event.preventDefault();
		$(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
	});
	// ---------- Mouse Enter navbar menu ----------
	// all links hide
	$('#mixed-nuts-navbar-link-section , #nuts-navbar-link-section , #chocolate-navbar-link-section').hide();
	// mouse Enter navbar and open link's section with link
	$('.mixed-nuts-navLink , #mixed-nuts-navbar-link-section ').mouseenter(function () {
		$('#mixed-nuts-navbar-link-section ').show();
		$('.hero').css('background:', 'linear-gradient(rgba(0, 0, 0, 0.601), rgba(2, 2, 2, 0.65));');
	});
	$(' .nuts-navLink , #nuts-navbar-link-section').mouseenter(function () {
		$(' #nuts-navbar-link-section').show();
	});
	$('.chocolate-navLink , #chocolate-navbar-link-section').mouseenter(function () {
		$(' #chocolate-navbar-link-section').show();
	});

	$('.mixed-nuts-navLink , .nuts-navLink , .chocolate-navLink , #mixed-nuts-navbar-link-section , #nuts-navbar-link-section , #chocolate-navbar-link-section').mouseleave(function () {
		$('#mixed-nuts-navbar-link-section , #nuts-navbar-link-section , #chocolate-navbar-link-section').hide();
	});
	// default links's section height = 0

	



	// -------------------------------------------------------image magnifier glass *****

	$('.img-magnifier-glass ').hide();
	$('#myimage').mouseenter(function () {
		$('.img-magnifier-glass ').fadeIn();
	});
	$('.image-section').mouseleave(function () {
		$('.img-magnifier-glass ').hide();
	});


	//fixed btn
	
	function showpanel() {
		$('.container').removeClass('startup');
	$('.ball').addClass('active').delay(2000).queue(function(next) {
			$(this).removeClass('active');
			next();
		});
	 }
	
	$('.ball').click(function() {
		$(this).toggleClass('active');
	});


	$('i').click(function() {
		$('.ball').addClass('expand');
		$('.back').addClass('show');
	});

	$('.back').click(function() {
		$(this).removeClass('show');
		$('.ball').removeClass('expand');
		$('.container').addClass('shake').delay(500).queue(function(next) {
			$(this).removeClass('shake');
			next();
		});
	});
	
 setTimeout(showpanel, 1800);
	  




	// product porfile btn
	$(".product-comment").hide();
	$(".product-feature").hide();


	$(".product-feature-btn").click(function (e) {
		e.preventDefault();
		$(".product-feature").show();
		$(".product-info").hide();
		$(".product-comment").hide();

	});
	$(".product-comment-btn").click(function (e) {
		e.preventDefault();
		$(".product-comment").show();
		$(".product-info").hide();
		$(".product-feature").hide();

	});
	$(".product-info-btn").click(function (e) {
		e.preventDefault();
		$(".product-info").show();
		$(".product-comment").hide();
		$(".product-feature").hide();

	});


});