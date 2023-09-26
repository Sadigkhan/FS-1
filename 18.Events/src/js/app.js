// let eye=document.getElementById("visibleEye");

// eye.addEventListener("click",function(){
//     let inpPassword=document.getElementById("inpName");
//     console.log(inpPassword);
//     if(inpPassword.type=="password"){

//         eye.classList.replace("fa-eye","fa-eye-slash");
//         // eye.classList.add("fa-eye-slash");
//         inpPassword.type="text";
//     }
//     else{
//         eye.classList.replace("fa-eye-slash","fa-eye");
//         inpPassword.type="password";
//     }
// })


// let key = event.key;



// window.onkeydown=function(event){
//     console.log(event.key)
// }


// let inp = document.getElementById("inp");
// let count = document.getElementById("count");
// let counter = document.getElementById("smsCount");
// let smsCount = 1;

// console.log(count.textContent)

//keydown / keyup / keypress
// let counter=0;
// inp.addEventListener("keyup", function (event) {
//     let inpLength = event.target.value.length;
//     console.log(event.key)
//     count.textContent = inpLength

//     // if (inpLength > 160 * smsCount) {
//     //     smsCount++;
//     // } else if (inpLength <= 160 * (smsCount - 1)) {
//     //     smsCount--;
//     // }
//     counter.textContent = Math.ceil(inpLength/160);
// })

// let body = document.getElementsByTagName("body")[0];

// window.onkeyup = function (event) {
//     if(event.keyCode==82){
//         body.style.backgroundColor="red";
//     }else{
//         body.style.backgroundColor="blue";
//     }
// }


// let char = document.querySelector(".char");
// // let left=char.style.left;
// let left = 0;
// char.style.left = left;

// window.onkeyup = function (event) {
//     if (event.keyCode == 65) {

//         left += 10
//         char.style.left = (parseInt(char.style.left) + 100) + "px"
//     }
// }

let btn=document.getElementById("btn");

btn.addEventListener("click",function(event){
event.preventDefault();
})