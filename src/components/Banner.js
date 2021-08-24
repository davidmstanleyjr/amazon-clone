import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
	return (
		<div className="relative">
			<div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20 bottom-0" />
			<Carousel
				// allows it to scroll by itself
				autoPlay
				//when it gets to the 3rd carousel, it loops back around
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				//5 seconds
				interval={5000}
			>
				{/* Divs represent each carousel on the page */}
				<div>
					<img
						loading="lazy"
						src="https://res.cloudinary.com/ddet8to42/image/upload/v1629837300/0504-AMZN-GNBC-GatewayHero-1500x600_v5._CB669739807__l0lfjp.jpg"
					/>
				</div>
				<div>
					<img
						loading="lazy"
						src="https://res.cloudinary.com/ddet8to42/image/upload/v1629837387/UGRR_S1_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB669781769__gdgxea.jpg"
					/>
				</div>
				<div>
					<img
						loading="lazy"
						src="https://res.cloudinary.com/ddet8to42/image/upload/v1629837500/UK-EN_030821_SpringSitewide_ACQ_GW_Hero_D_1500x600_CV69._CB656397523__hfor2g.jpg"
					/>
				</div>
			</Carousel>
		</div>
	);
}

export default Banner;
