
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
});
