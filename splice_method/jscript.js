

var arr=["one", "two", "three", "four","five","six","seven","eight","nine","ten"];
// var rez=arr.splice(6,3);
// console.log("masiveArr",arr);
// console.log("massiveDel",rez);

var rezSplice=function toSplise(startIndex, number) {
	var rezArr=[];
	var rezDel=[];
	var rezArrSum=[];
	var startIndex;
	var firstIndex;
	var addData;

	switch(arguments.length){
		case 0: startIndex=arr.length-1;
				firstIndex=arr.length-1;
				for (var i = 0; i < arr.length; i++) {
					if(i>=startIndex && i<firstIndex) {rezDel.push(arr[i]);
					} else rezArr.push(arr[i])
				};
				arr=rezArr;
		break;

		case 1: startIndex=arguments[0];
		        firstIndex=arr.length;
		        for (var i = 0; i < arr.length; i++) {
					if(i>=startIndex && i<firstIndex) {rezDel.push(arr[i]);
					} else rezArr.push(arr[i])
				}
				arr=rezArr;
		break;


		case 2: startIndex=arguments[0];
		        firstIndex=arguments[0]+arguments[1];
		        for (var i = 0; i < arr.length; i++) {
					if(i>=startIndex && i<firstIndex) {rezDel.push(arr[i]);
					} else rezArr.push(arr[i])
				};
				arr=rezArr;
		break;


		default: startIndex=arguments[0];
		        firstIndex=arguments[0]+arguments[1];
		        for (var i = 0; i < arr.length; i++) {
					if(i>=startIndex && i<firstIndex) {rezDel.push(arr[i]);
					} else rezArr.push(arr[i])
				};
				for (var i = 0; i < rezArr.length; i++){
					if(i==arguments[0]){
						for (var j = 2; j < arguments.length; j++) {
							rezArrSum.push(arguments[j])								
						};
						rezArrSum.push(rezArr[i])
					} else rezArrSum.push(rezArr[i])
				}
				arr=rezArrSum
		break;
	}
	return rezDel;
}

var splice=rezSplice(6, 3, "aa", "bb", "cc");

console.log("masiveArr ",arr);
console.log("splice ",splice);