const bodyRef = document.querySelector('body');
const themeControlRef = document.querySelector('#theme-switch-toggle');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const handleClick = () => {
    localStorage.setItem('themeDarkNow', themeControlRef.checked);
    localStorage.setItem('theme', bodyRef.className);
};
const addTheme = () => {
    if(themeControlRef.checked) {
    bodyRef.classList.remove(Theme.LIGHT)
    bodyRef.classList.add(Theme.DARK)
    } else {
    bodyRef.classList.remove(Theme.DARK)
    bodyRef.classList.add(Theme.LIGHT)    
    }
    handleClick();
}

const firstTheme = () => {
    let darkTheme = JSON.parse(localStorage.getItem('themeDarkNow'))
    if (darkTheme) {
        themeControlRef.checked = true;
        return Theme.DARK
    } else {
        return Theme.LIGHT
    }
}

bodyRef.classList.add(firstTheme())
themeControlRef.addEventListener('click', addTheme)
