import MenuMobile from "./module/menu-mobile.js";
import menuDropDown from "./module/menu-drop-down.js";
import animacaoAoScroll from './module/animacao-ao-scroll.js';

menuDropDown();
animacaoAoScroll();
// Menu mobile com classe
const btnMenuMobile = document.querySelector('[data-menu-mobile="btn"]');
const listaMenuMobile = document.querySelector('[data-menu-mobile="lista"]');
const eventos = ["click", "touchstart"];

const confgMenuMobile = new MenuMobile(btnMenuMobile, listaMenuMobile, eventos);
confgMenuMobile.inicar();