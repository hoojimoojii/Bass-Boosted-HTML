const pages = document.querySelectorAll(".page");
const book = document.getElementsByClassName("container-hand-book")[0];
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
let translate = true;

slide = (direction) => {

    direction === "next" ? translate -= 100 : translate += 100;

    pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
    );
    
}

addEventListener("mousemove", (e) => { 
    mouseY = e.pageY;
    translateY = 'translateY(' + (mouseY+500) + 'px)';

    if (translate && mouseY + book.getBoundingClientRect().height/2 <= viewportHeight/2+500) {
        book.style.transform = translateY;
    } else {
        book.style.transform = 'translateY(' + (viewportHeight/2+1000-book.getBoundingClientRect().height/2) + 'px)';
        translate = false
    }
    
})

$('#magazine').turn({gradients: true, acceleration: true});