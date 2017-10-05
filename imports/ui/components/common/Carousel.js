import * as React from 'react';
import Slider from 'react-slick';
import Skin from './Skin';

const settings = {
	autoplay: true,
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3,
};

const Carousel = ({slides=[]}) => (
	<Slider {...settings}>
		{slides.map(slide => <div key={slide._id}><Skin {...slide} /></div>)}
	</Slider>
);

export default Carousel;
