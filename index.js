const pages = document.querySelectorAll(".page");
const book = document.getElementsByClassName("container-hand-book")[0];
const hand = document.getElementsByClassName("container-hand-front")[0];
const collage = document.getElementById("collage");
const collage_caption = document.getElementById("collage-caption");
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
let translate = true;
let page = 0;

const collage_images = [
    "collage-photo1.png",
    "collage-photo2.png",
    "collage-photo3.png",
    "collage-photo4.png",
    "collage-photo5.png",
    "collage-photo6.png",
    "collage-photo7.png",
]
const collage_captions = [
    "Album cover of Everything is Alive ",
    "Music Video of Kisses",
    "Visualizer for The Slab",
    "Music Video of Sweetness and Light by Lush",
    "Album cover of Pygmalion",
    "Album cover of Slowdive",
    "Music Video of Sugar for the Pill",
]

history.scrollRestoration = 'manual';
var hand_height = hand.getBoundingClientRect().height
var book_height = book.getBoundingClientRect().height
var lim_height = viewportHeight - hand_height / 1.1

console.log((lim_height + 1000 - book_height/2))
book.style.transform = 'translateY(' + (lim_height + 1000 - book_height/2) + 'px)';
translate = false

slide = (direction) => {

    if(direction === "next") {
        page += 1
        pages.forEach(
            pages => (pages.style.transform = `translateX(-100%)`)
        );
    } else {
        page -= 1
        pages.forEach(
            pages => (pages.style.transform = `translateX(100%)`)
        );
    }

    if(page != 0) {
        translate = false
        book.style.display = "none"
        hand.style.display = "none"
        document.getElementsByClassName("container-hand-back")[0].style.display = "none"
        document.body.style.overflowX = "scroll"
    }
    
}

/*
addEventListener("mousemove", (e) => { 
    mouseY = e.pageY;
    translateY = 'translateY(' + (mouseY + 1000 - book_height / 2) + 'px)';

    if (translate && mouseY < lim_height) {
        book.style.transform = translateY;
    } else {
        book.style.transform = 'translateY(' + (lim_height + 1000 - book_height/2) + 'px)';
        translate = false
    }
})

addEventListener("touchmove", (e) => {
    mouseY = e.touches[0].pageY;
    translateY = 'translateY(' + (mouseY + 1000 - book_height / 2) + 'px)';

    if (translate && mouseY < lim_height) {
        book.style.transform = translateY;
    } else {
        book.style.transform = 'translateY(' + (lim_height + 1000 - book_height/2) + 'px)';
        translate = false
    }
})
*/

let i = 0

// Credit: https://www.youtube.com/watch?v=0QCx572QiyY NOT AN ORIGINAL IDEA
function placeImage(x, y) {
    const nextImage = collage_images[i]
    const img = document.createElement("img")
    img.setAttribute("src", "images/" + nextImage)
    img.setAttribute("class", "collage-image")
    img.style.left = x + "px"
    img.style.top = y + "px"

    collage.appendChild(img)
    collage_caption.textContent = collage_captions[i]

    i = i+1
    if (i >= collage_images.length) {
        i = 0
    }
}

collage.addEventListener("mousedown", function (event) {
    var offset = collage.getClientRects()[0]
    event.preventDefault()
    placeImage(event.clientX - offset.left, event.clientY - offset.top)
})

collage.addEventListener("touchstart", function (event) {
    var offset = collage.getClientRects()[0]
    event.preventDefault()
    placeImage(event.touches[0].clientX - offset.left, event.touches[0].clientY - offset.top)
})