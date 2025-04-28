document.addEventListener("DOMContentLoaded", function() {
    const text1 = "This website is created by Bahodirova Sarvinoz.";
    const text2 = "Here you will find information about me, my hobbies, and my collections.";
    const speed = 50;
  
    function typeText(elementId, text, callback) {
      let i = 0;
      function typing() {
        if (i < text.length) {
          document.getElementById(elementId).innerHTML += text.charAt(i);
          i++;
          setTimeout(typing, speed);
        } else {
          if (callback) callback();
        }
      }
      typing();
    }
  
    typeText("text1", text1, function() {
      setTimeout(function() {
        typeText("text2", text2);
      }, 500); 
    });
  });  
