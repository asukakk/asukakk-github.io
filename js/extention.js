$(function(){
	$('.slider').slick({
		autoplay: true,
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
        centerPadding: "15%",
		responsive: [//レスポンシブ指定（指定したbreakpointによってオプションを上書き可能）
			{
				breakpoint: 600,//breakpoint
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
                    centerPadding: "15%",
				}
			},
			{
				breakpoint: 480,//breakpoint
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
                    centerPadding: "15%",
				}
			}
		]
	});
});

$(function(){
	$('.slider-news').slick({
		autoplay: true,
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [//レスポンシブ指定（指定したbreakpointによってオプションを上書き可能）
			{
				breakpoint: 600,//breakpoint
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,//breakpoint
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
});



