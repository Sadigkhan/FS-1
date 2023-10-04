// //JS single thread dilidir, yani bir vaxtda bir is gorur
// //Sinxronluq nedir? bir isin bitmesini gozleyir ve diger isleri edir
// //Asinxronluq nedir? bir isin bitmesini gozlemir ve diger isleri edir
// //JS hem sinxron hemde asinxron olaraq isleyir

// console.log(1)

// setTimeout(()=>{
//     console.log(2)
// })

// setTimeout(()=>{
//     console.log(4)
// },1000)

// setTimeout(()=>{
//     console.log(5)
// })
// console.log(3)


// //Sinxronluq
// function topla(a, b) {
//     return a + b;
//   }

//   function Vurma(a, b) {
//     return a * b;
//   }

//   var num1 = 5;
//   var num2 = 3;

//   var cem = topla(num1, num2); // İlk işlevi çağır ve sonucu al
//   console.log('Cem:', cem);

//   var hasil = Vurma(num1, num2); // İkinci işlevi çağır ve sonucu al
//   console.log('Hasil:', hasil);




//callbacks

// 1. Callback funksiya nedir?
// Callback funksiya basqa bir funksiyaya argument kimi verilen funksiyadir.
// Callback funksiyalar asinxron funksiyalarin icinde istifade olunur. yeniki asinxron funksiya tamamlandiginda 
//ve ya her hansi bir event bas verdiyinde callback funksiyasi ishe dushur.

// 2. Sinxron vs. Asinxron funksiyalar:
// Sinxron funksiyalar ishledikleri vaxt proqramin ishini dayandirirlar. Yeniki mueyyen ardicilliqla ishleyirler.
// Asinxron funksiyalar ise proqramin ishini dayandirmadan ishledikleri vaxt proqramin ishini davam etdirirler. 
//Yeniki eyni zamanda ishleyirler.


// 3. setTimeout() funksiyasi:
// setTimeout() funksiyasi asinxron funksiyadir. setTimeout() funksiyasi 2 argument qebul edir. Birinci argument 
//callback funksiyadir. Ikinci argument ise callback funksiyasinin nece milisaniye sonra ishe dushmesi ile baglidir.
// setTimeout() funksiyasi callback funksiyasini bir defe ishe salir.

// setTimeout(function () {
//     console.log('1');
// }, 1000);
// setTimeout(function () {
//     console.log('2');
// }, 1000);
// setTimeout(function () {
//     console.log('3');
// }, 1000);
// console.log('4');


// 4. setInterval() funksiyasi:
// setInterval() funksiyasi asinxron funksiyadir. setInterval() funksiyasi 2 argument qebul edir. Birinci argument
// callback funksiyadir. Ikinci argument ise callback funksiyasinin nece milisaniyeden bir tekrar ishe dushmesi ile baglidir.
// setInterval() funksiyasi callback funksiyasini tekrar tekrar ishe salir.

// setTimeout(function () {
//     console.log('1');
// }, 1000);
// setInterval(function () {
//     console.log('2');
// }, 1000);
// setTimeout(function () {
//     console.log('3');
// }, 1000);
// console.log('4');

//sinxron callback funksiyasi
// function Greeting(ad){
//     console.log('Hello ' + ad);
// }

// function userLogin(callbackFunction){
//     const username = prompt("Enter your name:");

//     callbackFunction(username);
// }

// userLogin(Greeting);

//asinxron callback funksiyasi


// function Greet(name) {
//     console.log(`Salam, ${name}!`);
// }
// function userLogin(callback) {
//     setTimeout(() => {
//         const username = prompt("Enter your name:");
//         callback(username);
//     }, 2000)
// };

//Asinxron callback AJAX

// function getData(url, callbackFunction) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             callbackFunction(xhr.responseText);
//         } else {
//             console.error("Something went wrong");
//         }
//     };
//     xhr.send();
// }

// getData("https://jsonplaceholder.typicode.com/posts/1", function (data) {
//     console.log(data); // DAta geldiyi zaman callback isleyir
// });



// 5. Callback hell:
// Callback hell funksiyalarin bir birinin icinde istifade olunmasi ile yaranir.
// Callback hell probleminin helli ise Promise ve Async/Await



// function Ayan(){
//     console.log("0");
//     setTimeout(function () {
//         console.log("1");
//         setTimeout(function () {
//             console.log("2");
//             setTimeout(function () {
//                 console.log("3");
//                 setTimeout(function () {
//                     console.log("4");
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }

// Ayan();

//asagidaki kodlar callback hell problemini hell edir


function wait(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

wait(1000)
    .then(function () {
        console.log("1");
        return wait(1000);
    })
    .then(function () {
        console.log("2");
        return wait(1000);
    })
    .then(function () {
        console.log("3");
        return wait(2000);
    })
    .then(function () {
        console.log("4");
    });

 
