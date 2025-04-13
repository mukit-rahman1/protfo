
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.button');
    button.addEventListener('click', function() {
      document.querySelector('.cover-t').classList.toggle('open');
      document.querySelector('.cover-b').classList.toggle('open');
    });
});
