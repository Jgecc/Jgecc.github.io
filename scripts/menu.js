let nav_ani = true;

let nav = document.querySelector("#navbar");
let link_text1 = document.querySelector("#link-text1");
let link_text2 = document.querySelector("#link-text2");
let link_text3 = document.querySelector("#link-text3");
let link_text4 = document.querySelector("#link-text4");
let link_text5 = document.querySelector("#link-text5");
let logo_text = document.querySelector(".logo-text");
let logo_spin = document.querySelector("#logo-spin");

function big(){
    if(nav_ani) {
        nav.style.width = "16rem";
        link_text1.style.display = "inline";
        link_text2.style.display = "inline";
        link_text3.style.display = "inline";
        link_text4.style.display = "inline";
        link_text5.style.display = "inline";
        logo_text.style.left = "0";
        logo_spin.style.marginLeft = "11rem";
        logo_spin.style.transform = "rotate(-180deg)";
        nav_ani = false;
    }else {
        nav.style.width = "";
        link_text1.style.display = "";
        link_text2.style.display = "";
        link_text3.style.display = "";
        link_text4.style.display = "";
        link_text5.style.display = "";
        logo_text.style.left = "";
        logo_spin.style.marginLeft = "";
        logo_spin.style.transform = "";
        nav_ani = true;
    }
}

function resizeCor(){
    if(window.innerWidth <= 600){
        nav.style.width = "";
        link_text1.style.display = "";
        link_text2.style.display = "";
        link_text3.style.display = "";
        link_text4.style.display = "";
        link_text5.style.display = "";
        logo_text.style.left = "";
        logo_spin.style.marginLeft = "";
        logo_spin.style.transform = "";
        nav_ani = true;
    }
}