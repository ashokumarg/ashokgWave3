//Converter Class
var fs = require('fs');

function ReadAppend(file, appendFile){
  fs.readFile(appendFile, function (err, data) {
    if (err) throw err;
    console.log('File was read');

    fs.appendFile(file, data, function (err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');

    });
  });
}
// edit this with your file names
file = 'India2011.csv';
appendFile = 'IndiaSC2011.csv';
ReadAppend(file, appendFile);
appendFile = 'IndiaST2011.csv';
ReadAppend(file, appendFile);





fs = require('fs')
fs.readFile('India2011.csv', 'utf8', function (err,data) {
if (err) {
 return console.log(err);
}

data1=csvJSON(data);
console.log(data1);
var wstream = fs.createWriteStream('output.json');
wstream.write(data1);
wstream.end();
});
function csvJSON(csv){

 var lines=csv.split("\n");

 var result = [];

 var headers=lines[0].split(",");

 for(var i=1;i<lines.length;i++){

      var obj = {};

      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
     if(headers[j]=="Age-group" )
     {
          obj["Age"] = currentline[j];
        }
    if(headers[j]=="Literate - Persons" )
    {
     obj["Literate"] = currentline[j];
    }

 }
      result.push(obj);

   }

     result.sort(function (a, b)
  {
     return b.Literate-a.Literate;
  });
   // console.log(result);
return JSON.stringify(result);
}
