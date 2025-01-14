import { CreateMenu } from "./NavBarMenu.js";
const MediaQuery990 = window.matchMedia("screen and (max-width: 900px)")
export const NavBar = $("#NavBar")
export const Logo = $("#Logo");
export const LogoImg = $(".LogoImg")
export const LogoSlogan = $(".LogoSlogan");

export const Navigation = $("#Navigation");
export const NavLinks = $(".NavLinks");

export const SearchBar = $(".SearchBar");
export const SearchBox = $(".SearchBox");
export const SearchButton = $(".SearchButton");

export const ProfileLinks = $("#ProfileLinks");

export const NavBarMenu = $(`<div id="NavBarMenu"></div>`)
export const ContenitoreNavBarMenu = $(`<div class="ContenitoreNavBarMenu"></div>`)

export const links = ["Generi", "Piattaforme", "Prodotti in offerta", "Altri Software"];

//Funzione che crea i link di navigazione
Navigation.append(NavLinks);
NavBar.after(NavBarMenu)
NavBarMenu.append(ContenitoreNavBarMenu)
export let isMenuOpen = false;
export function CreateLinks(container) {
  for (const link of links) {
    const NavLink = $(`<a class="NavLink">${link}</a>`)
    NavLinks.append(NavLink)

    NavLink.on("mouseover", function () {
      NavLink.addClass("GlowBlu")
      if (isMenuOpen && ($(this).text() == links[0] || $(this).text() == links[1])) {
          ContenitoreNavBarMenu.empty()
          CreateMenu(NavLink)
      }
    }).on("mouseleave", function () {
      NavLink.removeClass("GlowBlu")
    }).on("click", function () {
      if (!isMenuOpen && ($(this).text() == links[0] || $(this).text() == links[1])) {
        ContenitoreNavBarMenu.empty()
        isMenuOpen = true;
        NavBarMenu.animate({
          "block-size": "200px",
          "padding-block": "1%"
        }, 500).addClass("MenuShadow")
        
        CreateMenu($(this))
        ContenitoreNavBarMenu.animate({ "opacity": "1" }, 500)
      } else if (isMenuOpen && ($(this).text() == links[0] || $(this).text() == links[1])) {
        isMenuOpen = false;
        NavBarMenu.animate({
          "block-size": "0px",
          "padding": "0"
        }, 500)
        ContenitoreNavBarMenu.animate({"opacity": "0"}, 500)
      }
    })

    container.append(NavLink);
  }
}


//Sticky NavBar
$(window).on("scroll", function () {
  const scroll = $(window).scrollTop()
  if (scroll != 0 && !MediaQuery990.matches) {
    NavBar.css({
      "block-size": "60px",
    })
    SearchBar.css({
      "block-size": "80%",
    })

    NavLinks.remove().empty()
    LogoSlogan.remove();
  } else if (scroll == 0) {
    NavBar.css({
      "block-size": "150px"
    })

    SearchBar.css({
      "block-size": "40%",
    })

    NavLinks.animate({
      "block-size": "40%"
    }, 200);
    SearchBar.after(NavLinks)
    CreateLinks(NavLinks)
    Logo.append(LogoSlogan);
  }
})

//Elementi Ricerca
SearchBar.addClass("GlowRosso");

//Effetto Glow Searchbar
SearchBar.on("mouseover", function () {
  SearchBar.addClass("GlowBlu");
  SearchBox.css({ "border": "var(--bluMedio)" });
  SearchButton.css("background-color", "var(--rossoScuro)");

}).on("mouseleave", function () {
  SearchBar.removeClass("GlowBlu")
  SearchBox.css({ "border": "var(--rossoChiaro)", })
  SearchButton.css("background-color", "var(--rossoChiaro)");
})

// //Visualizzazione Risultati Ricerca
// const SearchResults = $(".SearchResults")
// $.map(games, function (game) {
//   const searchItem = $(`<p class="SearchItem">${game.nome}</p>`);
//   SearchResults.append(searchItem);
// })

// //Mostra Ricerca
// SearchBox.on("keyup", function (event) {
//   if (event.code != "Enter" && event.code != "Backspace" && event.code != "Space") {
//     SearchResults.css("display", "flex");
//   } else {
//     SearchResults.css("display", "none")
//   }
// })





