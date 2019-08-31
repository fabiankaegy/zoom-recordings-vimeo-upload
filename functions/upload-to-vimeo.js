const toTimeString = require("./helper");
const { Vimeo } = require("vimeo");

module.exports = uploadToVimeo = (file, date) => {
	const {
		VIMEO_CLIENT_ID,
		VIMEO_CLIENT_SECRET,
		VIMEO_ACCESS_TOKEN
	} = process.env;

	const vimeoClient = new Vimeo(
		VIMEO_CLIENT_ID,
		VIMEO_CLIENT_SECRET,
		VIMEO_ACCESS_TOKEN
	);

	const result = new Promise((resolve, reject) => {
		vimeoClient.upload(
			file,
			{
				name: `JavaScript for WordPress Bootcamp - ${date}`,
				privacy: {
					view: "unlisted"
				}
			},
			function(uri) {
				console.log(`File upload completed. Your Vimeo URI is: ${uri}`);
				resolve(`File upload completed. Your Vimeo URI is: ${uri}`);
			},
			function(bytesUploaded, bytesTotal) {
				const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
				console.info(bytesUploaded, bytesTotal, percentage + "%");
			},
			function(error) {
				console.error(`Vimeo Error: ${error}`);
				reject(`Vimeo Error: ${error}`);
			}
		);
	});

	return result;
};
