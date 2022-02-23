'use strict';

{
  const str = 'hello';

  // console.log(str.length);

  // str.substring(開始位置, 終了位置);
  // console.log(str.substring(2, 4));

  //文字列に対して配列のような記法を使うと、個々の文字にアクセスできる

  console.log(str[1]);
  // str[1] = 'a';
  // str[1] に対して値を設定したり、もしくは str に対して forEach() を使ったりできるわけではない
}