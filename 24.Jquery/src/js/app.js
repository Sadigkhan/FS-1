// $('#btn').click(function(){
//     $("*").hide()
// })

// let btn=document.getElementById("#btn")
// document.getElementById("btn").addEventListener("click",function(){
//     document.querySelectorAll('.pTag').forEach(p=>{
//         p.style.display="none"
//     })
// })


// $(document).ready(function(){

  
  
//   });

//   $(function(){


  
//   });

// $("p").on({
//     mouseenter: function(){
//       $(this).css("background-color", "green");
//     },
//     mouseleave: function(){
//       $(this).css("background-color", "lightblue");
//     },
//     click: function(){
//       $(this).css("background-color", "yellow");
//     }
//   });

// $("#hide").click(function(){
//     $(".element").toggle(1000);
//   });
  
//   $("#show").click(function(){
//     $(".element").show(1000);
//   });

// $("button").click(function(){
//     $("#div1").fadeToggle();
//     $("#div2").fadeToggle("fast");
//     $("#div3").fadeToggle(1000);
//   });

$("#fadeIn").click(function(){
    $("#div1").slideUp(3000);
  });

  $("#stop").click(()=>{
    $("#div1").stop()
  })