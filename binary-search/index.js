// [-5,2,4,6,10], -5
  //  0 1       3  4
const  binarySearch = (arr,target) => {

    let leftIndex = 0;
    let  rightIndex = arr.length - 1;

    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2);
        if(arr[middleIndex]===target){
            return middleIndex;
        }

        if(target<arr[middleIndex]){
            rightIndex =  middleIndex-1;
        } else {
            leftIndex = middleIndex +1;
        }
    }


}

console.log(binarySearch([-5,2,4,6,10],-5))