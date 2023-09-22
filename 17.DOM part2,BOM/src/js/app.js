// let first=document.getElementById('first');
// let second=document.getElementById('second');
// let third=document.getElementById('third');

// // console.log(first);
// // console.log(second);
// // console.log(third);

// console.log();


// //set default val to input



// let btn=document.getElementById('open');

// btn.addEventListener('click',OpenTab);

// function OpenTab(){
// window.open();
// }

// setInterval(Hello,3000)

// function Hello(){
//     console.log('Hello');
// }


let menu_btn = document.querySelector("#Header .container .all .right .menu-div .menu_btn");

let menu = document.querySelector("#Header .container .all .menu-mobile");

menu_btn.addEventListener("click", function () {
    menu.classList.toggle("active");
})


// menu_btn.addEventListener("click", function () {
//     if(menu.classList.contains("active")){
//         menu.classList.remove("active");
//     }else{
//         menu.classList.add("active");   
//     }
// })

let menu_mobile_item = document.querySelectorAll("#Header .container .all .menu-mobile .nav-ul .menu-mobile-item");

menu_mobile_item.forEach(function (item) {
    item.addEventListener("click", function () {
        item.querySelector(".menu-mobile-item-dropdown").classList.toggle("active");
    })
})