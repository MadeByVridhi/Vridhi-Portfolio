// =========================
// Typing Animation
// =========================

const text = [
    "Graphic Designer",
    "Web Developer",
    "UI/UX Designer",
    "Freelancer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        setTimeout(()=>{

            let erase = setInterval(()=>{

                letter = letter.slice(0,-1);

                document.getElementById("typing").textContent = letter;

                if(letter.length === 0){

                    clearInterval(erase);

                    count++;
                    index = 0;

                    setTimeout(type,300);
                }

            },60);

        },1500);

    }
    else{

        setTimeout(type,120);

    }

}

type();



// =========================
// Scroll To Top Button
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }
    else{

        topBtn.style.display="none";

    }

});


topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});




// =========================
// Mobile Menu
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}



// Close menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});




// =========================
// Dark Mode
// =========================

const darkBtn = document.getElementById("darkBtn");


if(darkBtn){

    darkBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");


        if(document.body.classList.contains("dark")){

            darkBtn.textContent="☀️";

        }
        else{

            darkBtn.textContent="🌙";

        }

    });

}




// =========================
// Portfolio Lightbox
// =========================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

const viewProject = document.querySelector(".view-project");
const portfolioImage = document.querySelector(".portfolio-card img");


if(viewProject){

    viewProject.addEventListener("click",(e)=>{

        e.preventDefault();

        lightbox.style.display="flex";

        lightboxImg.src = portfolioImage.src;

    });

}


if(closeBtn){

    closeBtn.addEventListener("click",()=>{

        lightbox.style.display="none";

    });

}


if(lightbox){

    lightbox.addEventListener("click",(e)=>{

        if(e.target === lightbox){

            lightbox.style.display="none";

        }

    });

}

// =========================
// Custom Cursor
// =========================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

document.querySelectorAll("a, button, .service-card, .portfolio-card").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.classList.add("active");

    });

    
item.addEventListener("mouseleave",()=>{
        cursor.classList.remove("active");

    });

});

// =========================
// Scroll Progress Bar
// =========================

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// =========================
// Animated Counter
// =========================

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        counter.innerText = "0";

        const target = +counter.getAttribute("data-target");

        const update = () => {

            let current = +counter.innerText;

            let increment = Math.ceil(target / 80);

            if(current < target){

                counter.innerText = current + increment;

                setTimeout(update,25);

            }else{

                counter.innerText = target + "+";

            }

        };

        update();

    });

};

startCounters();

// =========================
// EmailJS Contact Form
// =========================

emailjs.init("HRhPp-_YShpZWKQcV");

const contactForm = document.getElementById("contactForm");
const sendBtn = document.getElementById("sendBtn");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    sendBtn.innerHTML = "Sending...";
    sendBtn.disabled = true;

    emailjs.sendForm(
        "akshu_services24",
        "template_73inbsl",
        this
    )
    .then(function(){

        alert("✅ Message Sent Successfully!");

        contactForm.reset();

        sendBtn.innerHTML = "Send Message";
        sendBtn.disabled = false;

    })
    .catch(function(error){

        alert("❌ Failed to send message.");

        console.log(error);

        sendBtn.innerHTML = "Send Message";
        sendBtn.disabled = false;

    });

});
