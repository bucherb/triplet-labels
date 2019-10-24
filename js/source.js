$(document).ready(function(){
  var metadata = $.getJSON("triplets.json");
  console.log(metadata);
  var i = 0
    // TODO update with checkmark clicks that update 'positive' field in json
    $('#image1').on({
        'click': function(){
            $('#check1').attr('src','https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/white-heavy-check-mark.png');
            metadata.responseJSON[i]['Positive'] = metadata.responseJSON[i]['1'];
        }
    });
    $('#image2').on({
        'click': function(){
            $('#check2').attr('src','https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/white-heavy-check-mark.png');
            metadata.responseJSON[i]['Positive'] = metadata.responseJSON[i]['2'];
        }
    });
    $('#clear').on({
        'click': function(){
            $('#check1').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
            $('#check2').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
            metadata.responseJSON[i]['Positive'] = "";
        }
    });
    $('#next').on({
        'click': function(){
            i += 1;
            //console.log(metadata);
            $('#anchor').attr('src','images/' + metadata.responseJSON[i]['anchor']);
            $('#image1').attr('src','images/' + metadata.responseJSON[i]['1']);
            $('#image2').attr('src','images/' + metadata.responseJSON[i]['2']);
            $('#check1').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
            $('#check2').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
        }
    });
    // TODO update so that comments are saved in 'notes' in JSON
    // TODO update so that image triplets are displayed and "next" 
    // moves to the next triplets
});
