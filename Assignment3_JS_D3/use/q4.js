var myObj =

[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},

{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},

{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},

{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},

{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},

{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

var array = [];
function getProgrammer(ob, property, value) {
      for (var i = 0; i < ob.length; i++) {

       if (ob[i][property].toString() == value) {
           array.push(ob[i]);
       }

   }
   return array[i];
 }
    getProgrammer(myObj, "occupation", "Programmer");
   console.log(array);




function sortByAge(obj) {
     var arr=obj;
        for (var i = 1; i < arr.length; i++) {
          if (parseInt(arr[i]["age"]) > parseInt(arr[i - 1]["age"])) {
              var t = arr[i - 1];
              arr[i - 1] = arr[i];
              arr[i] = t;
              i = 0;
          }

      }
      return arr;
   }

var sortedAge =  sortByAge(myObj);
console.log(sortedAge);



function recreate(obj){
  var dist_arr=[];
   for(var i=0;i<obj.length;i++){
    var arr= getProgrammer(myObj,"occupation",obj[i]["occupation"].toString());
    dist_arr[obj[i]["occupation"].toString()]=arr;
   }
   return dist_arr;
}

var recreated_list = recreate(myObj);
console.log(recreated_list);
