// Navbar fix on scroll
if ($(window).width() < 982) {
	$("#jd-navbar").addClass("fixed");
	$("a.nav-link").click(function () {
		$(".navbar-collapse.collapse").removeClass("show");
		$(".navbar-toggler").addClass("collapsed");
	});
	$(".navbar-toggler").click(function () {
		$("#jd-navbar").addClass("fixed");
	});
} else {
	$(window).scroll(function () {
		var nav = $("#jd-navbar");
		var top = 100;
		if ($(window).scrollTop() >= top) {
			nav.addClass("fixed");
		} else {
			nav.removeClass("fixed");
		}
	});
}

// Smooth scrolling
// Select all links with hashes
$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, "") ==
				this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length
				? target
				: $("[name=" + this.hash.slice(1) + "]");
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$("html, body").animate(
					{
						scrollTop: target.offset().top - 70,
					},
					1000,
					function () {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) {
							// Checking if the target was focused
							return false;
						} else {
							$target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						}
					}
				);
			}
		}
	});

// AOS
AOS.init({
	once:true
});



$("figure").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );