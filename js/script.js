const botonMenu = document.getElementById('botonMenu');
const navPrincipal = document.getElementById('navPrincipal');

botonMenu.addEventListener('click', () => {
  const abierto = navPrincipal.classList.toggle('nav--abierto');
  botonMenu.setAttribute('aria-expanded', abierto);
});

document.querySelectorAll('.nav__enlace').forEach((enlace) => {
  enlace.addEventListener('click', () => {
    navPrincipal.classList.remove('nav--abierto');
    botonMenu.setAttribute('aria-expanded', 'false');
  });
});
