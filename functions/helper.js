const moment = require("moment");

module.exports = toTimeString = date =>
	moment(date).format("MMMM Do YYYY, h a");
