
function getAllPageUrls () {
	firstP  = 'http://epub.cnki.net/kns/brief/brief.aspx?pagename=ASP.brief_result_aspx&dbPrefix=SCDB&dbCatalog=%e4%b8%ad%e5%9b%bd%e5%ad%a6%e6%9c%af%e6%96%87%e7%8c%ae%e7%bd%91%e7%bb%9c%e5%87%ba%e7%89%88%e6%80%bb%e5%ba%93&ConfigFile=SCDB.xml&research=off&t=1440819554755&keyValue=%E7%A0%94%E7%A9%B6%E7%94%9F%E5%88%9B%E6%96%B0&S=1&DisplayMode=custommode';
	pageTmp = 'http://epub.cnki.net/kns/brief/brief.aspx?curpage={0}&RecordsPerPage=50&QueryID=10&ID=&turnpage=1&tpagemode=L&dbPrefix=SCDB&Fields=&DisplayMode=custommode&PageName=ASP.brief_result_aspx#J_ORDER';
	var res = new Array();
	res.push(firstP);
	for (var i = 2; i <= 2800/50; i++) {
		res.push(pageTmp.replace('{0}',i));
	};
	return res;
}
function UrlProvider()
{
}
UrlProvider.init = function()
{
	this.urlArray=getAllPageUrls();
	this.index = 0;
}
UrlProvider.init();
UrlProvider.hasNext = function()
{
	return this.urlArray.length > this.index;
}
UrlProvider.next = function()
{
	return this.urlArray[this.index ++];
}

module.exports = UrlProvider;
