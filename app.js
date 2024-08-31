// function handleselect(){
//     console.log("Boss select korsi");
// }

const allbtn=document.getElementsByClassName("all-btn");
let count=0;

for(const btn of allbtn){
    btn.addEventListener("click",function(e){
        count=count+1;
        document.getElementById('cart_count').innerText=count;
        
})
}




