document.addEventListener("DOMContentLoaded", function () {
    var slides = Array.from(document.querySelectorAll(".slide"));
    var contentText = document.querySelector("#contentText");
    var slideInfo = document.querySelector("#slideDescription"); 

    function updateSlideInfo(element) {
        var altText = element.alt;
        var position = element.getAttribute('position');
        slideInfo.innerHTML = `<strong>${altText}</strong> <br> ${position}`;
        contentText.textContent = element.dataset.content;

        // Re-apply the animation
        var contentContainer = document.getElementById("contentContainer");
        contentContainer.classList.remove("slideInEffect"); // remove first to ensure the animation can replay
        void contentContainer.offsetWidth; // this is a trick to force a reflow, so that the animation can restart
        contentContainer.classList.add("slideInEffect");
    }

    // Set initial content for the third slide
    updateSlideInfo(slides[2]);

    slides.forEach(function (slide) {
        slide.addEventListener("click", function () {
            slides.forEach(function (otherSlide) {
                otherSlide.classList.remove("selected");
            });

            slide.classList.add("selected");
            updateSlideInfo(slide);
        });
    });
});
