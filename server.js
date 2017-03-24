var express = require('express');
var app = express();
var path = require('path')
var request = require('request');
var qs = require('qs');
var qiita = require('./token.js');
var port = process.env.PORT || 8888;


app.use(express.static(__dirname + '/root'));

app.get('/test/', function (req, res) {

	const locationQuery = qs.parse(req.query);
	const requestUrl = `https://qiita.com/api/v2/items/${locationQuery.id}`;
	const token = qiita.token;

	const headers = {
		'Authorization': `Bearer ${token}`
	};

	const option = {
		url: requestUrl,
		headers: headers
	}

	request(option, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			const article = JSON.parse(body);
			const head = response.headers

			res.json(article);
		}
	})

});

app.get('/api/',function(req,res){

	const locationQuery = qs.stringify(req.query);
	const requestUrl = `https://qiita.com/api/v2/items?per_page=20&${locationQuery}`;
	const token = qiita.token;

	const headers = {
		'Authorization': `Bearer ${token}`
	};

	const option = {
		url: requestUrl,
		headers: headers
	}

	request(option,function (error, response, body) {
		if (!error && response.statusCode == 200) {
			const article = JSON.parse(body);
			const head = response.headers

			res.json(article);
		}
	})
});

app.get('*', function (request, response){
	response.sendFile(path.resolve(__dirname, 'root', 'index.html'))
})

app.listen(port, function () {
	console.log(`Expressサーバー（localhost:${port}）を起動しました。`);
});