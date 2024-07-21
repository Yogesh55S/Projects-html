let progress = document.getElementById("progress");
const song = document.querySelector("song");
//const img = document.querySelector("img");
let icon = documnet.getElementById("icon");
var btnvar1 = document.getElementById("btn1");


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playpause(){
    if(icon.classList.contains("fa-pause")){
        song.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");

    }
    else{
        song.play();
        icon.classList.add("fa-pause");
        icon.classList.remove("fa-play");

    }
}

if(song.play){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

function like(){
    if(btnvar1.style.color =="red"){
        btnvar1.style.color="white"
        alert("Don't like me?")
    }
    else{
        btnvar1.style.color = "red"
        alert("Added into the playlist")
    }
}


progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    icon.classList.add("fa-pause");
    icon.classList.remove("fa-play");
}