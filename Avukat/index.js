
window.addEventListener('scroll', function() {
  const secondContainer = document.getElementById('secondContainer');
  if (window.scrollY > 60) {
      secondContainer.style.top = '0px';
      secondContainer.style.position = 'fixed';
  } else {
      secondContainer.style.top = '60px';
      secondContainer.style.position = 'absolute';
  }
});