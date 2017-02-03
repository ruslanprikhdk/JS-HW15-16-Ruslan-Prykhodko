
function Render(response)
{
      var title = $("#title").val();
      var ul = $("#items");
      ul.empty();
      var arr = response.tags;
      for (i = 0; i < arr.length; i++)
        {
        var data = arr[i];
        var result = data.searchterm;
        var image = data.image;
            var p = $("<p>").append(result);
            var li = $("<li>").append(p);
            $("<img>")
              .attr("src", image)
              .appendTo(li);
            ul.append(li);
        }

      $("#getItem").click(function Start() {
        var ul = $("#items");
        ul.empty();
        var title = $("#title").val();
        for (i = 0; i < arr.length; i++)
          {
          var data = arr[i];
          var result = data.searchterm;
          var image = data.image
          if(result == title)
            {
              var p = $("<p>").append(result);
              var li = $("<li>").append(p);
              $("<img>")
                .attr("src", image)
                .appendTo(li);
                ul.append(li);
            }
          }
        });

      $("#title").on("keypress", function(event) {
           if(event.which==13) {
             event.preventDefault();
             }
             ul.empty();
             var title = $("#title").val();
             for (i = 0; i < arr.length; i++)
               {
               var data = arr[i];
               var result = data.searchterm;
               var image = data.image
               if(result == title)
                 {
                   var p = $("<p>").append(result);
                   var li = $("<li>").append(p);
                   $("<img>")
                     .attr("src", image)
                     .appendTo(li);
                     ul.append(li);
                 }
               }
         });

}

$(function () {
    $.ajax({
      url: "https://api.tenor.co/v1/tags?key=LIVDSRZULELA&searchterm="+title+"&type=featured,explore",
      dataType: 'json',
      success: Render,
    });

});
