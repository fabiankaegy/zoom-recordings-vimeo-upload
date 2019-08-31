const path = require("path");
const download = require("download");

module.exports = dowloadVideo = async url => {
	const fileName = "reccording.mov";
	const filePath = path.resolve("temp", fileName);
	await download(url, "temp", { filename: fileName });
	return filePath;
};
