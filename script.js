let mouse = document.querySelector(".mouse")
const colorsRGB = ["rgb(19, 153, 97)", "rgb(75 106 93)", "rgb(24 55 42)", "rgb(31 69 59)", "rgb(31 69 47)"]
let count = 0

document.addEventListener("mousemove", function (det) {
    mouse.style.left = det.clientX + "px"
    mouse.style.top = det.clientY + "px"
})

setInterval(function () {
    mouse.style.backgroundColor = colorsRGB[count]
    count++
    if (count === colorsRGB.length) {
        count = 0
    }
}, 200)


let typing = document.querySelector(".typing");
let text = "Front-end Developer";
let i = 0;
setInterval(function () {
    if (i < text.length) {
        typing.textContent += text[i]; 
        i++;}
}, 150)

let piller=document.querySelector(".piller")
let pil=0
setInterval(function(){
    if(pil===0){
        piller.style.color="transparent"
        pil=1
    }
    else{
        piller.style.color="white"
        pil=0
    }
},330)


let form = document.querySelector(".form")
let input = document.querySelectorAll(".form input")
let textarea=document.querySelector(".form textarea")
form.addEventListener("submit", function (ints) {
    ints.preventDefault();
    let fullname = input[0].value
    let email = input[1].value
    let subject = input[2].value
    let message=textarea.value

    const isValidName = /^[A-Za-z\s'-]{2,50}$/.test(fullname);
    const isValidemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!isValidemail) {
        alert("Please enter a valid email address.");
        return;
    }
    const isValidsubject = /^[A-Za-z\s'-]{2,50}$/.test(subject);
    const isValidtextarea =message.trim().length > 0

    if(isValidName && isValidemail && isValidsubject && isValidtextarea){
        alert("Successfully sumbit!")

        console.log("submit")
        form.reset()
    }
})

let moon=document.querySelector(".moon> :nth-child(2)")
let sun=document.querySelector(".moon> :nth-child(1)")
let back=document.querySelector(".back")

let flag = 0

document.querySelector(".moon").addEventListener("click",function(){
    document.body.classList.toggle("light-mode")
    if(flag === 0){
        moon.style.opacity = "0"
        moon.style.transition = "opacity 1s ease-in-out"
        sun.style.opacity = "1"
        document.querySelector(".back img").style.opacity = "0"
        back.style.backgroundColor = "rgb(245, 245, 245)"
        document.querySelector(".back img").style.transition = "opacity 1s ease-in-out"
        flag = 1
        console.log("sun")
    }
    else{
        moon.style.opacity = "1"
        sun.style.transition = "opacity 1s ease-in-out"
        sun.style.opacity = "0"
        document.querySelector(".back img").style.opacity = "1"
        document.querySelector(".back img").style.transition = "opacity 1s ease-in-out"
        flag = 0
        console.log("moon")
    }
})
