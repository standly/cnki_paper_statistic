var urlProvider = require('./pageUrlProvider.js');
var downloader = require('./downloader.js');
//var pageProcessor = require('pageProcessor');
console.log(downloader);
while(urlProvider.hasNext())
{
	var url = urlProvider.next();
	downloader.download(url,function(data){
		console.log(data);
	});
	break;
}