const accordion = document.getElementsByClassName("contentBx")

for (i=0; i<accordion.length;i++){    
    accordion[i].addEventListener("click",function(e){      
      this.classList.toggle("active")               
    })                                            
}
