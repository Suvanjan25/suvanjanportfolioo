const texts = ["Frontend Developer","Web Designer","Computer Engineer"];
let textIndex = 0;
let charIndex = 0;
const typing = document.getElementById("typing");

function type() {
    if(charIndex < texts[textIndex].length){
        typing.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 120);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase(){
    if(charIndex > 0){
        typing.textContent = texts[textIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, 80);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 400);
    }
}

type();

document.querySelectorAll(".view-more").forEach(btn=>{
    btn.addEventListener("click", function(e){
        e.preventDefault();
        const desc = this.nextElementSibling;
        if(desc.style.display === "block"){
            desc.style.display = "none";
            this.textContent = "View More";
        } else {
            desc.style.display = "block";
            this.textContent = "View Less";
        }
    });
});
