/*let bubbleSortGraph = document.getElementById('bubbleSort');
let bubbleContainer = document.createElement('div');
bubbleContainer.style.width ='700px';
bubbleContainer.style.height = '300px';
bubbleContainer.style.backgroudColor = 'lightgreen';
let randArry = [5,3,1,2,4];

for (let i = 0; i < 5; i++){
    let arrDiv = document.createElement('div');
    arrDiv.className = 'arrDiv';
    arrDiv.id = i;
    bubbleContainer.appendChild(arrDiv);
  }

bubbleSortGraph.appendChild(bubbleContainer);

let bubbleFunc = function(arr){
  let loop = true;
  let passes = 0;
  let swapCounter = 0;
    while(loop){
      loop = false;
      storedVar = arr[0];
      for (var i = 1; i < arr.length; i++){
        if(storedVar > arr[i]){
          arr[i - 1] = arr[i];
          arr[i] = storedVar;
          loop = true;
          swapCounter++;
        } else {
          storedVar = arr[i];
        }
        console.log(arr);
        console.log(swapCounter);


        passes++;
      }
    }
    return arr;
};
console.log(bubbleFunc([5,1,4,2]));*/


/*var bubbleSort = (function(){  //use Module at the end of your var insertName
var module = {};

module.*/

sort = function(array){ //<-- parameter to test in code
var storeArray =[];
var counter = 0;
console.log("array",array);
for(var r = 0; r < array.length; r++){
   for(var i = 0; i <array.length; i++){
    if(array[i] > array[i+1]){
      storeArray.push(array[i]);
      array.splice(i,1);
      array.splice(i+1,0,storeArray[0]);
      storeArray.pop();
      counter++;
    }
  }
}
console.log("it takes " + counter +" passes to sort.");
return array;
//console.log(array);
//console.log(array);
return array;
};

sort([5,1,4,2,8]);

console.log(sort([5,1,4,2,8]));

//return module; //this returns the object module so we can access it
//});
//module.exports = bubbleSort; // this exports. use the

