$(window).load(function(){
     $('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function() {
	    function centerInit(){

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;

			sphereContent.css({
				"margin-top" : topMargin+"px"
			});

			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top" : heroTopMargin+"px"
			});

	    }

	    $(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

	// Init effect 
	$('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){

	initializeSite();
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

});
/* END ------------------------------------------------------- */


$('#countdown').countdown({
	date: "March 22, 2018 00:00:26",
	render: function(data) {
	  var el = $(this.el);
	  el.empty()
	    //.append("<div><span>" + this.leadingZeros(data.years, 4) + "years</span></div>")
	    .append("<div><span>" + this.leadingZeros(data.days, 2) + " days</span></div>")
	    .append("<div><span>" + this.leadingZeros(data.hours, 2) + " hrs</span></div>")
	    .append("<div><span>" + this.leadingZeros(data.min, 2) + " min</span></div>")
	    .append("<div><span>" + this.leadingZeros(data.sec, 2) + " sec</span></div>");
	}
});