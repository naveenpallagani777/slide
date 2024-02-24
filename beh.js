var ind = 0;
var pre = document.getElementById("pre");
pre.onclick = function(){
    console.log("pre");
    
    ind--;
    if (ind < 0) ind = 7;
    console.log(ind);
    display(ind);
}
var next = document.getElementById("next");
next.onclick = function(){
    console.log("next");
    
    ind++;
    if (ind > 7) ind = 0;
    console.log(ind);
    display(ind);
}

var image = document.getElementById("image");
console.log(image)

function display(ind){
    if (ind == 0) image.src = "max.jpg";
    else if (ind == 1) image.src = "hopper.jpg";
    else if (ind == 2) image.src = "dustin_.jpg";
    else if (ind == 3) image.src = "steve.jpg";
    else if (ind == 4) image.src = "mike.jpg";
    else if (ind == 5) image.src = "robin.jpg";
    else if (ind == 6) image.src = "nancy.jpg";
    else if (ind == 7) image.src = "eleven.jpg";
}