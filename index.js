const pages = document.querySelectorAll(".page");
const translateAmount = 100; 
const book = document.getElementsByClassName("container-hand-book")[0];
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
let translate = true;

slide = (direction) => {

    direction === "next" ? translate -= translateAmount : translate += translateAmount;

    pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
    );
    
}

addEventListener("mousemove", (e) => { 
    mouseY = e.pageY;
    translateY = 'translateY(' + mouseY + 'px)';

    if (translate && mouseY + book.getBoundingClientRect().height/2 < viewportHeight/2+400) {
        book.style.transform = translateY;
    } else {
        translate = false
    }
    
})

$('#magazine').turn({gradients: true, acceleration: true});