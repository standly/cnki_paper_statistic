var urlProvider = require('./pageUrlProvider.js');
var downloader = require('./downloader.js');
var processor = require('./pageProcessor.js');
console.log(downloader);
while(urlProvider.hasNext())
{
	var url = urlProvider.next();
    url = 'http://epub.cnki.net/kns/brief/brief.aspx?curpage=2&RecordsPerPage=50&QueryID=1&ID=&turnpage=1&tpagemode=L&dbPrefix=SCDB&Fields=&DisplayMode=custommode&PageName=ASP.brief_default_result_aspx';
	downloader.download(url,function(data){
        processor.processListPage(data);
	});
	break;
}