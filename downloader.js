var http = require('http');
function Downloader() {};

var keepAliveAgent = new http.Agent({keepAlive:true});

Downloader.download = function(url,callBack) {
	var options = {
		//host:'127.0.0.1',
		//port:'8888',
		agent:keepAliveAgent,
		method:'GET',
		headers:{
			'Accept':' text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
			'User-Agent':' Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36',
			'Accept-Encoding':' gzip, deflate, sdch',
			'Accept-Language':' zh-CN,zh;q=0.8,en;q=0.6',
			'Cookie':' SID=91001; ASP.NET_SessionId=fnr5iu45ge4frj45avyubd55; SID_kcms=202103; UserSeesKcms=%u4E2D%u5916%u5408%u4F5C%u529E%u5B66%u5BF9%u6211%u56FD%u7814%u7A76%u751F%u521B%u65B0%u6559%u80B2%u7684%u542F%u793A%21cjfd%21cjfd2012%21yxsh201204032%7C%u6211%u56FD%u7814%u7A76%u751F%u521B%u65B0%u80FD%u529B%u7684%u73B0%u72B6%u53CA%u5176%u5F71%u54CD%u673A%u5236%21cjfd%21cjfd2011%21high201102017%7C%u7814%u7A76%u751F%u521B%u65B0%u80FD%u529B%u57F9%u517B%u7684%u8FC7%u7A0B%u8981%u7D20%u53CA%u6574%u5408%u7684%u7814%u7A76%21cmfd%21cmfd9904%212003102219.nh%7C%u7814%u7A76%u751F%u521B%u65B0%u80FD%u529B%u57F9%u517B%u7684%u63A2%u7D22%u4E0E%u5B9E%u8DF5%21cjfd%21cjfd2004%21zggj200401009%7C%u4E2D%u56FD%u9AD8%u6821%u7814%u7A76%u751F%u521B%u65B0%u80FD%u529B%u5206%u6790%u53CA%u5BF9%u7B56%u7814%u7A76%21cmfd%21cmfd2011%212010036089.nh%7C; UserDownLoadsKcms=%u4E2D%u56FD%u9AD8%u6821%u7814%u7A76%u751F%u521B%u65B0%u80FD%u529B%u5206%u6790%u53CA%u5BF9%u7B56%u7814%u7A76%21cmfd%21cmfd2011%212010036089.nh%7C; c_m_LinID=LinID=WEEvREcwSlJHSldTTGJhYkhsaHZyZVR0NDhtWlV3Q21ndXZoRm1GMFc4ckZ3dHlmTEduY1NMaFpuSG9qc1RGbld0TT0=$9A4hF_YAuvQ5obgVAqNKPCYcEjKensW4IQMovwHtwkF4VYPoHbKxJw!!&ot=08/29/2015 16:19:49'
		}
	};
	options.url = url;
	req = http.request(this.options,function(res){
		res.on('data',callBack(data));
		res.on('error',function(e){
			console.log(e);
		})
	});
	req.on('error', function(e) {
		console.log(e);
		console.log('problem with request: ' + e.message);
	});
};
module.exports = Downloader;