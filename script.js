
/*------show menu-----*/
const showMenu=(toggleId, navId)=>{
    const toggle =document.getElementById(toggleId),
     nav=document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

 /*-----remove menu-----*/
 const navlink=document.querySelectorAll('.nav_link')

 function linkaction(){
     const navmenu=document.getElementById('nav-menu')
     navmenu.classList.remove('show')
 }

navlink.forEach(n => n.addEventListener('click',linkaction))



/*typing animation script*/
var typed=new Typed(".typing-1",{
    strings:["Learner","Coder","Web Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home_title', {})
sr.reveal('.home_scroll', {delay: 200})
sr.reveal('.home_img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about_img', {delay: 500})
sr.reveal('.about_subtitle', {delay: 300})
sr.reveal('.about_profession', {delay: 400})
sr.reveal('.about_text', {delay: 500})
sr.reveal('.about_social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle', {})
sr.reveal('.skills_name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills_img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio_img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact_subtitle', {})
sr.reveal('.contact_text', {interval: 200})
sr.reveal('.contact_input', {delay: 400})
sr.reveal('.contact_button', {delay: 600})

