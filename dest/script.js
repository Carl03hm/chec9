"use strict";
//For Phone View Menu Button
const menu = document.querySelector(".menu");
const ul = document.querySelector("ul");
if (menu) {
    menu.addEventListener("click", () => {
        if (ul.style.display === "none" || ul.style.display === "" || menu.innerHTML === "⦾" || header.style.backgroundColor === "") {
            ul.style.display = "block";
            menu.innerHTML = "⦿";
            header.style.backgroundColor = '#010330';
        }
        else {
            ul.style.display = "none";
            menu.innerHTML = "⦾";
            header.style.backgroundColor = "";
        }
    });
}
//header element become web page sticky
const header = document.querySelector('header');
const headerHeight = header.clientHeight;
document.body.style.paddingTop = headerHeight + 'px';
//bgm
const bgm = [
    ''
];
