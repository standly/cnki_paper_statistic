var http = require('http');
var request = require('request');

function Downloader() {};


Downloader.download = function(url,callBack) {
    var options = {
        url:url,
        method:'GET',
        headers:{
            'accept':' text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'user-agent':' Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36',
            'Cookie':' ASP.NET_SessionId=vtuxocrzal1uxd45el4i2h45; KNS_DisplayModel=custommode; RsPerPage=50; ASPSESSIONIDSACCBBDD=MLNBFFHAAGNJNFANJEOJOILJ; c_m_LinID=LinID=WEEvREcwSlJHSldTTGJhYkhRZU5Ea0lOQTV3Yi9MMEs0dHo0SzdKT1hlNzJxQ2M2Q1g1c1lxS1V5MW1aVjBQU3BDdz0=$9A4hF_YAuvQ5obgVAqNKPCYcEjKensW4IQMovwHtwkF4VYPoHbKxJw!!&ot=08/30/2015 19:27:46',
        }
    };
    request(options,function(error,response,body){
        if (!error && response.statusCode == 200) {
            callBack(body);
        }
    });
};
module.exports = Downloader;