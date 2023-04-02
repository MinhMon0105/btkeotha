 
    var slideitem = document.querySelectorAll('.item');
    var next = document.querySelector('.next');
    var prev = document.querySelector('.prev');
    var dots = document.querySelector("dot");
    var index = 0;
    var indexs = 1;
    next.addEventListener('click', function(){
        slideitem[index].classList.remove('active');
        index++;
        if (index==slideitem.length){
            index=0;
        }
        slideitem[index].classList.add('active'); 

    })
   prev.addEventListener('click', function(){
        slideitem[index].classList.remove('active');
        index--;
        if (index<0){
            index=slideitem.length - 1;
        }
        slideitem[index].classList.add('active'); 
   })
   dots.addEventListener('click', function(e){
    if (n > slideitem.length) {index = 1}
    if (n < 1) {index = slideitem.length}
    for (i = 0; i < slideitem.length; i++) {
        slideitem[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
   }
    



