var express = require("express");
var router = express.Router();

router.get("/", (request, response) => {
	const {} = request.params;

	return response.send(request.headers);
});

module.exports = router;
