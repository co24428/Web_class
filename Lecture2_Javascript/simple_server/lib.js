const url = require("url");
const path = require("path");

const mimeType = {
  ".ico": "image/x-icon",
  ".html": "text/html",
  ".js": "text/javascript",
  ".json": "application/json",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".wav": "audio/wav",
  ".mp3": "audio/mpeg",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".zip": "application/zip",
  ".doc": "application/msword",
  ".eot": "application/vnd.ms-fontobject",
  ".ttf": "application/x-font-ttf",
};

const getSanitizedPathname = (req) => {
  // converts filename in request url to local pathname
  const parsedUrl = url.parse(req.url);
  const sanitizePath = path
    .normalize(parsedUrl.pathname)
    .replace(/^(\.\.[\/\\])+/, "");
  let pathname = path.join(__dirname, sanitizePath);
  return pathname;
};

module.exports = { mimeType, getSanitizedPathname };
