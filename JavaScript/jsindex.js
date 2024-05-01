
 /* Só um horario no meu html com setinterval mudando horas, minutos e segundos, ele vai atualizar os 3 a cada segundo,
 mas como só o segundo muda a cada segundo(obviamente), só ele será */


 let day = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'];

 setInterval(function (){
  let date = new Date();
  let x = date.getDay()
  document.getElementById('clockDisplay').textContent = day[x]+ ' ' + date.getHours() +':'+('0'+ date.getMinutes()).slice(-2) +':'+ ('0' + date.getSeconds()).slice(-2);

 }, 1000);
  

 /*could be used in something later
 /*------------------Slide in js--------------

 let slider = document.getElementById('slider');

 let outerSliderPlaceHolder = document.querySelector(".outer_slider_in");
 /*

 ***Use as example: https://stackoverflow.com/questions/16989585/css-3-slide-in-from-left-transition
 
 


 

 slider.addEventListener('mouseleave', function() {
     
     if(slider.classList.contains('slide-in')){
      slider.setAttribute('class','slide-out');
      
     }
    
 });

 

 /*---------------------Click again to show personal info btn 
 outerSliderPlaceHolder.addEventListener('mouseenter',function(){
  if(slider.classList.contains('slide-out') && 
  (outerSliderPlaceHolder.classList.contains('outer_slider_in')))
  {
    slider.setAttribute('class','slide-in');
  
   }

   
 });
 /*------------------*/