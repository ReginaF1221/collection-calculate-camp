'use strict';
// function include(result,item) {
//   for (let num = 0;num < result.length;num++) {
//     if (num === item) {
//       return false;
//       break;
//     }
//   }
//   return true;
// }
// function get_union(collection_a, collection_b) {
//   //在这里写入代码
// let result = [];
// result = result.concat(collection_a);
//   for (let item = 0;item < collection_b.length;item++){
//     if (include(result,item) === true) {
//       result.push(item);
//     }
//   }
// return result;
// }
function include(result,item) {
  for (let num of result) {
    if (num === item) {
      return false;
      break;
    }
  }
  return true;
}
function get_union(collection_a, collection_b) {
  //在这里写入代码
  let result = [];
  result = result.concat(collection_a);
  for (let item of collection_b){
    if (include(result,item) === true) {
      result.push(item);
    }
  }
  return result;
}

module.exports = get_union;

