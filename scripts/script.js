$(document).ready(function() {
   $('.header__burger').click(function(event) {
      $('.header__burger,.header-menu').toggleClass('active');
      $('.body').toggleClass('block');
   })

}) 