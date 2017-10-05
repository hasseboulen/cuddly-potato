import * as React from 'react';
import Slider from 'react-slick';

const settings = {
	autoplay: true,
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3,
};

const Carousel = () => (
	<Slider {...settings}>
		<div>slide 1</div>
		<div>slide 2</div>
		<div>slide 3</div>
		<div>slide 4</div>
		<div>slide 5</div>
		<div>slide 6</div>
	</Slider>
);

export default Carousel;
