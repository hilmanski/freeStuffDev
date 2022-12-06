// toogleMenu: open_or_close_sidebar
const toogleMenu = (parameter1, parameter2) => {
    const toggleMenu1 = (parameter1) => {
        document.getElementById('toggleMenu').style.display = parameter1;
    };
    const toggleMenu2 = (parameter2) => {
        document.getElementById('hidden').className = parameter2;
    };
    toggleMenu1(parameter1); // block or none
    toggleMenu2(parameter2); // 'is-two-thirds maincontent' or ''
}
