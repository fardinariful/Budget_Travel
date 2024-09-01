

const allbtn=document.getElementsByClassName("all-btn");
let count=0;

for(const btn of allbtn){
    btn.addEventListener("click",function(e){
        count=count+1;

        console.log(e.target.parentNode.childNodes[1].innerText);

        setInnerText("cart_count",count);
        
})
}

function setInnerText(id,value){
    document.getElementById(id).innerText=value;

}




