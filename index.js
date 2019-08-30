require("dotenv").config();

const jwt = require("jsonwebtoken");
const { Vimeo } = require("vimeo");
const fetch = require("node-fetch");

const {
	ZOOM_API_KEY,
	ZOOM_API_SECRET,
	VIMEO_CLIENT_ID,
	VIMEO_CLIENT_SECRET,
	VIMEO_ACCESS_TOKEN
} = process.env;

const vimeoClient = new Vimeo(
	VIMEO_CLIENT_ID,
	VIMEO_CLIENT_SECRET,
	VIMEO_ACCESS_TOKEN
);

const payload = {
	iss: ZOOM_API_KEY,
	exp: new Date().getTime() + 5000
};
const token = jwt.sign(payload, ZOOM_API_SECRET);

const meetingId = 9203684538;

const recordingsUrl = `https://api.zoom.us/v2/meetings/${meetingId}/recordings`;

(async () => {
	try {
		const zoomResponse = await fetch(recordingsUrl, {
			method: "GET",
			headers: {
				Authorization: `bearer ${token}`,
				"User-Agent": "Zoom-api-Jwt-Request",
				"Content-type": "application/json",
				Accept: "application/json",
				"Accept-Charset": "utf-8"
			}
		});

		if (!zoomResponse.ok) {
			throw await zoomResponse.json();
		}
		const zoomData = await zoomResponse.json();

		vimeoClient.upload(
			zoomData.recording_files[0].download_url,
			function(uri) {
				console.log("File upload completed. Your Vimeo URI is:", uri);
			},
			function(bytesUploaded, bytesTotal) {
				var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
				console.log(bytesUploaded, bytesTotal, percentage + "%");
			},
			function(error) {
				throw error;
			}
		);
	} catch (error) {
		console.error(error);
	}
})();
