// var names=["Xelil", "Aysunur","Seyran","Ferid","Dilare","Semed","Fidan"];
// var surnames=["Hesenov","Elizade","Aliyev","Zimina","Memmedova","Quliyeva","Huseynova"];
// // var numbers2=new Array(1,2,3,4,5,6,7,8,9,10);

// // var numbers3=[];

// // numbers3[0]="Semed";
// // numbers3[1]="Dilare";
// // numbers3[2]="Ferid";
// // numbers3[5]="Seyran";
// // numbers[numbers.length]="Fidan"
// // console.log(numbers);
// // console.log(numbers);
// // console.log(numbers.toString())

// // var arr1=[1,2,3];
// // var arr2=[4,5,6];
// // var arr3=[7,8,9];
// // function myFunction(){}
// // var new_Array=[arr1,arr2,arr3];
// // console.log(new_Array);


// // console.log(names.concat(surnames));
// // console.log(new_Array.flat());
// var silinmisler=surnames.splice(1,2,"Semed",); //1ci indexden baslayaraq 2 element silir ve yerine Semed elave edir
// console.log(silinmisler); //silinenleri gosterir
// // console.log(surnames.splice(1,"Semed"));
// // console.log(surnames);





// function ShowMessage(ad,soyad,yas){
//     var name=document.getElementById("Name");
//     name.innerText=`Ad: ${ad}
//      Soyad: ${soyad}
//      Yas: ${yas}`;
// }

// ShowMessage("Ayan","Zimina",33);

// var ad=document.getElementById("Name");
// var ad2=document.getElementById("Name2");

// ad.innerText="<i>Ayan</i>";
// ad2.innerHTML="<i>Ayan</i>";
// "use strict"
// a=10;
// console.log(a);

//Function Decleration
// console.log(Greeting());

// function Greeting(){
//     return "Hello World";
// }



//Function Expression
// console.log(Greeting());

// var Greeting = function(){
//     return "Hello World";
// }

//Arrow Function

let Greeting =(ad,soyad)=> `Hello ${ad} ${soyad}`;


console.log(Greeting("Ayan","Zimina"));
   

