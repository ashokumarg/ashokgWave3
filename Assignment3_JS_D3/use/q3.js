var ob = [5, [22], [[14]], [[4]],[5,6]];

	var toReturn = [];
function flatObj(ob) {

	for (var i=0;i<ob.length;i++) {
	//	if (!ob.hasOwnProperty(i)) continue;

		if ((typeof ob[i]) == 'number')
    {
			 toReturn.push(ob[i]);
		}

    else {
			flatObj(ob[i]);
		}
	}
//	return toReturn;
};

flatObj(ob);
console.log(toReturn);
