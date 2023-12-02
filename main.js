const navMenu = document.querySelector('#nav-menu'),
    menuIcon = document.querySelector('.bx-menu'),
    xIcon = document.querySelector('.bx-x');
    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    xIcon.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });

    const moon = document.querySelector('.bxs-moon'),
     body = document.body,
     header = document.querySelector('header');
    //when user clicks on icon moon the  background changes to black all text white and change icon to sun
    moon.addEventListener('click', () => {
        body.classList.toggle('dark');
        moon.classList.toggle('dark');
        moon.classList.toggle('bxs-sun');
        header.classList.toggle('dark');
    });