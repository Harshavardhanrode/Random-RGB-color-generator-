
let btn = document.querySelector("button");
btn.addEventListener("click",function(){

    document.querySelector("h1").innerHTML = rgb();
    document.querySelector("div").style.backgroundColor = rgb();

})

function rgb(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}