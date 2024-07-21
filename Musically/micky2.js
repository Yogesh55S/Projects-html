//Declaration of variables -------------------------------------------------------------
const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
let progress = document.getElementById("progress");
var btnvar1 = document.getElementById("btn1");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const nex = document.getElementById("nex");


//Play and pause fuctions-------------------------------------------------------------------
let isplaying = false;
const playmusic =  () =>{
    isplaying = true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
    
}
const pausemusic = () =>{
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};
hell.addEventListener(click,play());
play.addEventListener('click', () =>{
    if(isplaying){
        pausemusic();
    }else{
playmusic();
    }

 //   isplaying ? pausemusic() : playmusic(); 
})

//Song mapping-------------------------------------------------------------------

const song = [{
    name :"ram",
    title:"ram Siya ram",
    artist:"Sachet Tandon"
},
{
    name :"song3",
    title:"Demon Slayer",
    artist:"Xyz" 
},
{
    name :"song4",
    title:"10 Min",
    artist:"Sippy Gill"
}
]
const loadsong =(song) => {
    title.textContent = song.title;
    artist.textContent = song.artist;
    music.src = "Musically/" + song.name + ".mp3";
    img.src ="Musically/" + song.name + ".jpg";
};
//next and previous commands ------------------------------------------------------------
//songindex =1;
//loadsong(song[2]);

nex.addEventListener('click', nextsong);
prev.addEventListener('click', prevsong);

const nextsong = () => {
    songindex = (songindex + 1) % song.length;
    loadsong(song[songindex]);
    playmusic();
}
const prevsong = () => {
    songindex = (songindex - 1 + song.length) % song.length;
    loadsong(song[songindex]);
    playmusic();
}

//like Button command ------------------------------------------------------------
function like(){
    if(btnvar1.style.color =="red"){
        btnvar1.style.color="white"
        alert("Don't you like me?")
    }
    else{
        btnvar1.style.color = "red"
        alert("Added into the playlist")
    }
}
//Range Button command---------------------------------------------------------------
if(music.play){
    setInterval(()=>{
        progress.value = music.currentTime;
    },500);
}

progress.onchange = function(){
    music.play();
    music.currentTime = progress.value;
    play.classList.add("fa-pause");
    pause.classList.remove("fa-play");
}