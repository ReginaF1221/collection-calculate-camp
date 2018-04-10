'use strict';

function get_intersection(collection_a, collection_b) {
  //弹出两个集合的交集
  let result = [];
  for (let i = 0; i < collection_a.length; i++) {
    let temp = collection_a[i];
    for (let j = 0; j < collection_b.length; j++) {
      if (temp === collection_b[j]) {
        result.push(temp);
      }
      
    }
    
  }
  return result ;
}

module.exports = get_intersection;
