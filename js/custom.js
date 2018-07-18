$.fn.clicktoggle = function(a, b) {
    return this.each(function() {
        var clicked = false;
        $(this).click(function() {
            if (clicked) {
                clicked = false;
                return b.apply(this, arguments);
            }
            clicked = true;
            return a.apply(this, arguments);
        });
    });
};
$(document).ready(function(){
	$(function(){
		$("#hamburger-menu").click(function(){
			 $("#nav-links").slideToggle();
		});
	});
	$(function(){
		function elementsHeight(){
			windowHeight = $(window).height();
			documentHeight = $(document).height();
			$(".gmap-wrapper").height(windowHeight);
			console.log(documentHeight);
		}
		elementsHeight();
		$(window).resize(function(){
			elementsHeight();
		});
	});
	$(function(){
		$(".c-icon").click(function(){
			var hrefLink = $(this).find("a").attr("src");
			window.location = "hrefLink";
		});
	});
	$(function(){
			var getCurrentTop;
			$("#down-arrow").clicktoggle(function(){
			//$(".inner-view-container").css({'top':'753px'});
				$("#down-arrow").addClass("arrow-rotate");
				getCurrentTop = $(".inner-view-container").css( "top" );
				var getTopPosition = $(".inner-view-container").offset().top;
				var getElementHeight = ($(".category-container-background-wrapper").height());
				var getFinalTopPosition = getElementHeight + getTopPosition;
				$(".inner-view-container").css({'top':getFinalTopPosition});
				console.log(getCurrentTop);
			},
			function(){
				$("#down-arrow").removeClass("arrow-rotate");
				$(".inner-view-container").css({'top':getCurrentTop});
			});
	});
});