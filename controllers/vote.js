const { parseBody } = require("../appModules/http-utils");

const voteRouteController = async (req, res) => {
    const { method } = req;
    if (method !== "POST") {
        res.statusCode = 404;
        res.end("Not found");
    }

    parseBody(req, (err, body) => {
        if (err) {
            res.statusCode = 500;
            res.end("Internal Server Error");
        }
        console.log("body: ", body);
        res.statusCode = 200;
        res.end("Success!");
    });
};

module.exports = voteRouteController;
