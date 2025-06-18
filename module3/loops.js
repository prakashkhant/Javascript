for (var i = 0; i < 10; i++) {
  console.log(i);
}

var num = [1,2,3,4,5,6,7,8,9,10];
var sq_arr = [];
for(var i=0; i<10;i++){
    console.log(num[i] * num[i]);
    sq_arr.push(num[i]*num[i]);
}

console.log(sq_arr);