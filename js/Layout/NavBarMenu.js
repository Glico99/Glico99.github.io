import * as NavElements from './NavBar.js'
const Generi = ["Sport", "Horror", "RPG", "Azione", "Fps", "Corsa", "Open World"]
const Piattaforme = ["PSN", "Microsoft", "Nintendo", "Steam", "Epic", "Ubisoft"]

export function CreateMenu(MenuSection) {
  const NavBarMenuTitle = $(`<h1 class="NavBarMenuTitle">${MenuSection.text()}</h1>`)
  const NavBarMenuList = $(`<div class="NavBarMenuList"></div>`)

  NavElements.NavBarMenu.append(NavElements.ContenitoreNavBarMenu)
  NavElements.ContenitoreNavBarMenu.append(NavBarMenuTitle)
  NavElements.ContenitoreNavBarMenu.append(NavBarMenuList)

  if (MenuSection.text() == NavElements.links[0]) {
    for (const menuItem of Generi) {
      const elemento = $(`<span>${menuItem}</span>`)
      NavBarMenuList.append(elemento)
    }
  } else if (MenuSection.text() == NavElements.links[1]) {
    for (const menuItem of Piattaforme) {
      const elemento = $(`<span>${menuItem}</span>`)
      NavBarMenuList.append(elemento)
    }
  }
}