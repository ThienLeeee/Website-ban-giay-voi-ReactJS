let slideIndex = 0;
         showSlides();
         function showSlides() {
             const slides = document.getElementsByClassName("slide-img");
             slideIndex++;
             if (slideIndex > slides.length) {
                 slideIndex = 1
             }
             for (let i = 0; i < slides.length; i++) {
                 slides[i].style.display = "none";
             }
             slides[slideIndex - 1].style.display = "block";
             setTimeout(showSlides, 3000);
         }

         function plusSlides(n) {
             showSlides(slideIndex += n);
         }

         function currentSlide(n) {
             showSlides(slideIndex = n);
         }