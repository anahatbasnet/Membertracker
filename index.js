document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");
  const contentTargetBold = document.querySelector(".large-content .questions"); // target for question
  const contentTargetRegular = document.querySelector(
    ".large-content .answers"
  ); // target for answer

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Close all items first
      accordionButtons.forEach((otherButton) => {
        const otherItem = otherButton.parentElement;
        const otherDownIcon = otherButton.querySelector(".fa-chevron-down");
        const otherUpIcon = otherButton.querySelector(".fa-chevron-up");
        otherItem.classList.remove("active");
        otherDownIcon.style.display = "inline";
        otherUpIcon.style.display = "none";
        otherButton.classList.remove("active");
      });

      const accordionItem = button.parentElement;
      const content = accordionItem.querySelector(".accordion-content");
      const downIcon = button.querySelector(".fa-chevron-down");
      const upIcon = button.querySelector(".fa-chevron-up");

      // add 'active' class to the clicked button
      button.classList.add("active");

      // retrieve the question and answer
      const question = button.textContent.trim(); // text inside the button
      const answer = content.children[0].textContent; // text inside the p tag in accordion-content

      // copy the question and answer to the target div
      contentTargetBold.textContent = question;
      contentTargetRegular.textContent = answer;

      accordionItem.classList.add("active");
      downIcon.style.display = "none";
      upIcon.style.display = "inline";
    });
  });

  // Trigger the click event for the first button to open it by default
  if (accordionButtons.length > 0) {
    accordionButtons[0].click();
  }
});
