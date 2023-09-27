document.addEventListener('DOMContentLoaded', () => {

    // let prevBtn=document.getElementById('prevBtn');
    // let nextBtn=document.getElementById('nextBtn');
    // let sliderImg=document.getElementById('sliderImg');
    // let sliderContainer=document.querySelector('.slider-container');
    // let currentIndex=0;
    // let images=[
    //     "src/images/Draven_29.jpg",//0
    //     "src/images/draven.jpeg",//1
    //     "src/images/draven2.jpeg",//2
    // ];


    // if(sliderImg){
    //     sliderImg.src=images[currentIndex];
    // }

    // //slider function logic
    // function goToSlide(){
        
    //     if(currentIndex<0){
    //         currentIndex=images.length-1;
    //     }
    //     else if(currentIndex>=images.length){
    //         currentIndex=0;
    //     }
    //     sliderImg.src=images[currentIndex];
    // }

    // //left arrow button
    // prevBtn.addEventListener('click',()=>{
    //     currentIndex--;
    //     goToSlide();
    // });
    // //right arrow button
    // nextBtn.addEventListener('click',()=>{
    //     currentIndex++;
    //     goToSlide();
    // });

    // let autoPlayInterval=setInterval(()=>{
    //     currentIndex++;
    //     goToSlide();
    // },3000);

    // sliderContainer.addEventListener('mouseenter',()=>{
    //     clearInterval(autoPlayInterval);
    // });
    // sliderContainer.addEventListener('mouseleave',()=>{
    //     autoPlayInterval=setInterval(()=>{
    //         currentIndex++;
    //         goToSlide();
    //     },3000);
    // });


    // AOS.init();

    //Tab Menu

    let tabs=document.querySelectorAll(".tabs div")
    let tabContents=document.querySelectorAll(".content div")


    //forach loop

    // tabs.forEach((element)=>{
    //     element.addEventListener("click",function(e){
    //         let tabId=e.target.getAttribute("data-index");
    //         let activeElemet=document.querySelector(".active");
    //         activeElemet.classList.remove("active");
    //         e.target.classList.add("active");

    //         let activeContent=document.querySelector(".show"); 
    //         activeContent.classList.remove("show");
    //         tabContents.forEach((content)=>{
    //             if(content.getAttribute("data-index")==tabId){
    //                 content.classList.add("show");
    //             }
    //         })
    //     })
    // })


    //with for loop
    // for (var tab of tabs) {

    //     tab.addEventListener("click", function () {
    //         let active = document.querySelector(".active");
    //         active.classList.remove("active")
    //         this.classList.add("active");
    //         //Showing content
    //         let index = this.getAttribute("data-index");
    //         for (let content of tabContents) {
    //             if (content.getAttribute("data-index") == index) {
    //                 content.classList.add("show")
    //             } else {
    //                 content.classList.remove("show")
    //             }
    //         }
    //     })

    // }




});