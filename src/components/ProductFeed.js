import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProductFeed({ products }) {
	return (
		<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
			{products
				.slice(0, 4)
				.map(({ id, title, price, description, category, image }) => (
					<Product
						key={id}
						id={id}
						title={title}
						price={price}
						description={description}
						category={category}
						image={image}
					/>
				))}

			<img
				className="md:col-span-full"
				// src="https://links.papareact.com/dyz"
				src="https://res.cloudinary.com/ddet8to42/image/upload/v1629837939/1110572_smb_gw_desktop_1500x300_lavolio_1x_uk._CB484123630__qqzsfx.jpg"
				alt=""
			/>

			<div className="md:col-span-2 xl:col-span-2">
				{products
					.slice(4, 5)
					.map(({ id, title, price, description, category, image }) => (
						<Product
							key={id}
							id={id}
							title={title}
							price={price}
							description={description}
							category={category}
							image={image}
						/>
					))}
			</div>

			{products
				.slice(5, products.length)
				.map(({ id, title, price, description, category, image }) => (
					<Product
						key={id}
						id={id}
						title={title}
						price={price}
						description={description}
						category={category}
						image={image}
					/>
				))}
		</div>
	);
}

export default ProductFeed;
