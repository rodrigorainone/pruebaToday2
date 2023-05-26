const holaItems = document.querySelectorAll('.hola');

holaItems.forEach((holaItem) => {
  const img = holaItem.querySelector('img');
  const h1 = holaItem.querySelector('.displayh1');

  img.addEventListener('mouseenter', () => {
    h1.style.display = 'block';
  });

  img.addEventListener('mouseleave', () => {
    h1.style.display = 'none';
  });
  
});

