let numArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];


  let evenNums = []

  let oddNums = []

  for(let i = 0; i<numArray.length; i++){
    if(numArray[i]%2==0){
        evenNums.push(numArray[i])
    }

    else{
        oddNums.push(numArray[i])
    }
  }


  document.write(`Original Array : ${numArray} ` ,"<br>" )
  document.write(`Even numbers Array : ${evenNums}` ,"<br>" )
  document.write(`Odd numbers Array : ${oddNums}  ` , "<br>")