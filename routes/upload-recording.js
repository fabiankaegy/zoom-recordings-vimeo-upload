var express = require("express");
var router = express.Router();
const path = require("path");
const fs = require("fs");
const toTimeString = require("../functions/helper");

const downloadVideo = require("../functions/download-video");
const uploadToVimeo = require("../functions/upload-to-vimeo");

router.post("/", async (request, response, next) => {
	const {
		payload: {
			object: { recording_files }
		}
	} = request.body;

	const video = recording_files.filter(
		recording => recording.recording_type === "shared_screen_with_speaker_view"
	)[0];

	response.send(video);

	try {
		const filePath = await downloadVideo(video.download_url);
		const result = await uploadToVimeo(toTimeString(video.recording_start));
		fs.unlinkSync(filePath);
		return response.send(result);
	} catch (error) {
		next(new Error(error));
	}
});

module.exports = router;
