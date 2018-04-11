'use strict';
function addLetter(number) {
  if (number > 26) {
    if (number%26 === 0) {
      return String.fromCharCode(97) + String.fromCharCode(26 + 96);
    }else{
      return String.fromCharCode(number / 26 + 96) + String.fromCharCode(number % 26 + 96);
    }
  }else{
    return String.fromCharCode(number + 96);
  }
}
function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let result = [];
   //根据给出的两个数字得到对应自增的字母区间
  if (number_a < number_b) {
    for (let i = 0; i < number_b; i++) {
      result.push(addLetter(i)); 
    }
    
  }else if(number_a === number_b){//给定两个相同的数字得到只含此数字对应字母的数组
     resul.push(addLetter(number_a));
  }else{//根据给出的两个数字得到对应自减的字母区间
    for (let j = number_a; j < number_b; j--) {
      result.push(addLetter(i));  
    }

  }
  return result;
}

module.exports = get_letter_interval_2;

