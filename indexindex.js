var app = require('express')();
var http = require('http');
var server = http.Server(app);
var request = require('request');
// var request = require('request-promise');
var cors = require('cors');

app.use(cors());


// Boot up server
server.listen(3000, function listening() {
    console.log('Listening on %d', server.address().port);
});


var i = 1;

// Here we will get the data
app.get('/', function(req, res) {
    console.log("Root of site initialized: " + i);

    i++;
    
    return new Promise((resolve, reject) => {  
        /*
        request({
        "method":"GET", 
        "uri": "https://services.web.bilinfo.dk/api/vehicle/?user=daugaard-biler&password=Ph4IKTvdgh&format=json",
        "json": true,
        "headers": {
            "User-Agent": "test test"
        }
        },
        */
        request({
            uri: "https://services.web.bilinfo.dk/api/vehicle/?user=daugaard-biler&password=Ph4IKTvdgh&format=json",
        },

        function(error, response, body) {

            if(error) {
                reject(new Error('No feed was retrieved'));
            }

            // Parse it into a variable
            var allFeed = JSON.parse(body);

            allVehicles = allFeed['Vehicles'];

            // Then pack the package with variables from the from our variable object
           var allFeedObject = [];

            // console.log(allFeed.Vehicles);


            allVehicles.forEach(function(Vehicle) {
              allFeedObject.push(Vehicle);
            });




            
            // resolve(console.log("Feed retrieved"));    
            resolve(
                res.send(JSON.stringify(allFeedObject))
            );
        });
    });
    // console.log(feed);
});
