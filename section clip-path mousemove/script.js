let root = document.documentElement;
root.addEventListener('mousemove', event =>{
	root.style.setProperty('--x', event.clientX + "px");
	root.style.setProperty('--y', event.clientY + "px");
})