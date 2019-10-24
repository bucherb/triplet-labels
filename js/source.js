$(document).ready(function(){
  var metadata = $.getJSON("triplets.json");
  console.log(metadata);
  var i = 0
    // TODO give option to upload saved JSON - Nephele
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
            $('#iter').val(i);
            $('#anchor').attr('src','images/' + metadata.responseJSON[i]['anchor']);
            $('#image1').attr('src','images/' + metadata.responseJSON[i]['1']);
            $('#image2').attr('src','images/' + metadata.responseJSON[i]['2']);

            if(metadata.responseJSON[i]['Positive'] == '1'){
                $('#check1').attr('src','https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/white-heavy-check-mark.png');
            } else {
                $('#check1').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
            }
            if(metadata.responseJSON[i]['Positive'] == '2'){
                $('#check2').attr('src','https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/white-heavy-check-mark.png');
            } else {
                $('#check2').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
            }

            $('#myTextArea').val(metadata.responseJSON[i]['Notes']);
        }
    });
    $('#next').on({
        'click': function(){
            i += 1;
            $('#iter').val(i);
            if (i % 20 == 0) {
              //$('#download_link').trigger('click');
              // var event = document.createEvent("MouseEvents");
              // event.initEvent("click", true, false);
              // $('#download_link').attr('href').dispatchEvent(event);
              var event = new MouseEvent('click');
              var link = document.getElementById("download_link");
              link.dispatchEvent(event);
            }
            $('#myTextArea').val('');
            $('#anchor').attr('src','images/' + metadata.responseJSON[i]['anchor']);
            $('#image1').attr('src','images/' + metadata.responseJSON[i]['1']);
            $('#image2').attr('src','images/' + metadata.responseJSON[i]['2']);
            $('#check1').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
            $('#check2').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');

            if(metadata.responseJSON[i]['Positive'] == '1'){
                $('#check1').attr('src','https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/white-heavy-check-mark.png');
            } else {
                $('#check1').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
            }
            if(metadata.responseJSON[i]['Positive'] == '2'){
                $('#check2').attr('src','https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/white-heavy-check-mark.png');
            } else {
                $('#check2').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
            }

            $('#myTextArea').val(metadata.responseJSON[i]['Notes']);
        }
    });
    $('#myTextArea').on({
        'change': function(){
          metadata.responseJSON[i]['Notes'] = $('#myTextArea').val();
        }
    });
    $('#go').on({
        'click': function(){
            i = parseInt($('#iter').val());

            $('#anchor').attr('src','images/' + metadata.responseJSON[i]['anchor']);
            $('#image1').attr('src','images/' + metadata.responseJSON[i]['1']);
            $('#image2').attr('src','images/' + metadata.responseJSON[i]['2']);

            if(metadata.responseJSON[i]['Positive'] == '1'){
                $('#check1').attr('src','https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/white-heavy-check-mark.png');
            } else {
                $('#check1').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
            }
            if(metadata.responseJSON[i]['Positive'] == '2'){
                $('#check2').attr('src','https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/white-heavy-check-mark.png');
            } else {
                $('#check2').attr('src','https://listimg.pinclipart.com/picdir/s/176-1766362_red-x-cross-gif-clipart.png');
            }

            $('#myTextArea').val(metadata.responseJSON[i]['Notes']);
        }
    });
    $('#download_link').on({
      'click': function(){
        var data = new Blob([JSON.stringify(metadata.responseJSON)], {type: 'application/json'});

        var url = window.URL.createObjectURL(data);

        document.getElementById('download_link').href = url;
      }
    });

});
