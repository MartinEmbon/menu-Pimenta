const accordion = document.getElementsByClassName("contentBx")

/*
window.addEventListener('load', function(){
  accordion[0].classList.toggle("active")
});
const removeActiveClass = () => {  
  for (const activeElement of accordion) {
    activeElement.classList.remove('active');    
  }
};
*/



for (i=0; i<accordion.length;i++){    
    accordion[i].addEventListener("click",function(e){      
      //removeActiveClass()
      this.classList.toggle("active")               
    })                                            
}
