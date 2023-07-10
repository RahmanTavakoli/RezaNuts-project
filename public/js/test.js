$('.mixed-nuts__navbar-links , .nuts__navbar-links , .chocolate__navbar-links').hide();
	$('#mixed-nuts-navbar-link-section , #nuts-navbar-link-section ,#chocolate-navbar-link-section').height(0);
	// mouse Enter navbar and open link's section with link
	$('.mixed-nuts-navLink , #mixed-nuts-navbar-link-section ').mouseenter(function () {
		setTimeout(() => {
			$('#mixed-nuts-navbar-link-section ').height(500);
		}, 40);

		$('.mixed-nuts__navbar-links').show();
		$('.nuts__navbar-links , .chocolate__navbar-links').hide();
	});
	$(' .nuts-navLink , #nuts-navbar-link-section').mouseenter(function () {
		setTimeout(() => {
			$(' #nuts-navbar-link-section').height(500);
		}, 40);

		$('.nuts__navbar-links').show();
		$('.mixed-nuts__navbar-links , .chocolate__navbar-links').hide();
	});
	$('.chocolate-navLink , #chocolate-navbar-link-section').mouseenter(function () {
		setTimeout(() => {
			$(' #chocolate-navbar-link-section').height(500);
		}, 40);

		$(' .chocolate__navbar-links ').show();
		$('.mixed-nuts__navbar-links , .nuts__navbar-links').hide();
	});

	$('.mixed-nuts-navLink , .nuts-navLink , .chocolate-navLink , #mixed-nuts-navbar-link-section , #nuts-navbar-link-section , #chocolate-navbar-link-section').mouseleave(function () {
		setTimeout(() => {
			$('#mixed-nuts-navbar-link-section , #nuts-navbar-link-section , #chocolate-navbar-link-section').height(0);
		}, 2);
	});
	// default links's section height = 0

	//for debuging when mouse enter and leave don't show link's section 
	$('.mixed-nuts-navLink , .nuts-navLink , .chocolate-navLink , #mixed-nuts-navbar-link-section , #nuts-navbar-link-section ,#chocolate-navbar-link-section').mouseleave(function () {
		$('.mixed-nuts__navbar-links , .nuts__navbar-links , .chocolate__navbar-links').hide();
	});