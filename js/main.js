$(document).ready(function(){

	const toggler = document.querySelector('.mobile-menu-icon');
	const menu    = document.querySelector('.main-screen ul.menu');
	toggler.addEventListener('click', () => {
	  toggler.classList.toggle('active');
	  menu.classList.toggle('active');
	});


	$('#faq-carousel').slick({
		centerMode: true,
		arrows: true,
		dots: true,
		centerPadding: '80px',
		slidesToShow: 1,
		variableWidth: true,
		responsive: [
		  {
		    breakpoint: 992,
		    settings: {
		      centerMode: false,
		      variableWidth: false,
		      slidesToShow: 1,
		      slidesToScroll: 1
		    }
		}
		]
	});
	$('#partners-carousel').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					centerMode: true,
		      		slidesToShow: 1,
		      		centerPadding: '100px',
				}
			},
			{
				breakpoint: 768,
				settings: {
					centerMode: true,
		      		slidesToShow: 1,
		      		centerPadding: '40px',
				}
			},
			{
				breakpoint: 420,
				settings: {
					centerMode: true,
		      		slidesToShow: 1,
		      		centerPadding: '0',
				}
			}
		]
	});

	if($(window).width() < 768) {
		initServiceSlider();
	}

});

$(window).resize(function(){
	if($(window).width() < 768) {
		initServiceSlider();
	}
});

function initServiceSlider() {
	$('.services-wrapper').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
}