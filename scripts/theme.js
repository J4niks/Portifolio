const body = document.querySelector('body');
const colorModeImg = document.getElementById('colorModeImg');

function toggleColorMode() {
    const isLightMode = body.classList.contains('lightMode');
    const newTheme = !isLightMode;

    body.classList.toggle('lightMode', newTheme);
    localStorage.setItem('theme', newTheme.toString());
    colorModeImg.setAttribute('src', `./assets/svg/${newTheme ? 'moon_ico' : 'sun_ico'}.svg`);
}

function initializeColorMode() {
    const currentMode = localStorage.getItem('theme');
    const isLightMode = currentMode === 'true';

    body.classList.toggle('lightMode', isLightMode);
}

initializeColorMode();