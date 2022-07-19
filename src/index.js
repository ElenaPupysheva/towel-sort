
// You should implement your task here.

module.exports = function towelSort (matrix) {
let j;
let z=0;
let arr=[];
if (matrix != undefined){
j=matrix.length;
for (; z<j; z++){
  if ((z==0) || ((z%2)==0)) {
      arr[z]=matrix[z];
      }
     else if ((z%2)!=0) {
      arr[z]=matrix[z].reverse();}}
var result = [].concat(...arr);
return result;}
      else {return []}

}
 