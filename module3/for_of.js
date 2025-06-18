// for of is value BaseAudioContext

var scores = [60,90,45,67];

for( var score of scores){
    console.log(score);
}
var colorsArray = ['yellow','Green','Red'];
 for(var [index,color] of colorsArray.entries())
 {
    console.log(index +" : "+ color);
 }