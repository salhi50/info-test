
// dark mode

let content = document.getElementById("content");
let moonRight = document.querySelector(".dark-right");
let sunRight = document.querySelector(".sun-right");
let moon = document.querySelector(".dark");
let sun = document.querySelector(".sun");

// moon right

moonRight.onclick = function(){
    content.style.background = '#282828';
    sunRight.style.display= 'inline-block';
    moonRight.style.display= 'none';
    document.querySelector(".caption").style.color = 'white';
    document.querySelector(".title").style.color = 'white';
}


// sun right

sunRight.onclick = function(){
    content.style.background = 'white';
    sunRight.style.display= 'none';
    moonRight.style.display= 'inline-block';
    document.querySelector(".caption").style.color = 'initial';
    document.querySelector(".title").style.color = 'initial';
}

// dark mobile

moon.onclick = function(){
    moon.style.display = 'none';
    content.style.background = '#282828';
    sun.style.display = 'block';
    document.querySelector(".caption").style.color = 'white';
    document.querySelector(".title").style.color = 'white';

}

// sun mobile


sun.onclick = function(){
    moon.style.display = 'block';
    content.style.background = 'white';
    sun.style.display = 'none';
    document.querySelector(".caption").style.color = 'initial';
    document.querySelector(".title").style.color = 'initial';
}


// bars

let list = document.querySelector(".bar");
let bottom = document.getElementById("bottom");
list.onclick = function(){
    if(bottom.style.display === "block"){
        bottom.style.display = 'none';
    }
    else{
        bottom.style.display = 'block';
    }
}

// follow

let follow = document.getElementById("follow");
let span = document.querySelector(".span")
follow.onclick = function(){
    if(follow.style.background = "#0f8caf"){
        follow.style.background = '#fca120';
        span.innerHTML = "Followed";
    }
}

// emojis

