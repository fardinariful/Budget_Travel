

const allbtn=document.getElementsByClassName("all-btn");
let count=0;

for(const btn of allbtn){
    btn.addEventListener("click",function(e){
        count=count+1;

        const placeName=e.target.parentNode.childNodes[1].innerText;
        const cost=e.target.parentNode.childNodes[3].childNodes[1].innerText

       const selectedContainer=document.getElementById("selected-place-container");
 

       const li=document.createElement("li");
       li.style.display="flex";
       li.style.flexDirection="row";
       li.style.gap="10px";
       const p=document.createElement("p");
       const p2=document.createElement("p2");
       p.innerText=placeName;
       p2.innerText=cost;

       li.appendChild(p);
       li.appendChild(p2);
       selectedContainer.appendChild(li);
       
       const total_cost=document.getElementById("Total_costs").innerText;
       const convertedtotalcost=parseInt(total_cost);
       document.getElementById("Total_costs").innerText=convertedtotalcost+parseInt(cost);



        setInnerText("cart_count",count);
        
})
}



function setInnerText(id,value){
    document.getElementById(id).innerText=value;

}




