var fallback = require('express-history-api-fallback');
var express = require('express');
var app = express();
var request = require('request');
var qs = require('qs');
var qiita = require('./token.js');

app.use(express.static('root'));

const port = 8888;
app.listen(port,function(){
	console.log(`Expressサーバー（localhost:${port}）を起動しました。`);
});


app.get('/test/', function (req, res) {

	res.send('about');

	// const requestUrl = `https://qiita.com/api/v2/items/${req}`;
	// const token = qiita.token;

	// const headers = {
	// 	'Authorization': `Bearer ${token}`
	// };

	// const option = {
	// 	url: requestUrl,
	// 	headers: headers
	// }

	// request(option,function (error, response, body) {
	// 	if (!error && response.statusCode == 200) {
	// 		const article = JSON.parse(body);
	// 		const head = response.headers

	// 		res.json(article);
	// 	}
	// })

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


app.use(fallback('index.html', { root: 'root' }));