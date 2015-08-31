/**
 * Created by liyulong on 15/8/30.
 */
var http = require('http');


var postData = JSON.stringify({
    'msg' : 'Hello World!'
});

var options = {
    hostname: 'www.baidu.com',
    port: 80,
    path: '/',
    method: 'GET'
};

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// write data to request body
req.write(postData);
req.end();