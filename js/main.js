const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
       
        navLinks.forEach(l => l.classList.remove('active'));

        link.classList.add('active');
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const targetId = link.getAttribute('href'); 
        const targetSection = document.querySelector(targetId); 
        const offsetTop = targetSection.offsetTop; 
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});



const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const currentPosition = window.scrollY + 200; 

    sections.forEach((section) => {
        const sectionTop = section.offsetTop; 
        const sectionHeight = section.offsetHeight;

        if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
            
            const currentSectionId = section.getAttribute('id');
           
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});


/* modail */
let btn = document.getElementById("button");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function(event) {
    let nom = document.getElementById('name').value;
    let email = document.getElementById('mail').value;
    if(nom !== '' &&
    email !== '' ) {
        event.preventDefault();
        let modal = document.getElementById("myModal");
        modal.style.display = "block";

        document.getElementById('name').removeAttribute('required');
        document.getElementById('mail').removeAttribute('required');



        document.getElementById('name').value = '';
        document.getElementById('mail').value = '';

    } 
}
 
span.onclick = function() {
    let modal = document.getElementById("myModal");   
    modal.style.display = "none";

    document.getElementById('name').setAttribute('required', '');
    document.getElementById('mail').setAttribute('required', '');
}

window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target === modal) {
    modal.style.display = "none";
}
}