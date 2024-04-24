const { staticFile } = require("../appModules/http-utils");

const mainRouteController = async (res, filePath, ext) => {
    res.statusCode = 200;
    staticFile(res, filePath, ext);
};

module.exports = mainRouteController;
