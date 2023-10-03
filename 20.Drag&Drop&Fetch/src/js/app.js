// document.addEventListener("DOMContentLoaded", function () {
//     const dropArea = document.getElementById("drop-area");
//     const output=document.getElementById("output");
//     dropArea.addEventListener("dragover", (e) => {
//         e.preventDefault();
//     });

//     dropArea.addEventListener("drop", (e) => {
//         e.preventDefault();
//         const files = e.dataTransfer.files;

//         if (files.length > 0) {
//             const file = files[0];

//             if (file.type.startsWith("image/")) {
//                 const reader = new FileReader();

//                 reader.onload = (event) => {
//                     const image = new Image();
//                     console.log(event.target.result)
//                     image.src = event.target.result;
//                     image.style.maxWidth = '100%';
//                     image.style.maxHeight = '100%';
//                     dropArea.innerHTML = " ";
//                     dropArea.appendChild(image);
//                 };

//                 reader.readAsDataURL(file);
//             } else if (file.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
//                 const reader = new FileReader();
//                 reader.onload = (event) => {
//                     const data = new Uint8Array(event.target.result);

//                     const workbook = XLSX.read(data, {
//                         type: 'array'
//                     });

//                     const sheetName = workbook.SheetNames[0];
//                     const sheet = workbook.Sheets[sheetName];
//                     const htmlTable = XLSX.utils.sheet_to_html(sheet);
//                     console.log(htmlTable);
//                     output.innerHTML = htmlTable;
                    
//                 }
//                 reader.readAsArrayBuffer(file);
//             }



//         }
//     });
// });


let btn=document.getElementById("fetch");

btn.addEventListener("click",function(){
fetch("https://randomuser.me/api/?results=100")
.then((response)=>response.json())
.then((data)=>{
    // console.log(data);
    console.log(data.results);
    let users=data.results;
    let output="";
    for(let user of users){
        output+=`
        <div class="card">
        <img src="${user.picture.large}" alt="">
        <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <p>${user.email}</p>
        <p>${user.location.city}</p>
        </div>
        `
    }
    document.getElementById("output").innerHTML=output;
})
});