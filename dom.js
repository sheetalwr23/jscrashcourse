//~~~~~~~~~~console~~~~~~~
// console.log("hello world");
// console.error("this is an error");
// console.warn("this is first warning");
// //data types
// const name = "sheetal,ware";
// const num = 20;
// const isPass = true;
// console.log(typeof age);
// //template string
// console.log(`my name is ${name}`);

// const n = `the age is ${num}`;
// console.log(n);

// ~~~~~~~~~string and its methods~~~~~~~~~~~~~
// let s = "string";
// console.log(s.length, s.toUpperCase());
// // console.log(s.toLowerCase());
// console.log(s.substring(0, 2).toLowerCase());

// console.log(name.split(""));

// ~~~~~~~~~~~~~~Arrays~~~~~~~~~~~~~~~~~~~~~~

// const nums = new Array(1, 2, 3, 4);
// console.log(nums);
// const fruits = ["apple", "cherry"];
// console.log(fruits[1]);
// fruits[2] = "grapes";
// console.log(fruits);
// fruits.unshift("strawberry");
// console.log(fruits);
// console.log(Array.isArray(fruits));

//~~~~~~~~~~~~~~~~~~~~~~~object~~~~~~~~~~~~~~~
// const person = {
//   name: "sheetal",
//   age: 20,
//   hobbies: ["cricket", "hockey"],
//   address: { city: "abad", country: "india" },
// };
// console.log(person.address.country);

/*~~~~~~~~~~~~~~~destructuring ES feature~~~~~~~~~~~~
const { name, age ,addres:{city}} = person;
console.log(name);
*/

//~~~~~~~~~~JSON~~~~~~~~~~
//how we send data to server
// const todo = [
//   { id: 1, task: "meeting1" },
//   { id: 2, task: "meeting2" },
// ];
// console.log(todo);

// const todojson = JSON.stringify(todo);
// console.log(todojson);

// for (let i = 0; i < todo.length; i++) {
//   console.log(todo[i].id);
// }

// ~~~~~~for of loop~~~~~~~~~~~~~~

// for (let things of todo) {
//   console.log(things.task);
// }
// ~~~~~~~~~~~~~~~~~~~~~~~High order array methods~~~~~~~~~~~~~~~
// const array = [
//   { name: "sneha", roll_no: 25 },
//   { name: "sheetal", roll_no: 28 },
//   { name: "atul", roll_no: 40 },
// ];
// foreach
// array.forEach(function (value) {
//   console.log(value.name);
// });

// map
// const maparr = array.map(function (value) {
//   return (value.roll_no += 10);
// });
// console.log(maparr);

// //filter
// const filterarr = array.filter((value) => {
//   //   return value.roll_no > 35;
//   return value.name.length > 5;
// });
// console.log(filterarr);

// ~~~~~~~~~~~~~~~~~~consitionals~~~~~~~~~~~~~~

// const a = "10";
// if (a === 10) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//~~~~~~~~~~functions~~~~~~~~

// function addition(num1 = 5, num2 = 2) {
//   return num1 + num2;
// }
// const res = addition(3, 5);
// console.log(res);

//~~~~~~~~~~arrow function~~~~~~~~~~
// const arrowfun = (num1, num2) => {
//   return num1 * num2;
// };
// console.log(arrowfun(1, 23));

//~~~~~~~~~~~~~constructor function~~~~~~~~~~~~
// function Person(fname, lname, age, dob) {
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
//   this.dob = new Date(dob);
//   this.getBirthYr = function () {
//     return this.dob.getFullYear();
//   };

//   // this.fullname = function () {
//   //     return `${this.fname} ${this.lname}`;
//   //     // return this.fname + " " + this.lname;
//   // };
// }

//*******with prototype */
// Person.prototype.fullname = function () {
//   return `${this.fname} ${this.lname}`;
// };
// let per1 = new Person("sheetal", "ware", 30, 12 - 03 - 1987);
// // console.log(per1.dob.getFullYear());
// console.log(per1.getBirthYr());

// console.log(per1.fullname());

// //we can do above things with class also we will get the same result
// //this is syntacic sugar on above

//********normal constructor with class */
// class Student {
//   constructor(fname, lname) {
//     this.fname = fname;
//     this.lname = lname;
//   }
// }

// ~~~~~~~~~~~~DOM~~~~~~~~~~~~~~~~~~~~~~

// window is default object of browser
// console.log(window);
// window.alert("hello");

//******single element******//
// const myform = document.getElementById("my-form");
// console.log(myform);

// ********************using querry selector we can select anything like class id tag anything **********//
// console.log(document.querySelector(".container"));

//***multiple element */
//using multiple element selector we can get node list. so it can perform array methods on list items
//recommmend to use
// console.log(document.querySelectorAll(".item"));

// const itemlist = document.querySelectorAll(".item");
// itemlist.forEach((value) => {
//   console.log(value);
// });

// ~~~~~~~~~~~~~~~~~~~maniputaltion with DOM~~~~~~~~~~~~~~~~~~/
// const ul = document.querySelector(".items");
// // ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "hello";
// ul.children[1].innerText = "sheetal";
// ul.lastElementChild.innerHTML = "<h1>hello sheetal</h1>";

// const buttn = document.querySelector(".btn");
// buttn.style.background = "red";
// ~~~~~~~~~~~~~~assignment21~~~~~~~~~~~~~
// const ul = document.querySelector(".items");
// const li1 = ul.firstElementChild;
// li1.innerHTML = "HELLO";
// li1.style.color = "green";

// const li2 = document.querySelector("#item2");
// li2.style.color = "yellow";

//~~~~~~~~~~~~events~~~~~~~~~~~
// const buttn = document.querySelector(".btn");
//*****click event */
// buttn.addEventListener("click", (e) => {
//   //when we click event will go within seconds to hold that we are using preventdefault
//   e.preventDefault();
//   //   console.log("i m clicking");
//   console.log(e.target);
//   //   console.log(e.target.id);
//   //   console.log(e.target.class);
//   document.querySelector("#my-form").style.background = "red";
// });

// ~~~~~~~assignment 22~~~~~~~~~~~~~~~~~~~
// click event
const buttn = document.querySelector(".btn");
buttn.addEventListener("click", (e) => {
  //   e.preventDefault();
  document.querySelector("#my-form").style.color = "pink";
});
// // mouseover event
const li1 = document.querySelector("#item1");
li1.addEventListener("mouseover", (e) => {
  e.target.style.color = "red";
  console.log(name.value + " " + email.value);
  setTimeout(() => {
    e.target.style.color = "green";
  }, 3000);
});

// // mouseout event
const li2 = document.querySelector("#item2");
li2.addEventListener("mouseout", (e) => {
  e.target.style.color = "yellow";
  setTimeout(() => {
    e.target.style.color = "green";
  }, 3000);
});

// take the value in the form and console log the value in the browsers

// const myform = document.querySelector("#my-form");
// const name1 = document.querySelector("#name");
// const email = document.querySelector("#email");
// const msg = document.querySelector(".msg");
// const userList = document.querySelector("#userList");

// buttn.addEventListener("ckick", (e) => {
//   console.log(name1.value + " " + email.value);
//   e.preventDefault();
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//*******mouseover event */
// buttn.addEventListener("click", (e) => {
//     //when we clicl event will go within seconds to hold that we are using preventdefault
//     e.preventDefault();
//     //   console.log("i m clicking");
//     console.log(e.target);
//     //   console.log(e.target.id);
//     //   console.log(e.target.class);
//     document.querySelector("#my-form").style.background = "red";
//   });

//~~~~~~form script~~~~~~~~~//
//console log form details
const myForm = document.querySelector("#my-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const userList = document.querySelector("#userList");
const msg = document.querySelector(".msg");

myForm.addEventListener("submit", onSubmit);
const li3 = document.querySelector("#item3");
function onSubmit(e) {
  e.preventDefault();
  console.log(name.value);
  console.log(email.value);
  li3.innerHTML = "name:" + name.value + " " + " email:" + email.value;
  if (name.value == "" || email.value == "") {
    msg.innerHTML = "Please fill credentials";
    setTimeout(() => {
      msg.innerHTML = "";
    }, 3000);
  }
}
