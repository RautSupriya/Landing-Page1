let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}
//mousemove home img
document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/150
        const y = (window.innerWidth - e.pageY*speed)/150
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

gsap.from('.logo', {opacity: 0, duration: 2, delay: 2, y:10})
gsap.from('.navbar .nav_item', {opacity: 0, duration: 2, delay: 2.1, y:30, stagger: 0.2})

gsap.from('.title', {opacity: 0, duration: 2, delay: 1.6, y:30})
gsap.from('.description', {opacity: 0, duration: 2, delay: 1.8, y:30})
gsap.from('.btn', {opacity: 0, duration: 2, delay: 2.1, y:30})
gsap.from('.image', {opacity: 0, duration: 2, delay: 2.6, y:30})