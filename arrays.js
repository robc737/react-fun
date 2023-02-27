console.log('hi');

function transformToObjects(numberArray) {
  return numberArray.map((arrayValue) => {
    return {val : arrayValue}
  })
}

function callMe(name) {
  console.log(name);
}
const callMe2 = function(name) {
  console.log(name)
}

const callMe3 = (name) => {
  console.log(name)
}

const doubleME = (name) => name *2;

console.log(transformToObjects([1,2,2]))
console.log(doubleME(1))

