Shery.mouseFollower();
Shery.makeMagnet(".navbar li, .image, .scroll, .ss1 img, .f1 i");


var tl = gsap.timeline();

tl.to("#loader h1", {
  delay: 0.5,
  duration: 1,
  onStart: time(),
});

tl.to("#loader", {
  top: "-100vh",
  //   delay: 0,
  duration: 1,
});

function time() {
  var a = 0;

  setInterval(function () {
    if (a < 100) {
      a = a + Math.floor(Math.random() * 20);
      document.querySelector("#loader h1").innerHTML = a + "%";
    } else {
      a = 100;
      document.querySelector("#loader h1").innerHTML = a + "%";
    }
  }, 100);
}

tl.from(".nav1 li, .nav2 li", {
  y: -100,
  duration: 0.35,
  delay: 0.1,
  opacity: 0,
  stagger: 0.2,
});

tl.from(".part1 h5, .part1 h3, .part1 p, .info1, .part2", {
  y: -100,
  duration: 0.4,
  delay: 0.1,
  opacity: 0,
  stagger: 0.2,
});

tl.from(".scroll i", {
  scale: 0,
  opacity: 0,
});

tl.to(".scroll i", {
  y: 30,
  repeat: -1,
  duration: 0.7,
  yoyo: true,
});

let typed = new Typed(".typing", {
  strings: ["Pranav Soni", "Frontend Developer", "UI Designer", "Web Developer", "Software Engineer"],
  typeSpeed: 100,
  backSpeed: 200,
  loop: true,
  startDelay: 6500,
});

let body = document.querySelector("body");
let nav = document.querySelector(".navbar");
let btn = document.querySelector(".sun");
let name_changer = document.querySelector(".part1 span");
let info1 = document.querySelector(".info1");
let info3 = document.querySelector(".info3");
let p2_img = document.querySelector(".part2 img");
let scroller = document.querySelector(".scroll button");
let hr1 = document.querySelector(".hr1");
let hr2 = document.querySelector(".hr2");
let hr3 = document.querySelector(".hr3");
let hr4 = document.querySelector(".hr4");
let s1_h2 = document.querySelector(".s1");
let ss1_img = document.querySelector(".ss1 img");
let sl1_i1 = document.querySelector(".i1");
let sl1_i2 = document.querySelector(".i2");
let sl1_i3 = document.querySelector(".i3");
let sl1_i4 = document.querySelector(".i4");
let sl1_i5 = document.querySelector(".i5");
let t1_h2 = document.querySelector(".t1");
let t2 = document.querySelector(".t2");
let p1 = document.querySelector(".p1");
let p2_1 = document.querySelector(".p2_1 img");
let p2_2_h3 = document.querySelector(".p2_2 h3");
let h22_span = document.querySelector(".h22 span");
let p2_21 = document.querySelector(".p2_21");
let p3_3 = document.querySelector(".p3_3");
let p3_2_h3 = document.querySelector(".p3_2 h3");
let h3_3_span = document.querySelector(".h3_3 span");
let p3_1_img = document.querySelector(".p3_1 img");
let p2_2_img = document.querySelector(".p2_2 img");
let pr2_2_h3 = document.querySelector(".pr2_2 h3");
let pr2_2_h22_1 = document.querySelector(".pr2_2 .h22_1 span");
let pr2_3 = document.querySelector(".pr2_3");
let mid_h5 = document.querySelector(".mid h5");
let f1_1_i = document.querySelector(".f1_1 i");
let f1_2_i = document.querySelector(".f1_2 i");
let f1_1 = document.querySelector(".f1_1");
let f1_2 = document.querySelector(".f1_2");
let line = document.querySelector(".line");
let f2_h5 = document.querySelector(".f2 h5");
let ip1_input = document.querySelector(".ip1 input");
let ip1_label = document.querySelector(".ip1 label");
let ip2_input = document.querySelector(".ip2 input");
let ip2_label = document.querySelector(".ip2 label");
let ip3_textarea = document.querySelector(".ip3 textarea");
let ip3_label = document.querySelector(".ip3 label");
let bn = document.querySelector(".bn");
let last = document.querySelector(".last");


let currentMode = "black";
btn.addEventListener("click" , () => {
        if(currentMode === "white")
        {
                currentMode = "black";
                body.classList.add("black");
                body.classList.remove("white");
                nav.classList.add("white");
                nav.classList.remove("black");
                name_changer.classList.add("typing");
                name_changer.classList.remove("orange1");
                info1.classList.remove("info2");
                info3.classList.remove("info2");
                p2_img.style.border = "4px solid chartreuse";       
                scroller.style.backgroundColor = "black";
                scroller.style.color = "rgb(228, 216, 216)";                
                hr1.style.backgroundColor = "rgb(228, 216, 216)";
                hr2.style.backgroundColor = "rgb(228, 216, 216)";
                hr3.style.backgroundColor = "rgb(228, 216, 216)";
                hr4.style.backgroundColor = "rgb(228, 216, 216)";
                s1_h2.style.color = "chartreuse";                
                ss1_img.style.border = "4px solid chartreuse";
                sl1_i1.classList.add("i_color1");
                sl1_i1.classList.remove("i_color2");
                sl1_i2.classList.add("i_color1");
                sl1_i2.classList.remove("i_color2");
                sl1_i3.classList.add("i_color1");
                sl1_i3.classList.remove("i_color2");
                sl1_i4.classList.add("i_color1");
                sl1_i4.classList.remove("i_color2");
                sl1_i5.classList.add("i_color1");
                sl1_i5.classList.remove("i_color2"); 
                t1_h2.style.color="chartreuse";                 
                t2.style.border="2px solid rgb(228, 216, 216)";                
                p1.style.color="chartreuse";                
                p2_1.style.border = "4px solid rgb(228, 216, 216)";
                p2_2_h3.style.color = "chartreuse";
                h22_span.style.color = "chartreuse";
                p2_21.classList.add("p2_21");
                p2_21.classList.remove("p2_22");
                p3_3.classList.add("p3_3");
                p3_3.classList.remove("p3_31");
                p3_2_h3.style.color = "chartreuse";
                h3_3_span.style.color = "chartreuse";                
                p3_1_img.style.border = "4px solid rgb(228, 216, 216)";
                p2_2_img.style.border = "4px solid rgb(228, 216, 216)";               
                pr2_2_h3.style.color = "chartreuse";
                pr2_2_h22_1.style.color = "chartreuse";                
                pr2_3.classList.add("pr2_3");
                pr2_3.classList.remove("pr2_3_1");
                mid_h5.style.color = "chartreuse";
                f1_1_i.style.color = "chartreuse";
                f1_2_i.style.color = "chartreuse";                
                f1_1.style.border = "4px solid rgb(228, 216, 216)";
                f1_2.style.border = "4px solid rgb(228, 216, 216)";                
                line.style.backgroundColor = "chartreuse";
                f2_h5.style.color = "chartreuse";                 
                ip1_input.style.border = "4px solid rgb(228, 216, 216)";                 
                ip1_input.style.color = "rgb(228, 216, 216)"; 
                ip1_label.style.color = "chartreuse"; 
                ip1_label.style.backgroundColor = "black"; 
                ip1_label.style.borderRadius = "20px"; 
                ip1_label.style.marginLeft = "20px";                 
                ip2_input.style.border = "4px solid rgb(228, 216, 216)";                 
                ip2_input.style.color = "rgb(228, 216, 216)"; 
                ip2_label.style.color = "chartreuse"; 
                ip2_label.style.backgroundColor = "black"; 
                ip2_label.style.borderRadius = "20px"; 
                ip2_label.style.marginLeft = "20px";                 
                ip3_textarea.style.border = "4px solid rgb(228, 216, 216)";                 
                ip3_textarea.style.color = "rgb(228, 216, 216)"; 
                ip3_label.style.color = "chartreuse"; 
                ip3_label.style.backgroundColor = "black"; 
                ip3_label.style.borderRadius = "20px"; 
                ip3_label.style.marginLeft = "20px";                
                bn.classList.add("bn");
                bn.classList.remove("bn1");                
                last.style.backgroundColor = "rgb(228, 216, 216)";                 
                last.style.color = "black"; 
              }
              else{
                currentMode = "white";
                body.classList.add("white");
                body.classList.remove("black");
                nav.classList.add("black");
                nav.classList.remove("white");
                name_changer.classList.add("orange1");
                name_changer.classList.remove("typing");
                info1.classList.add("info2");
                info3.classList.add("info2");
                p2_img.style.border = "4px solid orangered";
                scroller.style.backgroundColor = "rgb(228, 216, 216)";
                scroller.style.color = "black";                
                hr1.style.backgroundColor = "black";
                hr2.style.backgroundColor = "black";
                hr3.style.backgroundColor = "black";
                hr4.style.backgroundColor = "black";
                s1_h2.style.color = "orangered"; 
                ss1_img.style.border = "4px solid orangered";             
                sl1_i1.classList.add("i_color2");
                sl1_i1.classList.remove("i_color1");
                sl1_i2.classList.add("i_color2");
                sl1_i2.classList.remove("i_color1");
                sl1_i3.classList.add("i_color2");
                sl1_i3.classList.remove("i_color1");
                sl1_i4.classList.add("i_color2");
                sl1_i4.classList.remove("i_color1");
                sl1_i5.classList.add("i_color2");
                sl1_i5.classList.remove("i_color1"); 
                t1_h2.style.color="orangered";                
                t2.style.border="2px solid black"; 
                p1.style.color="orangered"; 
                p2_1.style.border = "4px solid orangered";
                p2_2_h3.style.color = "orangered";
                h22_span.style.color = "orangered";
                p2_21.classList.add("p2_22");
                p2_21.classList.remove("p2_21");
                p3_3.classList.add("p3_31");
                p3_3.classList.remove("p3_3");
                p3_2_h3.style.color = "orangered";
                h3_3_span.style.color = "orangered";                
                p3_1_img.style.border = "4px solid black";
                p2_2_img.style.border = "4px solid orangered";                
                pr2_2_h3.style.color = "orangered";
                pr2_2_h22_1.style.color = "orangered";
                pr2_3.classList.add("pr2_3_1");
                pr2_3.classList.remove("pr2_3");                
                mid_h5.style.color = "orangered";
                f1_1_i.style.color = "orangered";
                f1_2_i.style.color = "orangered";
                f1_1.style.border = "4px solid black";
                f1_2.style.border = "4px solid black";                
                line.style.backgroundColor = "orangered";
                f2_h5.style.color = "orangered";
                ip1_input.style.border = "4px solid black"; 
                ip1_input.style.color = "black";                 
                ip1_label.style.color = "orangered"; 
                ip1_label.style.backgroundColor = "rgb(228, 216, 216)";                 
                ip1_label.style.borderRadius = "20px"; 
                ip1_label.style.marginLeft = "20px";
                ip2_input.style.border = "4px solid black"; 
                ip2_input.style.color = "black";                 
                ip2_label.style.color = "orangered"; 
                ip2_label.style.backgroundColor = "rgb(228, 216, 216)";                 
                ip2_label.style.borderRadius = "20px";
                ip2_label.style.marginLeft = "20px";  
                ip3_textarea.style.border = "4px solid black"; 
                ip3_textarea.style.color = "black";                 
                ip3_label.style.color = "orangered"; 
                ip3_label.style.backgroundColor = "rgb(228, 216, 216)";                 
                ip3_label.style.borderRadius = "20px"; 
                ip3_label.style.marginLeft = "20px";                 
                bn.classList.add("bn1");
                bn.classList.remove("bn");
                last.style.backgroundColor = "black"; 
                last.style.color = "rgb(228, 216, 216)";
        }

        console.log(currentMode);
})

btn.addEventListener("click",()=>{
    gsap.to(".sun",{
      rotation: "+=360"
    })
})

document.addEventListener('DOMContentLoaded', function() {
  const liElements = document.querySelectorAll('.nav2 li');
  liElements.forEach(function(li) {
    li.addEventListener('click', function() {
      const id = this.id.replace('Link', '');
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});