$(document).ready(function () {


    (function ($) {
  
      $('.carousel-chic').owlCarousel({
  
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
  
      $('.carousel-chic-galeria').owlCarousel({
  
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
  
      $('.carousel-chic-regalos').owlCarousel({
  
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