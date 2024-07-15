const navToggle = document.getElementById('nav-toogle')

if (navToggle) {
    navToggle.addEventListener('click', () => {

        var showMenu = document.createElement("div")
        showMenu.innerHTML = `
        
        <ul class="">
             <li><i class="fa-solid fa-house"></i><a href="#home">Home</a></li>
             <li><i class="fa-regular fa-address-card"></i><a href="#about">About</a></li>
             <li><i class="fa-solid fa-briefcase"></i><a href="#work">Work</a></li>
             <li><i class="fa-regular fa-address-book"></i><a href="#contact">Contact</a></li>
        </ul>   `

        showMenu.id = "show-menu"
        body = document.getElementsByTagName('body')[0];
        body.appendChild(showMenu)

        showMenu.addEventListener('click', () => {
            showMenu.remove();
        })
    })
}


function sendMail(event) {
    event.preventDefault();
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_yn89u34";
    const templateID = "template_1vd7xc6";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }