let sections = document.querySelectorAll('sections');
let navlinks = document.querySelectorAll('header navbar a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header navbar a[herf*=' + id + ']').classList.add('active');
            });
        };
    });


    let header = document.querySelector('header');
    
    header.classList.toggle('sticky' , window.scrollY > 100);
};