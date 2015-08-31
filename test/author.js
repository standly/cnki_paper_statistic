var fs = require('fs');
var data=fs.readFileSync("/Users/liyulong/git-repo/cnki_paper_statistic/test/author.csv","utf-8");

var lines = data.split('\n');

for(var num in lines)
{
    var key = parseInt(num);// + 1;
    var line = lines[num];
    line = line.replace(key + ";",'');
    var fields = line.split(';');
    if(fields.length == 1)
    {
        fields[1] = "";
    }
    var namestr = fields[0];
    var organstr = fields[1];
    var names = namestr.split('#');
    var organs = organstr.split('#');
    var pre = '';
    for(var idx in names)
    {
        var name = names[idx];
        var organ = organs[idx];
        if(name == '' && organ == '')
        {
            continue;
        }
        if(!organ)
        {
            organ = pre;
        }
        else
        {
            pre = organ;
        }
        console.log(key+";" + name + ";" + organ);
    }
}
