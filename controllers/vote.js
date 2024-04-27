const { parseBody } = require("../appModules/http-utils");

const voteRouteController = async (req, res) => {
    const { method } = req;
    if (method !== "POST") {
        res.statusCode = 404;
        res.end("Not found");
    }

    try {
        const body = await parseBody(req);
        console.log("body: ", body);
        res.statusCode = 200;
        res.end("Success!");
    } catch (e) {
        res.statusCode = 500;
        res.end("Internal Server Error");
    }
};

module.exports = voteRouteController;
