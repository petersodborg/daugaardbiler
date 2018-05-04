
$(document).ready(function(){
$('#action-button').click(function() {
   $.ajax({
      url: 'http://dgbiler.dev5.mediastyle.dk/socket.io',
      type: 'GET',
      contentType: 'application/json; charset=utf-8',
      data: {
         format: 'JSON'
      },
      dataType: 'json',
      error: function() {
         $('#info').html('<p>An error has occurred</p>');
      },
      success: function(data) {
         //console.log(data);
         //var $all = $('<p>').text(data);
          $.each(data, function(i, data){
            $('#info')
            .append("<h1> Model:" + data.Model + "</h1>")
            .append("<h1> make:" + data.Make + "</h1>")
            .append("<p> variant:" + data.Variant + "</p>")
            .append("<li> registrationDate:" + data.RegistrationDate + "</li>")
            //.append("<li>" + data.Pictures + "</li>");


         // for (var i=0; i<data.Object.length; i++) {
         //var $make = $('<h1>').text(data.Object[i].Id);
         // var $model = $('<h1>').text(data.Object[i].Model);

         //var $pictures = $('<img src="">').text(data.Vehicles[i].Pictures);
            //.append($all)
            //.append($make)
            // .append($model)
            //.append($registrationDate)
            //.append($variant)
            //.append($pictures);

          }) 
      },
   });
});
});
   //      var $title = $('<h1>').text(data.Vehicles[0].Id);
     //    var $description = $('<p>').text(data.Vehicles[0].Model);
