let rotation = 0;
const contact = document.querySelector("#mail > div > img.copy");
if (contact) {
    contact.style.display = "block"
    contact.addEventListener("click", copyOnClick)
} else {
    console.log("BROKEN BRUH")
}

function copyOnClick(e) {
    e.stopPropagation();
    rotation++;
    contact.style.transform = `rotate(${rotation * 360}deg)`

    const emailLink = contact.previousElementSibling.innerText;
    navigator.clipboard.writeText(emailLink);
}
