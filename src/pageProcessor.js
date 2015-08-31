var $ = require('cheerio');

function Processor(){};

Processor.processListPage = function(pageData)
{
    pageData = pageData.replace('document.write(ReplaceChar1(ReplaceChar(ReplaceJiankuohao(')
        .replace('document.write((function(){')
        .replace(/IPFD,CPFD,HBRD,MTRD,SCPD,SOPD,SCSF,SCHF,SCSD,SOSD,SNAD,/g)
        .replace(/\r\n/g)
        .replace(/\n|\t/g)
        //.replace('发表时间',',')
        //.replace('下载：',',')
        ;
    var liArr = $('li',pageData);
    for(var i =0 ; i < liArr.length;i++)
    {
        var item = liArr[i];
        var titleDiv = $('.GridTitleDiv',item);
        var contentDiv = $('.GridContentDiv',item);
        var autohrs = $('div.fontgreen',contentDiv);
        var label = $('label',contentDiv);

        var titleEle = $('a',titleDiv);
        var info = {
            title : $(titleEle).text(),
            url : $(titleEle).attr('href'),
            authorInfo : $(autohrs).text(),
            downloadInfo : $(label).text(),
        };
        writeListItem(info);
    }
    //console.log(liArr);
}
function writeListItem(item)
{
    var s = item.title + ',' +
            item.url + ',' +
            item.authorInfo + ',' +
            item.downloadInfo + '\n';

    s= s.replace('发表时间：',',')
        .replace('下载：',',');
    console.log(s);
}
Processor.processSummaryPage = function(pageData)
{

}

module.exports = Processor;