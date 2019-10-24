$(document).ready(function(){
  var metadata = $.getJSON("triplets.json");
  console.log(metadata);
    // TODO update with checkmark clicks that update 'positive' field in json
    $('#anchor').on({
        'click': function(){
            $('#anchor').attr('src','images/0000000.jpeg');
        }
    });
    $('#image1').on({
        'click': function(){
            $('#image1').attr('src','images/0000000.jpeg');
        }
    });
    $('#image2').on({
        'click': function(){
            $('#image2').attr('src','images/0000000.jpeg');
        }
    });
    // TODO update so that comments are saved in 'notes' in JSON
    // TODO update so that image triplets are displayed and "next" 
    // moves to the next triplets
});
