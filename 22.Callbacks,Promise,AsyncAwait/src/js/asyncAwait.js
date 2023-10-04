// async/await 
// JS single thread dilidir, yani bir vaxtda bir is gorur
// Sinxronluq nedir? bir isin bitmesini gozleyir ve diger isleri edir
// Asinxronluq nedir? bir isin bitmesini gozlemir ve diger isleri edir
// JS hem sinxron hemde asinxron olaraq isleyir

// Sinxronluq
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


// function topla(a, b, callback) {
//     setTimeout(function () {
//         var netice = a + b;
//         callback(netice);
//     }, 1000); // 1 saniye gecikme 
// }

// function vurma(a, b, callback) {
//     setTimeout(function () {
//         var netice = a * b;
//         callback(netice);
//     }, 1000); // 1 saniye gecikme 
// }

// //2 prosses 1 saniye erzinde islendi ve netice console -de gosterildi

// var a = 3;
// var b = 5;

// topla(a, b, function (cemNeticesi) {
//     console.log('Toplam:', cemNeticesi);
// });

// vurma(a, b, function (hasilNeticesi) {
//     console.log('Hasil:', hasilNeticesi);
// });


// // bir funkisiyanin asinxron teyin etmek  ucun async yaziriq
// // async yazdigimiz zaman bu funksiya mutleq promise qaytarir

// async function myAsyncFunction() {
//     // asinxronluq burada baslayir
//     console.log("asinxronluq basladi")
//     return "Netice olaraq promise qayidir"; // Bu netice bir Promise qaytarir
// }

// async function Sadiqxan(){
//     console.log("Asinxronluq basladi");
//     return "Netice olaraq promise qayidir";
// }

// var netice = Sadiqxan();
// console.log(netice);


// // async funksiyalarin icinde await yazdigimiz zaman funksiya promise qaytarmalidir
// // await yazdigimiz zaman funksiya bitene qeder kodlarin islemesini dayandirilir

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {   // resolveAfter2Seconds funksiyasi promise qaytarir 
//                                         //asagidaki kod blokunda await yazdigimiz ucun bu funksiya promise qaytarmalidir
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }

//     async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result); // result 2 saniye sonra resolved olur, ve ekrana resolved yazilir.
//                         //await yazdigmiz funksiya tamamlanana qeder asagidaki kodlar islemir
//     console.log("asinxronluq bitdi")

//   }

//   asyncCall();

const listofPosts=[];

// async function fetchData(){
//     try{
//         const response=await fetch("https://jsonnplaceholder.typicode.com/posts/1");
//         const data=await response.json();
//         listofPosts.push(data);
//         console.log(listofPosts);

//     }catch (error){
//         console.error("Error bas verdi: " + error);
//     }
// }

// fetchData();
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(response=>response.json())
// .then(data=>{
//     listofPosts.push(data);
//     console.log(listofPosts);
// })
// function fetchDataWithPromise(url){
//     return new Promise((resolve,reject)=>{
//         fetch(url)
//         .then(response=>{
//             // console.log(response);
//             if(response.ok){
//                return response.json();
//             }else{
//                 reject( new Error("Xeta bas verdi"))
//             }
//         })
//         .then(data=>{
//             resolve(data);
//             // console.log(data);
//             listofPosts.push(data);
//             console.log(listofPosts);
//         })
//         .catch(error=>{
//             console.error("Error bas verdi: " + error);
//         })
//     })
// }

// fetchDataWithPromise("https://jsonplaceholder.typicode.com/posts/1");


console.log(1)

setTimeout(() => {
    console.log(2)
}, 1000);

console.log(3)

setTimeout(() => {
    console.log(4)
    
    setTimeout(() => {
        console.log(5)
    }, 1000);

    new Promise((resolve, reject) => {
        console.log(6)
        resolve()
    }).then(() => {
        console.log(7)
    })
}, 0);

new Promise((resolve, reject) => {
    console.log(8)
    resolve()
}).then(() => {
    console.log(9)
})

// ferid 1,3,8,9,2,4,6,7,5
// Nihad 1,3,8,9,4,6,7,5,2
// Suleyman 1,3,8,9,2,4,6,7,5
// Ayan 1,3,8,9,4,5,6,7,2