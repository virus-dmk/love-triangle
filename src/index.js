/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  let mas = preferences;

  for (let i = 0; i < mas.length; i++) {
    
    let firstPlace = i;
    let second = mas[firstPlace]-1;
    let third = mas[second]-1; 
    let first = mas[third]-1; 
    
    
    if(typeof first === 'undefined' 
    || typeof second === 'undefined' 
    || typeof third === 'undefined'  ) {
      continue;
    }
    if( (first === firstPlace) && (second !== third) && (second!==first) && (third!==first) && first!==second && third !== second ){
      count++;
      
    }
  }
  return count/3;
};