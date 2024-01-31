document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.faq-question').forEach((question, index) => {
      question.addEventListener('click', () => {
          // Assuming .faq-answer is a sibling of .faq-question
          let answer = question.nextElementSibling;
          let iconPlus = question.querySelector('.icon-plus');
          let iconMinus = question.querySelector('.icon-minus');
          
          // Toggle the visibility of the answer and the plus/minus icons
          if (answer && iconPlus && iconMinus) {
              answer.classList.toggle('hide');
              iconPlus.classList.toggle('hide');
              iconMinus.classList.toggle('hide');
          } else {
              // Log an error if the elements are not found
              console.error('Could not find the answer or icons for question:', question);
          }
      });
  });
});
