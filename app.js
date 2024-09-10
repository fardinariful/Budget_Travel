const allbtn=document.getElementsByClassName("all-btn");
let count=0;

 for(const btn of allbtn){
    btn.addEventListener("click",function(e){
      count=count+1;
      const placeName=e.target.parentNode.childNodes[1].innerText;
      const cost=e.target.parentNode.childNodes[3].childNodes[1].innerText;

      const selectedContainer=document.getElementById("selected-place-container");
      const li=document.createElement("li");

      const p1=document.createElement("p");
      p1.innerText=placeName;
      const p2=document.createElement("p");
      p2.innerText=cost;

      li.appendChild(p1);
      li.appendChild(p2);
      selectedContainer.appendChild(li);

      //console.log(document.getElementById("Total_costs").innerText);
      const total_cost=document.getElementById("Total_costs").innerText;
      const convertedtotalcost1=parseInt(total_cost);
      const sum1=convertedtotalcost1+parseInt(cost);


      const grand_cost=document.getElementById("grand-total").innerText;
      const convertedtotalcost2=parseInt(grand_cost);
      const sum2=convertedtotalcost2+parseInt(cost);
      



      setInnertext("grand-total",sum2);
      setInnertext("Total_costs",sum1);
      setInnertext("cart_count",count);
        
    })
 }

 function setInnertext(id,value){
   document.getElementById(id).innerText=value;
 }

































// const allbtn=document.getElementsByClassName("all-btn");
// let count=0;
// for(const btn of allbtn){
//     btn.addEventListener("click",function(e){
//        count=count+1;
      
//     const placeName=e.target.parentNode.childNodes[1].innerText;
//     const cost = e.target.parentNode.childNodes[3].childNodes[1].innerText;

//     const selectedContainer=document.getElementById("selected-place-container");
//     const li=document.createElement("li");
//     li.style.display="flex";
//     li.style.flexDirection="row";
//     li.style.gap="10px";
//     const p=document.createElement("p");
//     p.innerText=placeName;
//     const p2=document.createElement("p2");
//     p2.innerText=cost;
//     li.appendChild(p);
//     li.appendChild(p2);
//     selectedContainer.appendChild(li);

//     const total_cost=document.getElementById("Total_costs").innerText;
//     const convertedtotalcost1=parseInt(total_cost);
//     const sum1=convertedtotalcost1+parseInt(cost);
    
    

//     const grand_cost=document.getElementById("grand_total").innerText;
//     const convertedtotalcost2=parseInt(grand_cost);
//     const sum2 = convertedtotalcost2+parseInt(cost);

//     setInnertext("Total_costs", sum1);

//     setInnertext("grand_total", sum2);

//     setInnertext("cart_count",count);

//     });

// }

// function setInnertext(id,value){
//     document.getElementById(id).innerText=value;

// }






