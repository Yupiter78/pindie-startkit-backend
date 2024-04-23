const http = require("http");
const path = require("path");
const mimoTypes = require("./appModules/http-utils/mime-types");

const staticFile = require("./appModules/http-utils/static-file");

const server = http.createServer((req, res) => {
    const { url } = req;
    switch (url) {
        case "/":
            res.statusCode = 200;
            staticFile(res, "/index.html", ".html");
            break;
        default:
            const extname = String(path.extname(url)).toLowerCase();
            if (extname in mimoTypes) {
                staticFile(res, url, extname);
            } else {
                res.statusCode = 404;
                res.end("Not found");
            }
    }
});

server.listen(3005);
