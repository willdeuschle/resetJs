http = require('http')

function readAsStream(stream, cb) {
    var data = '';
    stream.on('data', function(chunk) {
        data += chunk;
    });
    stream.on('end', function() {
        cb(null, data)
    });
    stream.on('error', function(error) {
        cb(error)
    });
}

var contentTypes = ["text/html", "text/plain", "application/json"]

contentTypes.forEach(function(type) {
    http.request({
        hostname: "eloquentjavascript.net",
        path: "/author",
        method: "GET",
        headers: {Accept: type}
    }, function(response) {
        if (response.statusCode != 200) {
            console.error("Request for " + type + " failed: " + response.statusMessage);
        }
        readAsStream(response, function(error, data) {
            if (error)
                throw error;
            console.log("Type " + type + ": " + data)
        })
    }).end();
});
