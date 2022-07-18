//задание 1
let a = prompt();
a = +a;
alert (typeof a);
if (a % 2 ===0){
  alert ("чётное")
} else if (a % 1 ===0){
  alert("нечетное")
} else 
  alert("Упс, кажется, вы ошиблись");
if (a > 0){
  alert ("true")
} else (a<0)
  alert ("false")

//задание 2
let X = prompt();
  X = +X;
  alert("X -" + X);
let x = prompt();
if (typeof(x) === "number"){
  console.log ("тип х = числу");
} else if (typeof(x) === "string"){
  console.log ("тип х = строке");
} else if (typeof(x) === "boolean"){
console.log ("тип х = логическому типу");
} else{
  console.log ("тип х = не определен");
}

//задание 3
a = prompt();
function reverse(a){
    return a.split("").reverse().join("");
}
console.log(reverse(a));

//задание 4
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  console.log(getRandomInt(100));
  a = getRandomInt(100);
  alert (a);

  //задание 5
  let arr = ["a", "b", "c", "d", "i","f","g"];
  console.log(arr.length);
  ["a", "b", "c", "d", "i","f","g"].forEach(alert);

  //задание 6
  function checkArrayType(arr) {
    let arr1 = arr.map(e=>typeof e);
    return [...new Set(arr1)].length === 1;
  }
  
  function checkArrayType1(arr) {
    return arr.every((e,i,a) => typeof e === typeof a[0]);  
  }
  
  console.log(checkArrayType([1,2,'5',3,4]));
  console.log(checkArrayType1([1,2,5,3,4]));
  
  //задание 7
  let arr = [5, 10, 1, 0, 8, 76, 33, null, undefined,];
let zerocount = 0;
let numbercount = 0;
let nullcount = 0;
let evencount = 0;
let oddcount = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        numbercount += 1;
        if (arr[i] === 0) {
            zerocount += 1;
        } else if (arr[i] === null) {
            nullcount += 1;
        } else if (arr[i] % 2 === 0) {
            evencount += 1;
        } else {
            oddcount += 1;
        }
    }
}
console.log(`В массиве: ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);

  //задание 8
