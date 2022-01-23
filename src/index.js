import _ from 'lodash';
import Navbar from './components/navbar.js';
import  Header from './components/header.js';
import Home, { HomeMenu } from './pages/Home.js';
import Tacos, { TacosMenu } from './pages/Tacos.js';
import About, { AboutMenu } from './pages/About.js';


/* function component() {
    const element = document.createElement('div');
  
    // Lodash, imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
}
  
document.body.appendChild(component()); */

/* An array to handle the pages and add them later to the navbar */
const menuItems = [HomeMenu, TacosMenu, AboutMenu];
// Each of these pages have a name that will be used as its 'key'.

const pages = {
  Home,
  Tacos,
  About
};

const contentEl = document.querySelector("#content");

// Now, for each of the menuItem array elements, pop them into
//  the Navbar.
menuItems.forEach( menuItem => {
  console.log(menuItem)
    Navbar.querySelector("ul").append(menuItem);
})

// Finally, we add the listener to the Navbar. One listener, for all the menu items.
//  when the menu item is chosen, we find its `data-ref`, which is the reference to
//  the thing in the `pages` array.
// the HomeMenu has a dataset.ref==='Home', so it will load pages['Home']
Navbar.querySelector("ul").addEventListener("click", (e)=>{
    if(e.target.dataset?.ref){
        contentEl.innerHTML='';
        contentEl.append( pages[e.target.dataset.ref].cloneNode(true) );
    }
})

// Lastly, with all the content loaded into the menu, we can inject it in place.
document.body.insertBefore(Header, contentEl)
document.body.insertBefore(Navbar, contentEl);

// and then load the `Home` page by default :D
document.querySelector(".main-navbar a[data-ref='Home']").click();