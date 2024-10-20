let sliderContainer = document.querySelector(".slider-container");
let slideItems = Array.from(document.querySelectorAll(".slide-item"));  // Convert NodeList to Array
let slideInterval = setInterval(nextSlide, 3000);  // Change to the next slide every 3 seconds

function nextSlide() {
  // take the first slide and append it to the end of the slider container
  const firstSlide = slideItems.shift();
  sliderContainer.style.transform = `translateX(-${firstSlide.offsetWidth}px)`;
  
  setTimeout(() => {
    sliderContainer.style.transition = 'none';
    sliderContainer.appendChild(firstSlide);
    sliderContainer.style.transform = `translateX(0)`;
    slideItems.push(firstSlide);
    // force a reflow
    sliderContainer.offsetHeight;
    sliderContainer.style.transition = 'transform 0.5s ease-in-out';
  }, 500); // Matches the duration of the transition in the CSS
}

nextSlide(); // Rotate the first slide to the end of the list
