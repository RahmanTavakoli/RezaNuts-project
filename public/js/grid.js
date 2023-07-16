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

	// dashboard page jqueries

	function removeAllSidebarToggleClass() {
		$('#sidebar-toggle-hide').removeClass('d-md-inline');
		$('#sidebar-toggle-hide').removeClass('d-none');
		$('#sidebar-toggle-show').removeClass('d-inline');
		$('#sidebar-toggle-show').removeClass('d-md-none');
	 }
  
  
	 $('#sidebar-toggle-hide').click(function () {
		$('#sidebar').fadeOut(300);
		$('#main-body').animate({
		   width: "100%"
		}, 300);
		setTimeout(function () {
		   removeAllSidebarToggleClass();
		   $('#sidebar-toggle-hide').addClass('d-none');
		   $('#sidebar-toggle-show').removeClass('d-none');
		}, 300)
	 });
  
  
  
	 $('#sidebar-toggle-show').click(function () {
		$('#sidebar').fadeIn(300);
		setTimeout(function () {
		   removeAllSidebarToggleClass();
		   $('#sidebar-toggle-hide').removeClass('d-none');
		   $('#sidebar-toggle-show').addClass('d-none');
		}, 300);
	 });
  
	 $('#menu-toggle').click(function () {
		$('#body-header').toggle(300);
	 });
  
	 $('#search-toggle').click(function () {
		$('#search-toggle').removeClass('d-md-inline');
		$('#search-area').addClass('d-md-inline');
		$('#search-input').animate({
		   width: "12rem"
		}, 300);
	 });
  
	 $('#search-area-hide').click(function () {
		$('#search-input').animate({
		   width: "0"
		}, 300);
		setTimeout(function () {
		   $('#search-toggle').addClass('d-md-inline');
		   $('#search-area').removeClass('d-md-inline');
		}, 300);
	 });
  
	 $('#header-notification-toggle').click(function () {
		$('#header-notification').fadeToggle();
	 });
  
	 $('#header-comment-toggle').click(function () {
		$('#header-comment').fadeToggle();
	 });
  
	 $('#header-profile-toggle').click(function () {
		$('#header-profile').fadeToggle();
	 });
  
  
  
	 $('.sidebar-group-link').click(function () {
  
		$('.sidebar-group-link').removeClass('sidebar-group-link-active');
		$('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-down');
		$('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-left');
		$(this).addClass('sidebar-group-link-active');
		$(this).children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-left');
		$(this).children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-down');
	 });
  
  });
  
  
  
  
  $('#full-screen').click(function () {
	 toggleFullScreen();
  });

function toggleFullScreen() {
	if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
	   if (document.documentElement.requestFullscreen) {
		  document.documentElement.requestFullscreen();
	   } else if (document.documentElement.mozRequestFullscreen) {
		  document.documentElement.mozRequestFullscreen();
	   } else if (document.documentElement.webkitRequestFullscreen) {
		  document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
	   }
	   $('#screen-compress').removeClass('d-none');
	   $('#screen-expand').addClass('d-none');
	} else {
	   if (document.cancelFullScreen) {
		  document.cancelFullScreen();
	   } else if (document.mozCancelFullScreen) {
		  document.mozCancelFullScreen();
	   } else if (document.webkitCancelFullScreen) {
		  document.webkitCancelFullScreen();
	   }
	   $('#screen-compress').addClass('d-none');
	   $('#screen-expand').removeClass('d-none');
	}
 }
 
 //addPost Ajax for upLoad image 
 
 document.getElementById("imageUpload").onclick = function () {
	let xhttp = new XMLHttpRequest();
 
	const selectedImage = document.getElementById("selectedImage");
	const imageStatus = document.getElementById("imageStatus");
	const progressDiv = document.getElementById("progressDiv");
	const progressBar = document.getElementById("progressBar");
	const uploadAddress = document.getElementById("uploadAddress");
 
	xhttp.onreadystatechange = function () {
		  if(xhttp.status === 200){
			 imageStatus.innerHTML = "آپلود عکس موفقیت امیز بود";
			 uploadAddress.innerHTML = this.responseText;
			 selectedImage.value = "";
		  }else{
			 imageStatus.innerHTML = this.responseText;
		  }
	}
 
	xhttp.open("POST", "/dashboard/image-upload");
 
	xhttp.upload.onprogress = function(e){
	   if(e.lengthComputable){
		  let result = Math.floor((e.loaded / e.total) * 100);
		  if(result !== 100){
			 progressBar.innerHTML = result + "%";
			 progressBar.style = "width:" + result + "%";
		  }else{
			 progressDiv.style = "display: none"
		  }
	   }
	} 
 
	let formData = new FormData();
 
	if(selectedImage.files.length > 0){
	   progressDiv.style = "display: block"
	   formData.append("image", selectedImage.files[0]);
	   xhttp.send(formData);
	}else{
	   imageStatus.innerHTML = "برای اپلود باید عکسی انتخاب کنید"
	}
}