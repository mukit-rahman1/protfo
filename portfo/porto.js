
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.button');
    button.addEventListener('click', function() {
      document.querySelector('.cover-t').classList.toggle('open');
      document.querySelector('.cover-b').classList.toggle('open');
    });


    const content = document.querySelector('.content');

    content.addEventListener('wheel', function(e) {
      e.preventDefault(); // no more vertical scroll

      content.scrollLeft += e.deltaY; // horizontal scroll
    });


    // jump bar
    const buttons = document.querySelectorAll('.jump-bar button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const target = document.querySelector("." + button.dataset.target);
        if(!target) return;
        target.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: 'nearest'
        });
      });
    });
});
