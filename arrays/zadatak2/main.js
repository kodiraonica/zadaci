// Write a function concatUp that concatenate two arrays. The longer array should be appended to the shorter array. If both arrays are equally long, the second array should be appended to the first array.

function concatUp(firstArray, secondArray) {

    if (secondArray.length >= firstArray.length) {
      return firstArray.concat(secondArray);
    }
  
    return secondArray.concat(firstArray);
  }