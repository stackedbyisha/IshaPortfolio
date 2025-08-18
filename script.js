// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

// Subtle reveal on scroll
const reveal = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.animate(
        [{opacity:0, transform:'translateY(12px)'},
         {opacity:1, transform:'translateY(0)'}],
        {duration:500, easing:'cubic-bezier(.2,.7,.2,1)', fill:'forwards'}
      );
      reveal.unobserve(entry.target);
    }
  });
},{threshold:.15});

document.querySelectorAll('.section .card, .section .pcard, .section .about, .section__title').forEach(el=>reveal.observe(el));
