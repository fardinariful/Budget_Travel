

const allbtn=document.getElementsByClassName("all-btn");
let count=0;

for(const btn of allbtn){
    btn.addEventListener("click",function(e){
        count=count+1;

        const placeName=e.target.parentNode.childNodes[1].innerText;
        const cost=e.target.parentNode.childNodes[3].childNodes[1].innerText

       const selectedContainer=document.getElementById("selected-place-container");
    //    selectedContainer.style.display = "flex";
    //    selectedContainer.style.flexDirection="row";

       const li=document.createElement("li");
       li.style.display="flex";
       li.style.flexDirection="row";
       const p=document.createElement("p");
       const p2=document.createElement("p2");
       p.innerText=placeName;
       p2.innerText=cost;

       li.appendChild(p);
       li.appendChild(p2);
       selectedContainer.appendChild(li);
       

        setInnerText("cart_count",count);
        
})
}

function setInnerText(id,value){
    document.getElementById(id).innerText=value;

}




