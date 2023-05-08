const headings = document.querySelectorAll('.display-4');

function underlineOnScroll() {
  const windowTop = window.pageYOffset + window.innerHeight;

  headings.forEach((heading) => {
    if (windowTop > heading.offsetTop + heading.offsetHeight / 2) {
      heading.classList.add('visible');
    } else {
      heading.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', underlineOnScroll);



