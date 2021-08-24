module.exports = {
	images: {
		domains: ["res.cloudinary.com", "fakestoreapi.com"],
	},
	env: {
		stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
	},
};
