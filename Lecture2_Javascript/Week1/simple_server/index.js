const http = require("http");
const url = require("url");
const fs = require("fs"); // file system
const path = require("path");
const { mimeType, getSanitizedPathname } = require("./lib.js");

const server = http.createServer(handler);

function handler(req, res) {
  // function to handle http request
  // e.g. http://localhost:8085/grid.html?username=apple
  let safePathname = getSanitizedPathname(req);
  const queryObject = url.parse(req.url, true).query;

  console.log(queryObject?.username);

  fs.exists(safePathname, function (exist) {
    if (!exist) {
      // if the file is not found, return 404
      res.statusCode = 404;
      res.end(`File ${safePathname} not found!`);
      return;
    }

    // if is a directory, then look for index.html
    if (fs.statSync(safePathname).isDirectory()) {
      safePathname += "/index.html";
    }

    // read file from file system
    fs.readFile(safePathname, function (err, data) {
      if (err) {
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
        // Read file extention, e.g. .js, .html, etc.
        const ext = path.parse(safePathname).ext;
        // Set Content-Type and send data
        res.setHeader("Content-Type", mimeType[ext] || "text/plain");

        const uname = queryObject?.username;

        if (uname) {
          let repldata = data.toString().replace("%UNAME%", uname);
          res.end(repldata);
        } else {
          let repldata = data.toString().replace("%UNAME%", "");
          res.end(repldata);
        }
      }
    });
  });
}

const portNum = 8085;
const logMsg = `Server running at http://localhost:${portNum}`;

server.listen(portNum, () => {
  console.log(logMsg);
});

console.log("log from index.js");
