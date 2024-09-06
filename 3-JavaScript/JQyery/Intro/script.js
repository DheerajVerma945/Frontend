$("h1").css("color","red");
$("button").css("backgroundColor","aqua");
$("button").css("borderRadius","5px");
$("h1").addClass("big-tittle");
// document.querySelector("button").style.backgroundColor ="Orange";
$("h1").text ("Hey!");
// $("h1").html("<i> Hey ! </i>")
// $("img").attr("src","./kick.png");
$("img").css("width","200px");
console.log($("a").attr("href"));


// Adding event Listeners Using Jquery


// for(let i =0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color = "purple";
//     });
// }

// $("button").click(function(){
//     $("h1").css("color", "purple");
// });

$("input").keypress(function(event){
    $("h1").text(event.key);
});

// $("h1").on("mouseover",function(){
//     $("h1").css("color","grey");
// });

// $("h1").append("<button> Welcome </button>");

$("button").click(function(){
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    $("h1").slideUp().slideDown().animate({opacity:0.7});

});

