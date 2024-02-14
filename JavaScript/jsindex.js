



 /*usado para o "sobre mim btn"*/ 
 window.onclick = function(event){
  /*variaveis para serem usadas na div "sobre mim"; "expectativa" e " porque estou me candidatando"
    onde quando ela for apertada os outros btn serao irao "toggle" alternar
    para uma classe onde o display será none, assim será para todos os outros btns*/
  

  /*Btns var*/  
  var My_about_bebtn = document.getElementById("about-mebtn");   
  var why_imbtn = document.getElementById("why-imbtn"); 
  var expectin_btn = document.getElementById("expecttn");
  

  /*div containers var*/
  var why_im_apply = document.getElementById("why-im-apply"); 
  var expecttn = document.getElementById("expectations"); 
  var about_me_content_out =document.getElementById("about-me");

  /*span "x" vars*/
  var span_aboutmepopup = document.getElementById("closeidaboutme");
  var span_whyimapplypopup = document.getElementById("closeid-why");
  var span_expecctin = document.getElementById("closeid-expectinn");


  /*popup new vars*/
  var why_im_innerOuter_window = document.getElementById("why-im-apply_popupid");
  var aboutme_innerOuter_window = document.getElementById("about_me_popupid");
  var expectin_innerOuter_window =document.getElementById("expectin-popupid");


  /*container all var*/
  var my_window_outer= document.getElementById("outer_window_popupId");//minha nova janela que abre ao ser pressionada
  
   
  /*Pressed the btn others btns will disapear // quando qualquer um dos botoes forem apertados, os outros restantes desaparecem*/  
  if(event.target == My_about_bebtn){
    about_me_content_out.style.display = "inline-block";
    my_window_outer.style.display = "block";
    why_im_innerOuter_window.style.display = "none";
    span_whyimapplypopup.style.display = "none";
    span_aboutmepopup.style.display="block";
    span_expecctin.style.display = "none";
    aboutme_innerOuter_window.style.display = "block";
    expectin_innerOuter_window .style.display = "none";
    why_im_apply.style.visibility = "hidden";
      expecttn. style.visibility = "hidden"; 
  }

  if(event.target == why_imbtn){
      
      my_window_outer.style.display = "block";
      aboutme_innerOuter_window.style.display = "none";
      expectin_innerOuter_window.style.display = "none";
      why_im_innerOuter_window.style.display = "block";
      span_aboutmepopup.style.display="none";
      span_whyimapplypopup.style.display = "block";
      span_expecctin.style.display = "none";
      why_im_apply.style.display = "inline-block";
      about_me_content_out.style.visibility = "hidden";
      expecttn. style.visibility = "hidden"; 
      
      
  }

  if(event.target == expectin_btn){
    my_window_outer.style.display = "block";
    expecttn.style.display = "inline-block";
    why_im_innerOuter_window.style.display = "none";
    span_whyimapplypopup.style.display = "none";
    aboutme_innerOuter_window.style.display = "none";
    span_aboutmepopup.style.display="none";
    span_expecctin.style.display = "block";
    expectin_innerOuter_window .style.display = "block";
    about_me_content_out.style.visibility = "hidden";
    why_im_apply. style.visibility = "hidden";  

  }


  /*-------------------*/
    
  /*to close the new window poped up, press the "x" // para fechar a nova janela só apertar o x e assim os btns que sumiram voltam a aparecer*/
  if(event.target == span_aboutmepopup){
    my_window_outer.style.display = "none";
    expecttn.style.display = "inline-block";
    why_im_apply.style.display = "inline-block";
    
    why_im_apply.style.visibility = "visible";
    expecttn.style.visibility = "visible";
  }
   
  

  //here, as differente from most left icon, we will use visibility just to keep my btn in place // aqui vai ser diferente do usado no "x" acima, 
  if(event.target == span_whyimapplypopup){ //onde voltamos as propriedades para inline block, aqui será só uma questao de visibilidade para manter meu btn(mais a esquerda) no lugar
    my_window_outer.style.display = "none";
    expecttn.style.display = "inline-block";
    why_im_apply.style.display = "inline-block";
    about_me_content_out.style.visibility =  "visible";
   
    expecttn.style.visibility = "visible";
  }
  

  if(event.target == span_expecctin){ //onde voltamos as propriedades para inline block, aqui será só uma questao de visibilidade para manter meu btn(mais a esquerda) no lugar
    my_window_outer.style.display = "none";
    expecttn.style.display = "inline-block";
    why_im_apply.style.display = "inline-block";
    about_me_content_out.style.visibility =  "visible";
    why_im_apply.style.visibility = "visible";
  }

  /*Not only the "x" will work to go out of new window // apenas clicar fora da nova janela que abre ja serve para sair dela*/
  if(event.target == my_window_outer){ 
    my_window_outer.style.display = "none";
    why_im_apply.style.display = "inline-block";
    expecttn.style.display = "inline-block";
    about_me_content_out.style.display = "inline-block";
    about_me_content_out.style.visibility =  "visible";
    why_im_apply.style.visibility = "visible";
    expecttn.style.visibility = "visible";
  }



     
 }

 /* Só um horario no meu html com setinterval mudando horas, minutos e segundos, ele vai atualizar os 3 a cada segundo,
 mas como só o segundo muda a cada segundo(obviamente), só ele será */


 let day = ['Segunda','Terça','Quarta','Quinta','Sexta','Sabado','Domingo'];

 setInterval(function (){
  let date = new Date();
  let x = date.getDay()
  document.getElementById('clockDisplay').textContent = day[x-1] + ' ' + date.getHours() +':'+('0'+ date.getMinutes()).slice(-2) +':'+ ('0' + date.getSeconds()).slice(-2);

 }, 1000);
  


 /*------------------Slide in js--------------*/

 let slider = document.getElementById('slider');

 let outerSliderPlaceHolder = document.querySelector(".outer_slider_in");
 /*

 ***Use as example: https://stackoverflow.com/questions/16989585/css-3-slide-in-from-left-transition
 
 */


 
 slider.addEventListener('mouseleave', function() {
     
     if(slider.classList.contains('slide-in')){
      slider.setAttribute('class','slide-out');
      
     }
    
 });

 

 /*---------------------Click again to show personal info btn */
 outerSliderPlaceHolder.addEventListener('mouseenter',function(){
  if(slider.classList.contains('slide-out') && 
  (outerSliderPlaceHolder.classList.contains('outer_slider_in')))
  {
    slider.setAttribute('class','slide-in');
  
   }
 });