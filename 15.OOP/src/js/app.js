//function decleration
// function Semed(){
//     console.log("Hello World");
// }
// Semed();

// //function expression
// Samad();
// let Samad = function(){
//     console.log("Hello World");
// }


// let arr=[1,2,3,4,5,6,7]

// let person = {
//     name:"Samed",
//     age:25,

// }

// for(index in person){
//     console.log(person[index]);
// }

// arr.forEach(function(elem){
//   console.log(elem);
// })


// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// while(arr.length>0){
//     console.log(arr.pop());
// }

// let text = ""
// let i = 0;

// do {

//     text += "The number is " + i;
//     console.log(text);
//     i++;
//   }
//   while (i < 10);


//   while (i < 10) {
//     text += "The number is " + i;
//     console.log(text);
//     i++;
//   }






// class Person{
//     constructor(ad,soyad,yas){
//         this.ad=ad;
//         this.soyad=soyad;
//         this.yas=yas;
//     }
//     getFullName(){
//         return this.ad+" "+this.soyad;
//     }
// }

// function Human(ad,soyad,yas){
//     this.ad=ad;
//     this.soyad=soyad;
//     this.yas=yas;
// }

// let Ayan1 = new Human("Samed","Mirzezade",25);

// console.log(typeof(Ayan1));

// let person1 = new Person("Samed","Mirzezade",25);
// console.log(Person);


// const person = {
//     ad: "Mehmet",
//     soyad: "Kaya",
//     yas: 25,
//     hobiler: {
//         spor: "yuzme",
//         muzik: "gitar",
//         adrenalin: "Baba arabasini kacirmak"
//     },
//     babaArabasi: [
//        { marka: "BMW", model: ["M4", "M3", "M5"]},
//        { marka: "Porsche", model: ["Cayenne", "Taycan", "Panamera"]},
//     ],
//     get FullName() {
//         return this.ad + " " + this.soyad;
//     }
// }

// console.log(person)

// const myarray=Object.values(person)
// // console.log(myarray);

// myarray.forEach(element => {
//     console.log(element);
// });

// console.log(person.ad.toUpperCase());

// console.log(person.getFullName());

// "use strict"

// x=20;
// console.log(x);



// function ThisDefiner(){
//     "use strict"
//     console.log(this);
// }
// ThisDefiner()

// console.log(person.getFullName());

// const x=person
// delete x.ad;
// console.log(person);


// const person = {}


// person.fullName="Samed Mirzezade";
// person.age=25;
// person.job="Developer";
// person.getFullName=function(){
//     return this.fullName;
// }
// console.log(person.getFullName());

// const person =new Object();
// person.fullName="Samed Mirzezade";



// let btn1=document.getElementById("first");
// let btn2=document.getElementById("second");



// function First(){
//     console.log(this);
// }


// let Second=()=>console.log(this);

// console.log(typeof this);

// btn1.addEventListener("click",First)
// btn2.addEventListener("click",Second)



const person = {
    ad: "",
    soyad: "",
    yas: "",
    get FullName(){
        return this.ad+" "+this.soyad;
    },

    set Ad(ad) {
        if (ad.trim() === "") {
            console.log("Ad bosdur")
        } else {
            this.ad = ad;
        }
    },
    set Soyad(soyad) {
        if (soyad.trim() === "") {
            console.log("Soyad bosdur")
        } else {
            this.soyad = soyad;
        }
    }
   
}
//HTML elementlerini goturmek
const inputAd = document.getElementById("ad");
const inputSoyad = document.getElementById("soyad");
const inputYas = document.getElementById("yas");
const btn = document.getElementById("btn");
const result = document.getElementById("result");


//Button ucun event elave etmek
btn.addEventListener("click", Createuser);

function Createuser() {
    person.Ad = inputAd.value;
    person.Soyad = inputSoyad.value;
    // person.yas = inputYas.value;
    result.innerHTML = person.FullName;
}


function Person(ad,soyad){
    this.ad=ad;
    this.soyad=soyad;
}

class Human{
    constructor(ad,soyad){
        this.ad=ad;
        this.soyad=soyad;
    }
}


const person1=new Person("Samed","Mirzezade");
console.log(person1);