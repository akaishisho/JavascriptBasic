'use strict';

{
  const prices = [180, 190, 200];

  // const updatePrices = prices.map((price) => {
  //   return price + 20;
  // });

  const updatePrices = prices.map(price => price + 20); //引数が 1 つの場合は() は省略して OK
  console.log(updatePrices);
}