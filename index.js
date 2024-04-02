const express = require("express");
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const https = require('https');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));



app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );

        if (req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
                return res.status(200).json({});
        }
        next();
});
// Initialisation de la data
var data =[ {
  name: "John Doe"
}];

var privateKey  = fs.readFileSync('/etc/ssl/private/apache-selfsigned.key', 'utf8');
var certificate = fs.readFileSync('/etc/ssl/certs/apache-selfsigned.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

setInterval(function() {
    data=[{name:"John Doe"}]
}, 120 * 1000); // 60 * 1000 milsec

// Route pour la requête POST
app.get("/getdata", (req, res) => {
//console.log("erer");
	res.send(data);
})

app.post("/postdata", (req, res) => {
  // Récupération des données de la requête
  //const { name, age, city } = req.body;

var gg=Object.keys(req.body)[0].substr(9).replace("\"","").replace("}","");

	data.push({name:gg});
	
  // Mise à jour de la data
  //data.name = name;
  //data.age = age;
  //data.city = city;

  // Renvoi de la réponse
  res.send(data);
});

// var httpsServer = http.createServer(app);
httpsServer=app;


// Lancement du serveur

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);

	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
});

// var httpsServer = https.createServer(credentials, app);

httpsServer.listen(3000,function (err) {
        if (err) console.log(err);
        console.log("Server listening on PORT");
    });


