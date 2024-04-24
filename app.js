const http = require("http");
const path = require("path");
const mimoTypes = require("./appModules/http-utils/mime-types");

const staticFile = require("./appModules/http-utils/static-file");
const mainRouteController = require("./controllers/main");
const defaultRouteController = require("./controllers/default");
const gameRouteController = require("./controllers/game");

const server = http.createServer((req, res) => {
    const { url } = req;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
            break;
        case "/game":
            gameRouteController(res);
            break;
        default:
            defaultRouteController(res, url);
    }
});

server.listen(3005);
