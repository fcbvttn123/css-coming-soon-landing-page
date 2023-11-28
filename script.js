let headerDOM = document.querySelector("header")
let erinLink = document.querySelector("main .left-top .erin-link")
let homeLink = document.querySelector("body .home-link")
let footer = document.querySelector("footer")

let observer = new IntersectionObserver(entries => {
    entries[0].isIntersecting && showElements()
    entries[0].isIntersecting || hideElements()
})

observer.observe(footer)




function showElements() {
    headerDOM.classList.add("invisible")
    erinLink.classList.add("invisible")
    homeLink.classList.add("invisible")
}

function hideElements() {
    headerDOM.classList.remove("invisible")
    erinLink.classList.remove("invisible")
    homeLink.classList.remove("invisible")
}