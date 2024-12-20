// const express = require('express');
// const app = express();

// // Insecure eval usage
// app.get('/eval', (req, res) => {
//     const userInput = req.query.input || 'console.log("No input")';
//     eval(userInput); // Vulnerable to Remote Code Execution (RCE)
//     res.send('Executed input: ' + userInput);
// });

// // Unsanitized user input leading to potential XSS (Cross-Site Scripting)
// app.get('/xss', (req, res) => {
//     const userInput = req.query.input || 'Hello';
//     res.send(`<h1>${userInput}</h1>`); // Vulnerable to XSS if userInput contains HTML tags
// });

// // Insecure HTTP request
// const axios = require('axios');
// app.get('/vuln', (req, res) => {
//     axios.get('http://example.com/api') // Insecure HTTP request
//         .then(response => {
//             res.send(response.data);
//         })
//         .catch(error => {
//             res.send('Error: ' + error.message);
//         });
// });

// app.listen(3000, () => {
//     console.log('App running on http://localhost:3000');
// });




/*

GEREKLİ PAKETLER YÜKLENİYOR...

*/
var http = require('http');
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3005); // GİRİŞ PORTU AYARLANDI
app.set('views', __dirname + '/app/server/views'); // VIEW KLASÖRÜ TANITILDI
app.set('view engine', 'ejs'); // VIEW ENGINE AYARLANDI
app.use(express.static(__dirname + '/app/public')); // KULLANICILAR TARAFINDAN ERİŞİLEBİLEN KLASÖR TANIMLANDI

require('./app/routes')(app); // ROUTE DOSYASI ÇAĞIRILDI

/*

HTTP SERVER OLUŞTURULDU

*/
http.createServer(app).listen(app.get('port'), function(){
	console.log('Sistem ' + app.get('port') + ' Portu Üzerinde Çalışıyor.');
});
