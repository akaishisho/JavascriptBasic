'use strict';

{
  const numbers = [1, 4, 7, 8, 10];

  // const evenNumbers = numbers.filter(numbers=> {
  //   if (number % 2 === 0){
  //     reteurn true;
  //   } else {
  //     reteurn false;
  //   }
  // });

  const evenNumbers = numbers.filter(number => number % 2 ===0);

  console.log(evenNumbers);
}