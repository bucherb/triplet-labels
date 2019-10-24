$(document).ready(function(){
  var metadata = $.getJSON("triplets.json");
  const backup = JSON.parse(JSON.stringify(metadata));
  console.log(metadata);
  var i = 0
    // TODO make clear button clear text - Nephele
    // TODO give option to upload saved JSON - Nephele
    // TODO make text box with current iteration which is editable to skip through data - Nephele
    // TODO add autodownload for every 20 triplets - Bernadette
    $('#image1').on({
        'click': function(){
            $('#check1').attr('src','https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/white-heavy-check-mark.png');
            metadata.responseJSON[i]['Positive'] = 1;
        }
    });
    $('#image2').on({
        'click': function(){
            $('#check2').attr('src','https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/white-heavy-check-mark.png');
            metadata.responseJSON[i]['Positive'] = 2;
        }
    });
    $('#clear').on({
        'click': function(){
            $('#check1').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
            $('#check2').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
            metadata.responseJSON[i]['Positive'] = "";
        }
    });
    $('#back').on({
        'click': function(){
            i -= 1;
            //console.log(metadata);
            $('#anchor').attr('src','images/' + metadata.responseJSON[i]['anchor']);
            $('#image1').attr('src','images/' + metadata.responseJSON[i]['1']);
            $('#image2').attr('src','images/' + metadata.responseJSON[i]['2']);
            $('#check1').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
            $('#check2').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
        }
    });
    $('#next').on({
        'click': function(){
            i += 1;
            console.log(metadata);
            $('#myTextArea').val('');
            $('#anchor').attr('src','images/' + metadata.responseJSON[i]['anchor']);
            $('#image1').attr('src','images/' + metadata.responseJSON[i]['1']);
            $('#image2').attr('src','images/' + metadata.responseJSON[i]['2']);
            $('#check1').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
            $('#check2').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
        }
    });
    $('#myTextArea').on({
        'change': function(){
          metadata.responseJSON[i]['Notes'] = $('#myTextArea').val();
        }
    });
    // TODO update so that comments are saved in 'notes' in JSON
});
