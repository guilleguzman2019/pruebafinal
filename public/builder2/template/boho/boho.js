$(document).ready(function () {


    (function ($) {
  
      $('.carousel-boho').owlCarousel({
  
        navigation : true, // Show next and prev buttons
   
        slideSpeed : 300,
        paginationSpeed : 400,
   
        items : 3, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : 1,
        loop: false
   
      });
  
      $('.carousel-boho-galeria').owlCarousel({
  
        navigation : true, // Show next and prev buttons
   
        slideSpeed : 300,
        paginationSpeed : 400,
   
        items : 3, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : 1,
        loop: false
   
      });
  
      $('.carousel-boho-regalos').owlCarousel({
  
        navigation : true, // Show next and prev buttons
   
        slideSpeed : 300,
        paginationSpeed : 400,
   
        items : 3, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : 1,
        loop: false
   
      });
  
  
  
    })(jQuery);
  
  });
  
  
  
    window.onload = function() {
      const hijo = document.querySelector('.tituloParejas');
      const hijo2 = document.querySelector('.titulo');		
      const padre = document.querySelector('.portada');
  
      hijo.addEventListener('mouseenter', function() {
        this.style.border = '3px solid cyan';
        padre.style.border = '';
            
      });
      
      hijo.addEventListener('mouseleave', function() {  
        this.style.border = '';
        padre.style.border = '3px solid cyan';
      });
      
      hijo2.addEventListener('mouseenter', function() {
        this.style.border = '3px solid cyan';
        padre.style.border = '';
            
      });
      
      hijo2.addEventListener('mouseleave', function() {  
        this.style.border = '';
        padre.style.border = '3px solid cyan';
      });	
      
      padre.addEventListener('mouseenter', function() {
        this.style.border = '3px solid cyan';
            
      });
      
      padre.addEventListener('mouseleave', function() {  
        this.style.border = '';
      });		
    };
  
  
    const view = document.getElementById('portada');
  
      const btnportada = document.getElementById("my-button");
  
      view.addEventListener('click', (event) => {
  
        if(event.target.className === 'tituloParejas transparente' || event.target.className === 'titulo transparente'){
  
          return 
        }
  
  
        if (btnportada.style.display === "none") {
  
          btnportada.style.display = "block";
  
          console.log(1);
  
        } else {
  
          btnportada.style.display = "none";
  
          console.log(2);
        }
  
      });
  
  
  
      $(document).ready(function() {
  
    
  
        $('#yang').click(function() {
        
            
          $('.regalos').show();           
            
          $('.datosbancarios').hide(); 
            
        });
        
        $('#yin').click(function() {
        
            
          $('.regalos').hide();           
            
          $('.datosbancarios').show(); 
            
        });
        
        });
  


        function textAreaAdjust(element) {
          element.style.height = "1px";
          element.style.height = (20+element.scrollHeight)+"px";
          }
  
  
       
  
  
  
  
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  