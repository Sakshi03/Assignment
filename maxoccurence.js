var arr=["and","I","me","and","I","I","and","and"];
var max = 0;
var element = '';
var obj={};
for(let i=0; i<arr.length; i++){
	if(obj[arr[i]] === undefined){
  	obj[arr[i]] = 1;
  } else {
  	obj[arr[i]] = obj[arr[i]] + 1;
  }
  if(obj[arr[i]] >= max){
	  max = obj[arr[i]];
  	element = arr[i];  
  }
}
console.log(element);
document.getElementById("maxdiv").innerHTML= element;