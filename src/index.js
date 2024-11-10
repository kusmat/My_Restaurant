import {main_page} from "./main_page";
import {menu_page} from "./menu_page";
import {contact_page} from "./contact_page";


//initial load of the main page.


const home_button = document.querySelector("#nav_button_home");
const menu_button = document.querySelector("#nav_button_menu");
const contact_button = document.querySelector("#nav_button_contact");

const setup_main_page = ()=>
{
    // alert("I am in main!");
    let menu = document.getElementById('header_content');
    while (menu.firstChild) {
    menu.removeChild(menu.firstChild);}

    menu = document.getElementById('content');
    while (menu.firstChild) {
        menu.removeChild(menu.firstChild);}
    main_page();
}

const setup_menu_page = () =>{

    // alert("I am in menu!");
    let menu = document.getElementById('header_content');
    while (menu.firstChild) {
    menu.removeChild(menu.firstChild);}

    menu = document.getElementById('content');
    while (menu.firstChild) {
        menu.removeChild(menu.firstChild);}

    menu_page();

}

const setup_contact_page = () =>{

    // alert("I am in menu!");
    let menu = document.getElementById('header_content');
    while (menu.firstChild) {
    menu.removeChild(menu.firstChild);}

    menu = document.getElementById('content');
    while (menu.firstChild) {
        menu.removeChild(menu.firstChild);}

        contact_page();

}

home_button.addEventListener("click", setup_main_page)
menu_button.addEventListener("click", setup_menu_page)
contact_button.addEventListener("click", setup_contact_page)

//initial load of the page
main_page();






