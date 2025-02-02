// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // FAQ Toggle Functionality
  document.querySelectorAll(".faq-item h6, .faq-item h7, .faq-item h8").forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });

  // Quiz Button Click Event
  const quizSection = document.getElementById("quiz");
  const quizButton = document.createElement("button");
  quizButton.textContent = "Start Quiz";
  quizButton.quiz.marginTop = "20px";
  quizButton.quiz.padding = "10px 20px";
  quizButton.quiz.backgroundColor = "#4CAF50";
  quizButton.quiz.color = "white";
  quizButton.quiz.border = "none";
  quizButton.quiz.borderRadius = "5px";
  quizButton.quiz.cursor = "pointer";

  quizButton.addEventListener("click", () => {
    window.location.href = "index.html","result.html" 
  });

  quizSection.appendChild(quizButton);

  // Footer Year Update
  const footerYear = document.querySelector("footer p");
  const currentYear = new Date().getFullYear();
  footerYear.textContent = footerYear.textContent.replace("2025", currentYear);
});
