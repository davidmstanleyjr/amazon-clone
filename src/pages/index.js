import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { getSession, useSession } from "next-auth/client";

export default function Home({ products }) {
	const [session, loading] = useSession();

	return (
		<div className="bg-gray-100">
			<Head>
				<title>Amazon Clone</title>
			</Head>

			<Header />

			<main className="max-w-screen-2xl mx-auto">
				<Banner />

				<ProductFeed products={products} />
			</main>
		</div>
	);
}

//This tells Next.js this is no longer a static page and tells it to pull from the api.
//Loads the products as soon as the page loads
export async function getServerSideProps(context) {
	const session = await getSession(context);
	const products = await fetch("https://fakestoreapi.com/products").then(
		(res) => res.json()
	);

	return {
		props: {
			session,
			products,
		},
	};
}
