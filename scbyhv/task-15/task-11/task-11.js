// Implicit coercion:
// practice questions on implicit coercion
console.log('A' - 1);//Nan
console.log('A' + 1);//A1
console.log(2 + '2' + '2');//222
console.log('hello' + 'world' + 89);//helloworld89
console.log('hello' - 'world' + 89);//Nan
console.log('hello' + 78);//hello78
console.log('78' - 90 + '2');//-122
console.log(2 - '2' + 90);//90
console.log(89 - '90' / 2);//44
console.log((true == false) > 2);//false