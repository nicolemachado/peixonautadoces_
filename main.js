/* toggle abre e fecha o menu ao clicar no icone, manu e x*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/* ao clicar em icone do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}

/* scrollreveal mostra elementos quando der scroll na pagina*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true,
})

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .text, #about .image
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  footer .brand, footer .social
  `, 
  {interval:100})

  /* menu ativo conforme seção na pagina*/ 

  /*const sections = document.querySelectorAll('section[id]')
    function activateMenuAtCurrentSection(){

      const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
      
      for ( const section of sections ){
        const sectionTop = section.offsetTop
        const sectionHeigh =  section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeigh

        if(checkpointStart && checkpointEnd) {
          document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.add('active')
        } else {
          document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.remove('active')
        }
      }
    }
  

  /*when scroll*/

  /*window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
  })*/