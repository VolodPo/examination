
var arr=[2,3,4,5,7,9]
// var rez=arr.reduce((accumulator, currentValue, currentIndex, array)=>accumulator+currentValue, 16)
// console.log(rez);


function toReduce(callback,startValue) {
	var rezult=startValue
	if(!startValue) rezult=0;
	for (var i = 0; i < arr.length; i++) {
		rezult=callback(rezult, arr[i], i, arr)
	}
	return rezult
}

var rez=toReduce((rezult, index)=>rezult+index, 16);
console.log(rez);
