const navToggle = document.getElementById('nav-toogle')


if (navToggle) {
    navToggle.addEventListener('click', () => {

        var showMenu = document.createElement("div")
        showMenu.innerHTML = `
        
        <ul class="">
             <li><a href="#home">Home</a></li>
             <li><a href="#about">About</a></li>
             <li><a href="#work">Work</a></li>
             <li><a href="#contact">Contact</a></li>
        </ul>   `

        showMenu.id = "show-menu"
        body = document.getElementsByTagName('body')[0];
        body.appendChild(showMenu)

        showMenu.addEventListener('click', () => {
            showMenu.remove();
        })
    })
}

