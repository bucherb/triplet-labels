$(document).ready(function(){
  var metadata = $.getJSON("triplets.json");
  console.log(metadata);
  var i = 0

    document.getElementById('import').onclick = function() {
        readFile(document.getElementById('inputfile').files[0], function(e) {
            var temp = e.target.result;
            metadata.responseJSON = JSON.parse(temp);
            
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
        });
    }

    function readFile(file, onLoadCallback){
        var reader = new FileReader();
        reader.onload = onLoadCallback;
        reader.readAsBinaryString(file);
    }

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
