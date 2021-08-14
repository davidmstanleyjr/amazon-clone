import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Amazon Clone</title>
			</Head>

			<Header />
			<main className="max-w-screen-2xl nx-auto">
				{/* Banner */}
				<Banner />

				{/* Product Feed */}
			</main>
		</div>
	);
}
