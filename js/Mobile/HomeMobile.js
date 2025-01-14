import * as NavElements from '../Layout/NavBar.js'
import { InfoLinks,LogoFooter } from '../Layout/Footer.js'

const MediaQuery990 = window.matchMedia('screen and (max-width: 990px)')
const BurgerMenu = $(`<p id="BurgerMenu">\u2630</p>`)
const BurgerMenuList = $(`<div id="BurgerMenuList"></div>`)
function MediaQuery990Handler (e){
  if (e.matches) {
    NavElements.ProfileLinks.remove()
    NavElements.NavLinks.remove().empty()
    NavElements.NavBar.append(BurgerMenu)
    NavElements.NavBar.after(BurgerMenuList)
    
        
    let isMenuOpen = false;
    BurgerMenu.on("click", function(){
      if(!isMenuOpen){
        BurgerMenu.text("\uA835")
        BurgerMenuList.animate({
          "block-size": "325px",
          "padding-block":"10px"
        }, 500).addClass("MenuShadow")
        BurgerMenuList.append(`<h3 class="BurgerMenuTitle">Cerca per categoria</h3>`)
        NavElements.CreateLinks(BurgerMenuList)
        BurgerMenuList.append(`<h3 class="BurgerMenuTitle">Il mio profilo</h3>`)
        BurgerMenuList.append(`<a class="NavLink">Preferiti</a>`)
        BurgerMenuList.append(`<a class="NavLink">Carrello</a>`)
        BurgerMenuList.append(`<a class="NavLink">Profilo</a>`)

        isMenuOpen = true
      }else{
        BurgerMenu.text("\u2630")
        BurgerMenuList.animate({ 
          "block-size": "0",
          "padding-block": "0"
         }, 500).empty()
        isMenuOpen = false
      }
    })
    NavElements.NavBar.css("block-size", "300px")
    LogoFooter.remove()
  } else {
    NavElements.NavBar.append(NavElements.ProfileLinks)
    NavElements.NavBar.css("block-size", "150px")
    NavElements.SearchBar.after(NavElements.NavLinks)
    NavElements.CreateLinks(NavElements.NavLinks)
    InfoLinks.prepend(LogoFooter)

    BurgerMenuList.remove();
    BurgerMenu.remove()
   }
}

MediaQuery990.onchange = e => MediaQuery990Handler(e)
MediaQuery990Handler(MediaQuery990)


