//call/apply/bind

// let human={
//     getDetails:function(surname,adress){
//         console.log(`Name is ${this.name} and age is ${this.age} and surname is ${surname}. Adress is ${adress}`);
//     }
// }


// let person1={
//     name:'John',
//     age:25,
//     getDetails:function(){
//         return`Name is ${this.name} and age is ${this.age}`;
//     },
//     getDetails2:function(){
//         console.log(`Name is ${this.name} and age is ${this.age}`);
//     }
// }

// let person2={
//     name:'Mary',
//     age:27,
// }

// // person1.getDetails();
// // person2.getDetails();

// //call gets arguments as comma separated values
// // human.getDetails.call(person1,'Doe','NYC')
// //call gets arguments as array
// // human.getDetails.apply(person2,['Doe','Baku'])
// // person1.getDetails.bind(person2)();
// // let fullname=person1.getDetails.bind(person2)
// // console.log(fullname());

// console.log(person1.getDetails.bind(person2)());
// person1.getDetails2.bind(person2)();



// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     display: function () {
//       let x = document.getElementById("demo");
//       x.innerHTML = this.firstName + " " + this.lastName;
//     }
//   }


//   person.display();
//   setTimeout(person.display.bind(person),3000)
//   setTimeout(person.display, 3000);

let btn=document.getElementById('btn');
let demo=document.getElementById('demo');

btn.addEventListener('click',function(e){
e.preventDefault()
let xhr=new XMLHttpRequest();
xhr.onload=function(){
    if(this.status===200){
        console.log(this.responseText);
        let users=JSON.parse(this.responseText);
        let output='';
        for(let i in users){
            output+=`<li>${users[i].login}</li>
            <img src="${users[i].avatar_url}" alt="">
            `
        }
        demo.innerHTML=output;
    }
}
xhr.open("GET","https://api.github.com/users")
xhr.send()
})


  