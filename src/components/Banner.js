import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
	return (
		<div className="relative">
			<div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20 bottom-0" />
			<Carousel
				// allows it to scroll by itself
				autoPlay
				//when it get to the 3rd carousel, it loops back around
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				//5 seconds
				interval={5000}
			>
				{/* Divs represent each carousel on the page */}
				<div>
					<img loading="lazy" src="https://links.papareact.com/gi1" />
				</div>
				<div>
					<img loading="lazy" src="https://links.papareact.com/6ff" />
				</div>
				<div>
					<img loading="lazy" src="https://links.papareact.com/7ma" />
				</div>
			</Carousel>
		</div>
	);
}

export default Banner;
