let bubbleSortGraph = document.getElementById('bubbleSort');
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
//console.log(bubbleFunc([5,1,4,2]));


