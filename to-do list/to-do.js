const input = document.getElementById("input-box");
const list = document.getElementById("list-container");

function addtask(){
  if(input.value === ''){
    alert("You must be write something ");
  }else{
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  savedata();
}

list.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("check");
    savedata();
  }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    savedata();
  }
},false);

function savedata(){
  localStorage.setItem("data",list.innerHTML);
}

function showlist(){
  list.innerHTML = localStorage.getItem("data");
}
showlist();