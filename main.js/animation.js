const port = document.querySelector("#portfolio");


const tl = new TimelineMax();

// tl.fromTo(variable, duration in second, {what to do first},{what to do next, ease: power2.easeInOut})

tl.fromTo(port,1,{x:"100%" },{x:"0%",ease: power2.easeInOut});