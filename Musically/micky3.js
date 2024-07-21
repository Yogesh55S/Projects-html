//variable declaration-----------------------------------------
const progress = document.getElementById("progress");
const song = document.querySelector("audio");
const icon = document.getElementById("icon");
const img = document.querySelector("img");
var btnvar1 = document.getElementById("btn1");

//Play and pause ----------------------------------------------

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
//play-------------------------------------------
function playpause(){
    if(icon.classList.contains("fa-pause")){
        song.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
        img.classList.remove("anime");
    }else{
        song.play();
        icon.classList.add("fa-pause");
        icon.classList.remove("fa-play");
        img.classList.add("anime");
        
    }
}

//range-bar-----------------------------------------------------
if(song.play){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    icon.classList.add("fa-pause");
    icon.classList.remove("fa-play");   
}

//Variable-declaration-Next-or-Prev------------------------------
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = documnet.getElementById("next");
//Song-Mapping-------------------------------------------

const songs=[{
    name :"siya",
    title : "ram Siya ram",
    artist: "Sachet Tandon"
},{
    name :"song3",
    title : "10 Min",
    artist: "Sippy Gill"
},{
    name :"song2",
    title : "Demon Slayer",
    artist: "XyZ"
},{
    name :"song4",
    title : "Demon Slayer",
    artist: "xYz"
}
]
//Next-Prev------------------------------------------------
next.addEventListener('click',nextsong);
prev.addEventListener('click',prevsong);
songindex=0;

const nextsong =() =>{
   songindex = (songindex -1) % songs.length;
    loadsong(songs[songindex]);
};

const prevsong = () => {
    songindex = (songindex -1 + songs.length) % songs.length;
    loadsong(songs[songindex]);
}

//Load-Music-----------------------------------------------
loadsong(songs[1]);

const loadsong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    song.src = "Musically/" + songs.name + ".mp3";
    //song.src='Musically/${songs.name}.mp3';
    img.src="Musically/" + songs.name + ".jpg";
};