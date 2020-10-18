let mobile = document.getElementById('bars');
let bet = document.getElementById('navigation');

mobile.onclick = function(){
      console.log(bet)
    
        if(bet.style.display == "block"){
         bet.style.display = "none";
        }
        else{
         bet.style.display = "block";
        }
        console.log(bet.style.display)
    

}

