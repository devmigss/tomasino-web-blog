const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', () => {
  console.log('Hamburger clicked!');
  const isOpen = menu.classList.contains('max-h-0');
  console.log('Menu is currently:', isOpen ? 'closed' : 'open');

  if (isOpen) {
    console.log('Opening menu...');
    menu.classList.remove('max-h-0');
    menu.classList.add('max-h-48');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    console.log('Closing menu...');
    menu.classList.remove('max-h-48');
    menu.classList.add('max-h-0');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
});