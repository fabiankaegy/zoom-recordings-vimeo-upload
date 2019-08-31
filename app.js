const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const app = express();
const bodyParser = require("body-parser");

// load the env variables from the .env file if not in production
if (!(process.env.NODE_ENV === "production")) {
	const dotenv = require("dotenv");
	dotenv.config();
}

const limiter = rateLimit({
	windowMs: process.env.LIMIT_MS ? process.env.LIMIT_MS : 15 * 60 * 1000, // 15 minutes
	max: process.env.LIMIT_AMOUNT ? process.env.LIMIT_AMOUNT : 10 // limit each IP to 100 requests per windowMs
});

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
	app.use(limiter);
}

const infoRouter = require("./routes/info");
const uploadRecordingRouter = require("./routes/upload-recording");

app.use("/info", infoRouter);
app.use("/upload-recording", uploadRecordingRouter);

// error handler
app.use(function(error, request, response, next) {
	// set locals, only providing error in development
	response.locals.message = error.message;
	response.locals.error = request.app.get("env") === "development" ? error : {};

	// render the error page
	response.status(error.status || 500);
	response.json({ error: error.message });
});

module.exports = app;
