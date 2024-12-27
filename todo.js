let inputes=document.getElementById("inp");
let text= document.querySelector(".text");

function Add(){
    if (inputes.value == ""){
        alert("please Enter Task")
    }else{
        let newEle= document.createElement("ul");
        newEle.innerHTML=`${inputes.value} <span class="material-symbols-outlined">delete</span>`;
        text.appendChild(newEle);
        inputes.value="";
        newEle.querySelector(".material-symbols-outlined").addEventListener("click", remove);
        function remove(){
            newEle.remove()
        }
      }
}