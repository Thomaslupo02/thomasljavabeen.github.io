$(document).ready(function(){
    //Call menu button to appear on page load.
    $(".menu-button").click(function () {
        $(".menu").toggleClass("open");
      });

      //Function for text fade-in
      function fadeInOnScroll() {
        $('.fade-in').each(function () {
          var elementTop = $(this).offset().top;
          var windowHeight = $(window).height();
          if (elementTop < windowHeight) {
            $(this).css('opacity', 1);
          }
        });
      }
      // Call the function on page load
      fadeInOnScroll();
      // Call the function on scroll
      $(window).scroll(function () {
        fadeInOnScroll();
      });
      
      //Function to fade in Button after loading page
      $(function(){    
        setTimeout(function(){ 
            $('.learn-more-btn').fadeIn();
        }, 1000);
    });

    //Function to adjust text size based on screen changes
    adjustTextSize();

  // Call adjustTextSize() whenever the window is resized
  $(window).resize(function () {
    adjustTextSize();
  });

  function adjustTextSize() {
    // Get the screen width
    var screenWidth = $(window).width();

    // Adjust the font size based on the screen width
    var fontSize = 4000 / screenWidth; 
    // Set the font size dynamically
    $('#responsive-text').css('font-size', fontSize + 'em');
    
    }

    //Function to adjust button size when screen is resized
    resizeButton();

  // Call resizeButton() whenever the window is resized
  $(window).resize(function () {
    resizeButton();
  });

    function resizeButton() {
  // Get the screen width
  var screenWidth = $(window).width();

  // Adjust the button size based on the screen width
  var buttonSize = 2000/screenWidth 
  // Set the button size dynamically
  $('#resizable-button').css('font-size', buttonSize + 'em');
    }

    //Accordion Script
    $('.accordion-header').click(function() {
      // Toggle the visibility of the content
      $(this).next('.accordion-content').slideToggle();
      
      // Collapse other sections
      $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
    });

});


