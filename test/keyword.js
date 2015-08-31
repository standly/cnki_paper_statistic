var fs = require('fs');
var data=fs.readFileSync("/Users/liyulong/git-repo/cnki_paper_statistic/test/keyworld.csv","utf-8");

var lines = data.split('\n');

for(var num in lines)
{
    var key = parseInt(num) + 1;
    var line = lines[num];
    line = line.replace(/(")/g,'');
    line = line.replace(key + ";",'');
    var words = line.split(';');
    for(var idx in words)
    {
        if(words[idx])
            console.log(key + ";" + words[idx]);
    }
}
