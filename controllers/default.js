const staticFile = require("../appModules/http-utils/static-file");
const path = require("path");
const mimoTypes = require("../appModules/http-utils/mime-types");

const defaultRouteController = async (res, url) => {
    const extname = String(path.extname(url)).toLowerCase();
    if (extname in mimoTypes) {
        staticFile(res, url, extname);
    } else {
        res.statusCode = 404;
        res.end("Not found");
    }
};

module.exports = defaultRouteController;
