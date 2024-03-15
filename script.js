var random1=Math.floor(Math.random()*6)+1;
var randomImage="dice"+random1+".png";
var randomImageSourse="./images/"+randomImage;


var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSourse);

var random2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+random2+".png";
var randomImageSourse2="./images/"+randomImage2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSourse2);

// let btn=document.querySelector("#buton");
// btn.addEventListener("click",()=>{
//     image1.setAttribute("src",randomImageSourse);
//     image2.setAttribute("src",randomImageSourse2);
// })

let h1 = document.querySelector("h3");
if(random1>random2){
    h1.innerHTML="🚩Player 1 Win";
}
else if(random1==random2){
    h1.innerHTML="Draw play Again.";
}else{
    h1.innerHTML="🚩Player 2 Win";
}

function refresh(){
    window.location.reload("Refresh")
  }