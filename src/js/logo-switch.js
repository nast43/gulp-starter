// ==== Logo color switch b/w ================================
function logoSwitch () {
    $('.altLogo').each(function() {
      $(this).css('top',
        $('.startLogo').offset().top -  $(this).closest('.row').offset().top
      );
    });
  }  

  $(document).scroll(function() {logoSwitch();});
  
  logoSwitch();