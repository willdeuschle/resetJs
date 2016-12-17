function urlToSanitizedPath(url) {
    path = require("url").parse(url).pathname;
    decoded = decodeURIComponent(path);
    return decoded.replace(/(\/|\\)*\.\.(\/|\\|$))/g, '/')
}
