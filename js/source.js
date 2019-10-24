var metadata;
$(document).ready(function(){
  var selectedFile = $.get("TRIPLETS.xlsx");
  var reader = new FileReader();
  reader.onload = function(event) {
    var data = event.target.result;
    var workbook = XLSX.read(data, {
        type: 'binary'
    });
    workbook.SheetNames.forEach(function(sheetName) {

        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        metadata = JSON.stringify(XL_row_object);
        document.getElementById("jsonObject").innerHTML = metadata;
      })
  };
  reader.onerror = function(event) {
    console.error("File could not be read! Code " + event.target.error.code);
  };
  reader.readAsBinaryString(selectedFile);
});

      //$("#fileUploader").onload(function(evt){
