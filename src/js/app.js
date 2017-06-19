$(function() {
	var mobileMenu = $('#mobile-menu'),
		mobileMenuTrigger = $('#mobile-menu-trigger'),
		mobileMainMenu = $('.mobile-main-menu'),
		mobileSubMenu = $('.mobile-submenu');

	mobileMenuTrigger.click(function() {
		$(this).toggleClass('open');
		mobileMenu.toggleClass('active');
	});

	$('.submenu-trigger').click(function() {
		mobileMainMenu.fadeOut(500, function() {
			mobileSubMenu.toggleClass('visible');
		});
	});

	$('.return').click(function() {
		if (!mobileMainMenu.is(':visible')) {
			mobileSubMenu.toggleClass('visible');
			mobileMainMenu.fadeIn(1000);
		} else {
			mobileMenu.toggleClass('active');
			mobileMenuTrigger.toggleClass('open');
		}
	});
});