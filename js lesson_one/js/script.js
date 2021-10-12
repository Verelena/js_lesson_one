let Name = prompt("Ведите имя..", " "); 
let Name1 = prompt("Ведите имя..", " "); 
let Name2 = prompt("Ведите имя..", " "); 

alert("Ваше имя - " +  Name + " " + Name1 + " " + Name2 ); //в ковычках пробел

//следующее задание

let first = parseInt(prompt('Введите первое число'), 10); //не буду врать- нашла такое решение в гугле
let second = parseInt(prompt('Введите второе число'), 10);// но прочтала материал, про функцию parseInt,

let  max = function (){
  if (first > second){
    console.log(first)
  } else if (first == second){
    console.log('Числа равны')
  } else {
    console.log(second);
   }
  }
max();
      
// возведение в степень нужно проводить через цикл,


