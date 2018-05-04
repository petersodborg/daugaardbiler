

$(document).ready(function(){
$('#action-button').click(function() {
   $.ajax({
      url: 'http://dgbiler.dev5.mediastyle.dk/socket.io',
      ContentType: 'application/jsonop; charset=utf-8',

      data: {
         format: 'JSON'
      },
      dataType: 'jsonp',
      error: function() {
         $('#info').html('<p>An error has occurred</p>');
      },
      success: function(datab) {
         console.log(datab);
      },
      type: 'GET'
   });
});
});







/*
$(document).ready(function(){

 $('#retrieve-resources').click(function () {
 var displayResources = $('#display-resources');
 
 displayResources.text('Loading data from JSON source...');

   $.ajax({
      url: 'https://services.web.bilinfo.dk/api/vehicle/?user=daugaard-biler&password=Ph4IKTvdgh&format=json',
      data: {
         format: 'json'
      },
      error: function() {
         $('#info').html('<p>An error has occurred</p>');
      },
      dataType: 'jsonp',
   success: function(data) {
			var output="<table><thead><tr><th>Name</th><th>Vehicles</th><th>URL</th></thead><tbody>";
			for (var i in data)
			{
				output+="<tr><td>" + data[i].Model+ "</td><td>";

			}
			output+="</tbody></table>";

			displayResources.html(output);
 			$("table").addClass("table");
   },
   type: 'GET'
});
});
});

*/